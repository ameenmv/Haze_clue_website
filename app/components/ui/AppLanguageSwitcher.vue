<template>
  <UButton
    variant="soft"
    class="cursor-pointer"
    role="button"
    aria-label="Switch language"
    :aria-pressed="false"
    tabindex="0"
    :label="locale"
    @click="switchLocale(locale === 'en' ? 'ar' : 'en')"
  />
</template>

<script lang="ts" setup>
type LocaleCode = 'ar' | 'en'

const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const switchLocale = async (localeCode: LocaleCode) => {
  // Get the path for the current route in the target locale
  const path = switchLocalePath(localeCode)

  // Set locale first to ensure proper language change
  await setLocale(localeCode)

  // Navigate to the equivalent path in the new locale
  if (path) {
    // await navigateTo(path, { replace: true })
    await reloadNuxtApp({ persistState: true, force: true })
  }
}
</script>

<style scoped></style>
