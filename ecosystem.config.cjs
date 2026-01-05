module.exports = {
  apps: [
    {
      name: process.env.NUXT_PUBLIC_APP_NAME || 'nuxt-template',
      port: process.env.NUXT_PORT || 3000,
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: '1',
      watch: false
    }
  ]
}
