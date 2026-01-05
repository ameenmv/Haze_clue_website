<template>
  <UApp
    :locale="currentLocale"
    :toaster="{
      position: dir === 'rtl' ? 'bottom-right' : 'bottom-left',
      duration: 3000,
      class: 'z-[9999]'
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as uiLocales from '@nuxt/ui/locale'

const { t, locale, setLocale } = useI18n()

const currentLocale = computed(() => {
  return uiLocales[locale.value as keyof typeof uiLocales] || uiLocales.en
})

const lang = computed(() => currentLocale.value.code)
const dir = computed(() => currentLocale.value.dir)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${t('app.title')}` : t('app.title')
  },
  htmlAttrs: {
    lang,
    dir
  }
})

useSeoMeta({
  // title: t("app.title"),
  description: t('app.description'),
  ogTitle: t('app.title'),
  ogDescription: t('app.description'),
  // ogImage: '',
  ogUrl: 'url',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: t('app.title'),
  twitterDescription: t('app.description')
  // twitterImage: ''
})

onMounted(async () => {
  // If cookie doesn't match default locale, update it
  const cookieLocale = useCookie('i18n_locale').value
  if (!cookieLocale || cookieLocale !== locale.value) {
    await setLocale(locale.value)
  }
})
</script>
