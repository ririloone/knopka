<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out transform"
    leave-active-class="transition-all duration-300 ease-out transform"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-0 bg-white/50 !mt-0 z-50 backdrop-blur-md"
      @click.self="close">

    </div>
  </transition>

  <transition
    enter-active-class="transition-all duration-200 ease-out transform"
    leave-active-class="transition-all duration-200 ease-out transform"
    enter-from-class="translate-y-full"
    leave-to-class="translate-y-full"
  >
    <aside
      v-if="visible"
      class="fixed z-50 inset-y-0 !mt-0 left-0 flex flex-col h-screen overflow-y-auto w-full"
    >
      <div class="">
        <div class="flex items-center justify-between px-4 bg-white border-b">
          <div class="flex items-center lg:hidden">
            <button
              class="h-[60px] pr-4 border-r lg:hidden flex items-center rounded-none"
              @click="close">
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
            href="tel:+996552000048"
            class="flex space-x-2.5 bg-[#031313] text-white py-1.5 px-5 rounded-[8px] items-center">
            <img
              class="w-[12px] lg:w-[16px]"
              src="/icons/phone.svg"
              alt=""/>
            <span class="text-[10px] lg:text-base">+996 552 000 048</span>
          </nuxt-link>
        </div>

        <div class="px-4 pt-[60px]">
          <nuxt-link
            to="#about"
            class="flex justify-between border-b border-[#1B1B2826] pb-6"
            @click="close">
            <span>О компании</span>
            <img
              src="/icons/rightBlack.svg"
              alt="" />
          </nuxt-link>
          <nuxt-link
            to="#advantages"
            class="flex justify-between border-b border-[#1B1B2826] py-6"
            @click="close">
            <span>Преимущества</span>
            <img
              src="/icons/rightBlack.svg"
              alt="" />
          </nuxt-link>
          <nuxt-link
            to="#services"
            class="flex justify-between border-b border-[#1B1B2826] py-6"
            @click="close">
            <span>Услуги</span>
            <img
              src="/icons/rightBlack.svg"
              alt="" />
          </nuxt-link>
          <nuxt-link
            to="#partners"
            class="flex justify-between border-b border-[#1B1B2826] py-6"
            @click="close">
            <span>Партнеры</span>
            <img
              src="/icons/rightBlack.svg"
              alt="" />
          </nuxt-link>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
const visible = ref(false)

defineExpose({
  open,
  close
})

function open() {
  visible.value = true
}

function close() {
  visible.value = false
}
</script>
