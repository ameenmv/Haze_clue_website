# Haze Clue -- Backend API Requirements

This document lists all API endpoints the frontend needs. Endpoints marked **DONE** already exist. Everything else is **NEEDED**.

All endpoints require `Authorization: Bearer <token>` unless stated otherwise.
All requests include `Accept-Language: en|ar` header -- responses should respect it for error messages.

---

## 1. Auth (DONE)

Already implemented and integrated:

| Method | Endpoint                | Status |
|--------|-------------------------|--------|
| POST   | `/api/Auth/login`       | DONE   |
| POST   | `/api/Auth/register`    | DONE   |
| POST   | `/api/auth/forgot-password` | DONE |
| POST   | `/api/auth/verify-otp`  | DONE   |
| POST   | `/api/auth/resend-otp`  | DONE   |
| POST   | `/api/auth/reset-password` | DONE |
| POST   | `/api/auth/logout`      | DONE   |

---

## 2. User Profile (NEEDED)

Used on: Settings page, Sidebar user profile

### GET /api/user/profile

Returns the authenticated user's full profile.

```json
// Response
{
  "id": "string",
  "fullName": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string | null",
  "bio": "string | null",
  "avatar": "string | null",         // URL to profile image
  "twoFactorEnabled": false,
  "emailNotifications": true,
  "marketingEmails": false,
  "createdAt": "ISO date"
}
```

### PUT /api/user/profile

Updates personal information.

```json
// Request body
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string | null",
  "bio": "string | null"
}
```

### POST /api/user/avatar

Uploads a new profile photo. Content-Type: `multipart/form-data`.

| Field  | Type | Note                      |
|--------|------|---------------------------|
| avatar | File | Max 2MB, JPEG/PNG/WebP    |

```json
// Response
{ "avatar": "https://...url-to-uploaded-image" }
```

### PUT /api/user/password

Changes the user's password.

```json
// Request body
{
  "currentPassword": "string",
  "newPassword": "string",
  "newPassword_confirmation": "string"
}
```

### PUT /api/user/settings

Updates account toggles (2FA, notifications, marketing).

```json
// Request body
{
  "twoFactorEnabled": true,
  "emailNotifications": true,
  "marketingEmails": false
}
```

### DELETE /api/user/account

Permanently deletes the user account. Requires password confirmation.

```json
// Request body
{ "password": "string" }
```

---

## 3. Dashboard Summary (NEEDS FIX)

Used on: Dashboard home page (stats cards, charts, recent activity)

`GET /api/Sessions/dashboard` exists but returns 500. Once fixed, it should return:

```json
{
  "connectedDevices": 0,
  "activeSessions": 0,
  "avgAttention": null,          // number or null if no data
  "reportsGenerated": 0,
  "attentionTrends": [           // last 7/30 days for line chart
    { "date": "2026-03-01", "avgAttention": 78.5 }
  ],
  "attentionDistribution": {     // for pie/donut chart
    "high": 45,
    "medium": 35,
    "low": 20
  },
  "recentActivity": [
    {
      "id": "string",
      "type": "session_created | session_ended | report_generated | device_connected",
      "title": "string",
      "description": "string",
      "createdAt": "ISO date"
    }
  ]
}
```

---

## 4. Sessions (PARTIALLY DONE)

CRUD exists per the API list. The frontend needs the following response shapes:

### GET /api/Sessions

List all sessions with pagination and filtering.

Query params: `?page=1&limit=10&status=active|completed|draft`

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "subject": "string",
      "gradeLevel": "string",
      "status": "draft | active | completed",
      "devicesCount": 0,
      "avgAttention": null,
      "duration": 0,                // minutes
      "startedAt": "ISO date | null",
      "endedAt": "ISO date | null",
      "createdAt": "ISO date",
      "settings": {
        "realTimeAlerts": true,
        "autoSave": true,
        "generateReport": true
      }
    }
  ],
  "total": 0,
  "page": 1,
  "limit": 10
}
```

### POST /api/Sessions

Creates a new session.

```json
// Request body
{
  "name": "string",
  "subject": "string",
  "gradeLevel": "string",
  "notes": "string | null",
  "status": "draft | active",
  "settings": {
    "realTimeAlerts": true,
    "autoSave": true,
    "generateReport": true
  }
}
```

### GET /api/Sessions/{id}

Returns a single session with full details (same shape as list item but with `notes` field included).

### PUT /api/Sessions/{id}

Updates session fields. Same body as POST.

### DELETE /api/Sessions/{id}

Deletes a session.

### POST /api/Sessions/{id}/start

Starts a session (changes status from `draft` to `active`, sets `startedAt`).

### POST /api/Sessions/{id}/end

Ends an active session (changes status to `completed`, sets `endedAt`).

---

## 5. Devices (NEEDED)

Used on: Devices page, Session creation (device assignment), Live monitoring

### GET /api/devices

List all registered devices for the user.

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "serialNumber": "string",
      "type": "EEG headband | EEG headset",
      "status": "online | offline | pairing",
      "batteryLevel": 85,           // percentage, null if unknown
      "lastSeenAt": "ISO date | null",
      "assignedTo": "string | null"  // student name if assigned
    }
  ]
}
```

### POST /api/devices

Register a new device.

```json
// Request body
{
  "name": "string",
  "serialNumber": "string",
  "type": "EEG headband | EEG headset"
}
```

### DELETE /api/devices/{id}

Unregister a device.

### PUT /api/devices/{id}

Update device name or assignment.

```json
{ "name": "string" }
```

---

## 6. Live Session Data (NEEDED -- WebSocket)

Used on: Live Session page (real-time attention chart, stats, meter)

This is the most critical real-time feature. Frontend will connect via WebSocket once a session is started.

### WebSocket: `ws(s)://<host>/ws/session/{sessionId}`

Connection requires the auth token as a query param or in the first message:
`ws://host/ws/session/123?token=<jwt>`

#### Server sends to client (every 1-2 seconds):

```json
{
  "type": "attention_update",
  "timestamp": "ISO date",
  "data": {
    "classAvgAttention": 82,         // 0-100
    "connectedDevices": 18,
    "totalDevices": 20,
    "duration": "25:30",             // elapsed mm:ss
    "remainingTime": "19:30",        // remaining mm:ss, null if no limit
    "engagementLevel": "high | medium | low",
    "perStudent": [                  // optional, for detailed view
      {
        "deviceId": "string",
        "studentName": "string",
        "attention": 85
      }
    ]
  }
}
```

#### Server sends alerts:

```json
{
  "type": "alert",
  "timestamp": "ISO date",
  "data": {
    "level": "warning | critical",
    "message": "Attention dropped below 50%",
    "deviceId": "string | null"
  }
}
```

#### Client sends to server:

```json
// Pause session
{ "action": "pause" }

// Resume session
{ "action": "resume" }

// End session
{ "action": "end" }
```

If WebSocket is not feasible initially, provide a polling fallback:

### GET /api/Sessions/{id}/live-data (polling fallback)

Same response shape as the WebSocket `attention_update` message. Frontend will poll every 2 seconds.

---

## 7. Reports (NEEDED)

Used on: Reports page, Session completion auto-generation

### GET /api/reports

List generated reports with pagination.

Query params: `?page=1&limit=10&sessionId=<optional>`

```json
{
  "data": [
    {
      "id": "string",
      "sessionId": "string",
      "sessionName": "string",
      "type": "session_summary | attention_analysis",
      "status": "generating | ready | failed",
      "createdAt": "ISO date",
      "downloadUrl": "string | null"
    }
  ],
  "total": 0,
  "page": 1,
  "limit": 10
}
```

### POST /api/reports/generate

Manually trigger report generation for a completed session.

```json
// Request body
{
  "sessionId": "string",
  "type": "session_summary | attention_analysis"
}
```

### GET /api/reports/{id}

Full report details including data breakdown.

```json
{
  "id": "string",
  "sessionId": "string",
  "sessionName": "string",
  "type": "string",
  "status": "ready",
  "createdAt": "ISO date",
  "downloadUrl": "string",
  "summary": {
    "duration": 45,
    "avgAttention": 78,
    "peakAttention": 95,
    "lowestAttention": 42,
    "studentsCount": 20,
    "highAttentionPercent": 60,
    "mediumAttentionPercent": 25,
    "lowAttentionPercent": 15
  },
  "timeline": [
    { "minute": 0, "avgAttention": 72 },
    { "minute": 1, "avgAttention": 75 }
  ]
}
```

### GET /api/reports/{id}/export

Downloads the report as PDF. Returns binary file with `Content-Type: application/pdf`.

---

## 8. Support / Contact (NEEDED)

Used on: Help page contact form

### POST /api/support/contact

Public or authenticated. Sends a support request.

```json
// Request body
{
  "fullName": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

```json
// Response
{ "message": "Your message has been sent successfully" }
```

---

## 9. Lookup / Static Data (NEEDED)

Used on: Session creation form (dropdown options)

### GET /api/lookups/subjects

Returns available subjects for dropdown.

```json
[
  { "id": "math", "name": "Mathematics" },
  { "id": "science", "name": "Science" }
]
```

### GET /api/lookups/grade-levels

Returns available grade levels for dropdown.

```json
[
  { "id": "grade-1", "name": "Grade 1" },
  { "id": "grade-2", "name": "Grade 2" }
]
```

---

## Priority Order

1. **Fix** `GET /api/Sessions/dashboard` (currently 500)
2. **User Profile** APIs (GET, PUT, password change, delete)
3. **Devices** CRUD
4. **Live Session WebSocket** (or polling fallback)
5. **Reports** generation and listing
6. **Lookups** (subjects, grade levels)
7. **Support contact** endpoint

---

## General Notes

- All list endpoints should support pagination via `page` and `limit` query params
- All error responses should follow a consistent shape:
  ```json
  { "message": "Human-readable error", "errors": { "field": ["message"] } }
  ```
- Error messages should be localized based on the `Accept-Language` header
- Timestamps should be ISO 8601 format (`2026-03-12T00:00:00Z`)
- The WebSocket connection is the highest-priority feature for the live session experience. If not ready, we will use the polling fallback temporarily
