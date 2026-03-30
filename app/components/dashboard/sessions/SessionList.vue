<template>
   <section class="your-sessions">
      <!-- Header -->
      <div class="your-sessions__header">
         <div class="your-sessions__header-row">
            <div class="your-sessions__header-text">
               <h3 class="your-sessions__title">{{ $t('dashboard.sessions.yourSessions.title') }}</h3>
               <p class="your-sessions__subtitle">{{ $t('dashboard.sessions.yourSessions.subtitle') }}</p>
            </div>
            <select v-model="statusFilter" class="your-sessions__filter">
               <option value="">{{ $t('dashboard.sessions.yourSessions.filter') }}</option>
               <option value="draft">Draft</option>
               <option value="active">Active</option>
               <option value="completed">Completed</option>
            </select>
         </div>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="your-sessions__empty">
         <p class="your-sessions__empty-desc">Loading sessions...</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="!sessions.length" class="your-sessions__empty">
         <UIcon name="lucide:folder-plus" class="your-sessions__empty-icon" />
         <h4 class="your-sessions__empty-title">{{ $t('dashboard.sessions.yourSessions.emptyTitle') }}</h4>
         <p class="your-sessions__empty-desc">{{ $t('dashboard.sessions.yourSessions.emptyDesc') }}</p>
         <button class="your-sessions__empty-btn" @click="$emit('createFirst')">
            <UIcon name="lucide:plus" class="w-4 h-4" />
            <span>{{ $t('dashboard.sessions.yourSessions.createFirst') }}</span>
         </button>
      </div>

      <!-- Sessions List -->
      <div v-else class="your-sessions__list">
         <div v-for="session in filteredSessions" :key="session.id" class="your-sessions__card"
            @click="navigateTo(`/dashboard/live-session?id=${session.id}`)">
            <div class="your-sessions__card-top">
               <h4 class="your-sessions__card-title">{{ session.title }}</h4>
               <span class="your-sessions__card-status" :class="`your-sessions__card-status--${session.status}`">
                  {{ session.status }}
               </span>
            </div>
            <div class="your-sessions__card-meta">
               <span v-if="session.subject">📚 {{ session.subject }}</span>
               <span v-if="session.className">🏫 {{ session.className }}</span>
               <span v-if="session.students">👥 {{ session.students }} students</span>
               <span v-if="session.duration">⏱ {{ session.duration }} min</span>
            </div>
            <div class="your-sessions__card-actions">
               <button v-if="session.status === 'draft'"
                  class="your-sessions__action-btn your-sessions__action-btn--start"
                  @click.stop="handleStart(session.id)">
                  <UIcon name="lucide:play" class="w-3.5 h-3.5" /> Start
               </button>
               <button v-if="session.status === 'active'"
                  class="your-sessions__action-btn your-sessions__action-btn--end" @click.stop="handleEnd(session.id)">
                  <UIcon name="lucide:square" class="w-3.5 h-3.5" /> End
               </button>
               <button class="your-sessions__action-btn your-sessions__action-btn--delete"
                  @click.stop="handleDelete(session.id)">
                  <UIcon name="lucide:trash-2" class="w-3.5 h-3.5" />
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import { sessionsApi } from '~/services/sessions';

defineEmits<{ createFirst: [] }>()

const statusFilter = ref('')

// ── Fetch sessions ───────────────────────────────────
const { data: sessionsData, pending, refresh } = await useAppFetch('sessions-list', () => sessionsApi.list(1, 50))

const sessions = computed(() => (sessionsData.value as any)?.data ?? [])

const filteredSessions = computed(() => {
   if (!statusFilter.value) return sessions.value
   return sessions.value.filter((s: any) => s.status === statusFilter.value)
})

// ── Actions ──────────────────────────────────────────
const handleStart = async (id: string) => {
   try {
      await sessionsApi.start(id)
      refresh()
   } catch (e) {
      console.error('Failed to start session:', e)
   }
}

const handleEnd = async (id: string) => {
   try {
      await sessionsApi.end(id)
      refresh()
   } catch (e) {
      console.error('Failed to end session:', e)
   }
}

const handleDelete = async (id: string) => {
   if (!confirm('Are you sure you want to delete this session?')) return
   try {
      await sessionsApi.remove(id)
      refresh()
   } catch (e) {
      console.error('Failed to delete session:', e)
   }
}
</script>

<style scoped>
.your-sessions {
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   border-radius: 12px;
   overflow: hidden;
}

:root.dark .your-sessions {
   background: #1a1d27;
   border-color: #2d3040;
}

/* ─── Header ─────────────────────────────────────── */
.your-sessions__header {
   padding: 16px 24px;
   border-bottom: 1px solid #E5E7EB;
}

:root.dark .your-sessions__header {
   border-bottom-color: #2d3040;
}

.your-sessions__header-row {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.your-sessions__header-text {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.your-sessions__title {
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: #111827;
   margin: 0;
}

:root.dark .your-sessions__title {
   color: #F3F4F6;
}

.your-sessions__subtitle {
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #6B7280;
   margin: 0;
}

:root.dark .your-sessions__subtitle {
   color: #9CA3AF;
}

.your-sessions__filter {
   padding: 8px 32px 8px 20px;
   background: #EFEFEF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   line-height: 17px;
   color: #000000;
   outline: none;
   cursor: pointer;
   appearance: auto;
}

:root.dark .your-sessions__filter {
   background: #252836;
   border-color: #3d4050;
   color: #F3F4F6;
}

/* ─── Empty State ────────────────────────────────── */
.your-sessions__empty {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding: 64px 24px;
   gap: 8px;
}

.your-sessions__empty-icon {
   width: 60px;
   height: 60px;
   color: #D1D5DB;
   margin-bottom: 16px;
}

:root.dark .your-sessions__empty-icon {
   color: #4B5563;
}

.your-sessions__empty-title {
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 20px;
   line-height: 28px;
   color: #4B5563;
   margin: 0;
}

:root.dark .your-sessions__empty-title {
   color: #9CA3AF;
}

.your-sessions__empty-desc {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #6B7280;
   margin: 0;
   max-width: 448px;
}

:root.dark .your-sessions__empty-desc {
   color: #6B7280;
}

.your-sessions__empty-btn {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 12px 24px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   cursor: pointer;
   margin-top: 16px;
   transition: opacity 0.2s, transform 0.15s;
}

.your-sessions__empty-btn:hover {
   opacity: 0.9;
   transform: translateY(-1px);
}

.your-sessions__empty-btn:active {
   transform: translateY(0);
}

/* ─── Sessions List ──────────────────────────────── */
.your-sessions__list {
   display: flex;
   flex-direction: column;
}

.your-sessions__card {
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding: 16px 24px;
   border-bottom: 1px solid #E5E7EB;
   cursor: pointer;
   transition: background 0.15s;
}

.your-sessions__card:last-child {
   border-bottom: none;
}

.your-sessions__card:hover {
   background: #F9FAFB;
}

:root.dark .your-sessions__card {
   border-bottom-color: #2d3040;
}

:root.dark .your-sessions__card:hover {
   background: #252836;
}

.your-sessions__card-top {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.your-sessions__card-title {
   font-family: 'Inter', sans-serif;
   font-weight: 600;
   font-size: 16px;
   color: #111827;
   margin: 0;
}

:root.dark .your-sessions__card-title {
   color: #F3F4F6;
}

.your-sessions__card-status {
   font-size: 12px;
   font-weight: 600;
   padding: 2px 10px;
   border-radius: 9999px;
   text-transform: capitalize;
}

.your-sessions__card-status--draft {
   background: #F3F4F6;
   color: #6B7280;
}

.your-sessions__card-status--active {
   background: #DCFCE7;
   color: #16A34A;
}

.your-sessions__card-status--completed {
   background: #DBEAFE;
   color: #2563EB;
}

.your-sessions__card-status--scheduled {
   background: #FEF3C7;
   color: #D97706;
}

.your-sessions__card-meta {
   display: flex;
   gap: 16px;
   flex-wrap: wrap;
   font-family: 'Inter', sans-serif;
   font-size: 13px;
   color: #6B7280;
}

:root.dark .your-sessions__card-meta {
   color: #9CA3AF;
}

.your-sessions__card-actions {
   display: flex;
   gap: 8px;
   margin-top: 4px;
}

.your-sessions__action-btn {
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 6px 12px;
   border-radius: 6px;
   border: 1px solid #E5E7EB;
   background: none;
   font-family: 'Inter', sans-serif;
   font-size: 13px;
   cursor: pointer;
   transition: all 0.15s;
   color: #4B5563;
}

:root.dark .your-sessions__action-btn {
   border-color: #3d4050;
   color: #9CA3AF;
}

.your-sessions__action-btn:hover {
   background: #F3F4F6;
}

:root.dark .your-sessions__action-btn:hover {
   background: #252836;
}

.your-sessions__action-btn--start {
   color: #16A34A;
   border-color: #DCFCE7;
}

.your-sessions__action-btn--end {
   color: #DC2626;
   border-color: #FEE2E2;
}

.your-sessions__action-btn--delete {
   color: #DC2626;
   border-color: #FEE2E2;
}

.your-sessions__action-btn--delete:hover {
   background: #FEF2F2;
}
</style>
