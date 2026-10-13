/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
import HeadConfig from './configs/head'

export default defineNuxtConfig({
  app: {
    head: HeadConfig
  },

  devtools: {
    enabled: false
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css'
  ],

  plugins: [
    {
      mode: 'client',
      src: '~/plugins/maska.js'
    },
    {
      src: '~/plugins/vue3-marquee.js'
    },
  ],

  modules: [
    '@nuxtjs/harlem',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],

  robots: {
    UserAgent: '*',
    Disallow: [
      '/about',
      '/services/cfo'
    ],
    Allow: '/',
    Sitemap: 'https://knopka.kg/sitemap.xml'
  },

  compatibilityDate: '2024-07-12',
})