import app from './ar/app'
import auth from './ar/auth'
import common from './ar/common'
import dashboard from './ar/dashboard'
import error from './ar/error'
import landing from './ar/landing'
import navigation from './ar/navigation'
import validation from './ar/validation'

import auth_layout from './ar/auth_layout.json'
import landing_new from './ar/landing_new.json'
import dashboard_new from './ar/dashboard_new.json'

export default {
  auth: { ...auth, layout: auth_layout },
  app,
  common,
  dashboard: { ...dashboard, ...dashboard_new },
  error,
  landing: { ...landing, ...landing_new },
  navigation,
  validation
}
