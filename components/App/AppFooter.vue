<template>
  <div class="lg:pt-[83px] pt-10 bg-[#031313] text-white pb-9">
    <div class="wrapper">
      <!-- <div class="flex lg:items-end justify-between border-b border-[#424E4E] pb-10 lg:pb-[83px] flex-col lg:flex-row space-y-6 lg:space-y-0">
        <div>
          <h2 class="lg:text-[30px] text-[22px] font-semibold leading-[120%] lg:leading-[135%]">Экономьте время, деньги <br/>
            и развивайте бизнес без лишних рисков </h2>
        </div>

        <nuxt-link
          to="https://api.whatsapp.com/send?phone=996552000048"
          target="_blank"
          class="bg-[#007070] lg:py-3 lg:leading-[120%] text-xl flex items-center text-white lg:text-[30px] w-[155px] lg:w-[260px] space-x-3 justify-center py-1.5 rounded-[10px]">
          <span>Связаться</span>
          <img
            class="lg:w-5"
            src="/icons/right.svg"
            alt=""/>
        </nuxt-link>
      </div> -->

      <div class="flex lg:items-start justify-between lg:pb-[75px] pb-5 border-b border-[#424E4E] flex-col lg:flex-row">
        <div>
          <nuxt-link
            to="#hero"
            class="pb-5 lg:pb-0">
            <img
              class="w-[158px] lg:w-[165px]"
              src="/icons/logoWhite.svg"
              alt=""/>
          </nuxt-link>

          <div class="flex items-center space-x-2 pt-7">
            <img
              src="/icons/map.svg"
              alt=""/>
            <span>город Бишкек, ул. Ибраимова 103/1 A <br /> БЦ "Victory" блок C 14 этаж</span>
          </div>
          <div class="flex items-center pt-2 space-x-2">
            <img
              src="/icons/phone2.svg"
              alt=""/>
            <span>+996 552 000 048</span>
          </div>
          <div class="flex items-center pt-2 space-x-2">
            <img
              src="/icons/mail.svg"
              alt=""/>
            <span>info@knopka.kg</span>
          </div>
        </div>

        <div class="flex lg:justify-between lg:w-[700px] lg:space-y-0 space-y-5 flex-col lg:flex-row">
          <div class="lg:flex lg:space-x-8">
            <nuxt-link
              v-for="i in list"
              :key="i.title"
              :to="i.to"
              class="items-center hidden space-x-1 lg:flex">
              <span>{{ i.title }}</span>
              <img
                src="/icons/link.svg"
                alt=""/>
            </nuxt-link>

            <div class="flex justify-between pt-9 lg:pt-0 lg:hidden">
              <div class="space-y-4">
                <nuxt-link
                  class="flex items-center space-x-1 lg:hidden"
                  to="#about">
                  <span>О компании</span>
                  <img
                    src="/icons/link.svg"
                    alt=""/>
                </nuxt-link>
                <nuxt-link
                  class="flex items-center space-x-1 lg:hidden"
                  to="#services">
                  <span>Услуги</span>
                  <img
                    src="/icons/link.svg"
                    alt=""/>
                </nuxt-link>
              </div>
              <div class="space-y-4">
                <nuxt-link
                  class="flex items-center space-x-1 lg:hidden"
                  to="#advantages">
                  <span>Преимущества</span>
                  <img
                    src="/icons/link.svg"
                    alt=""/>
                </nuxt-link>
                <nuxt-link
                  class="flex items-center space-x-1 lg:hidden"
                  to="#partners">
                  <span>Партнеры</span>
                  <img
                    src="/icons/link.svg"
                    alt=""/>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="flex space-x-3">
            <nuxt-link
              target="_blank"
              to="https://www.instagram.com/knopka_kg_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                src="/icons/insta.svg"
                alt=""/>
            </nuxt-link>
            <nuxt-link
              target="_blank"
              to="https://api.whatsapp.com/send?phone=996552000048">
              <img
                src="/icons/whatsapp.svg"
                alt=""/>
            </nuxt-link>
            <nuxt-link
              target="_blank"
              to="https://telegram.im/knopkakg">
              <img
                src="/icons/tg.svg"
                alt=""/>
            </nuxt-link>
          </div>
        </div>
      </div>

      <nuxt-link
        to="http://innovat.kg/"
        class="flex lg:justify-center lg:pt-[75px] pt-20">
        <img
          src="/icons/innovat.svg"
          alt=""/>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: 'О компании',
    to: '#about'
  },
  {
    title: 'Преимущества',
    to: '#advantages'
  },
  {
    title: 'Услуги',
    to: '#services'
  },
  {
    title: 'Партнеры',
    to: '#partners'
  }
]
</script>