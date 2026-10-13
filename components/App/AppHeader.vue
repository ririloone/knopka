<template>
  <div class="sticky top-0 z-50 w-full bg-white">
    <div class="flex items-center justify-between border-b lg:py-3 wrapper lg:border-0">
      <div class="flex items-center lg:hidden">
        <button
          class="h-[60px] pr-4 border-r lg:hidden flex items-center rounded-none"
          @click="drawer.open">
          <img
            src="/icons/burger.svg"
            alt=""/>
        </button>
        <nuxt-link
          to="#hero"
          class="flex-shrink-0 lg:w-[120px] w-[111px] ml-4">
          <img
            src="/icons/logo.svg"
            alt=""/>
        </nuxt-link>
      </div>

      <nuxt-link
        to="#hero"
        class="flex-shrink-0 lg:w-[120px] w-[111px] hidden lg:block">
        <img
          src="/icons/logo.svg"
          alt=""/>
      </nuxt-link>

      <ul class="text-[#022323] lg:flex space-x-10 hidden">
        <li>
          <nuxt-link
            to="#about"
            class="text-lg font-medium">О компании</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#advantages"
            class="text-lg font-medium">Преимущества</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#services"
            class="text-lg font-medium">Услуги</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#partners"
            class="text-lg font-medium">Партнеры</nuxt-link>
        </li>
      </ul>

      <nuxt-link
        href="tel:+996552000048"
        class="flex space-x-2.5 bg-[#031313] text-white py-1.5 px-5 rounded-[8px] items-center">
        <img
          class="w-[12px] lg:w-[16px]"
          src="/icons/phone.svg"
          alt=""/>
        <span class="text-[10px] lg:text-base">+996 552 000 048</span>
      </nuxt-link>
    </div>
    <AppDrawer
      ref="drawer"
    />
  </div>
</template>

<script setup>
const drawer = ref(null)
</script>