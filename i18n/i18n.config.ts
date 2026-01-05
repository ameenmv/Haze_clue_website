export default defineI18nConfig(() => {
  return {
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'ar',
    fallbackWarn: false,
    missingWarn: false,
    sync: true
  }
})
