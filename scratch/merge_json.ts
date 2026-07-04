import fs from 'fs'
import path from 'path'
import { defu } from 'defu'

// Use JITI or tsx to run this
import landingEn from '../i18n/locales/en/landing.ts'
import landingAr from '../i18n/locales/ar/landing.ts'
import dashboardEn from '../i18n/locales/en/dashboard.ts'
import dashboardAr from '../i18n/locales/ar/dashboard.ts'
import authEn from '../i18n/locales/en/auth.ts'
import authAr from '../i18n/locales/ar/auth.ts'

import landingNewEn from '../i18n/locales/en/landing_new.json' assert { type: 'json' }
import landingNewAr from '../i18n/locales/ar/landing_new.json' assert { type: 'json' }
import dashboardNewEn from '../i18n/locales/en/dashboard_new.json' assert { type: 'json' }
import dashboardNewAr from '../i18n/locales/ar/dashboard_new.json' assert { type: 'json' }
import authLayoutEn from '../i18n/locales/en/auth_layout.json' assert { type: 'json' }
import authLayoutAr from '../i18n/locales/ar/auth_layout.json' assert { type: 'json' }

const resultLandingEn = defu(landingNewEn, landingEn.default || landingEn)
const resultLandingAr = defu(landingNewAr, landingAr.default || landingAr)
const resultDashboardEn = defu(dashboardNewEn, dashboardEn.default || dashboardEn)
const resultDashboardAr = defu(dashboardNewAr, dashboardAr.default || dashboardAr)
const resultAuthEn = defu({ layout: authLayoutEn }, authEn.default || authEn)
const resultAuthAr = defu({ layout: authLayoutAr }, authAr.default || authAr)

fs.writeFileSync('../i18n/locales/en/landing.json', JSON.stringify(resultLandingEn, null, 2))
fs.writeFileSync('../i18n/locales/ar/landing.json', JSON.stringify(resultLandingAr, null, 2))
fs.writeFileSync('../i18n/locales/en/dashboard.json', JSON.stringify(resultDashboardEn, null, 2))
fs.writeFileSync('../i18n/locales/ar/dashboard.json', JSON.stringify(resultDashboardAr, null, 2))
fs.writeFileSync('../i18n/locales/en/auth.json', JSON.stringify(resultAuthEn, null, 2))
fs.writeFileSync('../i18n/locales/ar/auth.json', JSON.stringify(resultAuthAr, null, 2))

console.log("JSON files created successfully!")
