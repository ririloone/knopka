<template>
  <div class="pb-11 wrapper lg:pb-20">
    <h2 class="lg:text-[42px] text-[25px] font-bold leading-[120%] lg:pb-10 pb-5">
      Форматы сотрудничества
    </h2>

    <div class="relative">
      <div
        :class="bgClass(currentItem.image)"
        class="bg-cover lg:bg-right bg-center lg:py-[47px] py-3.5 lg:h-[510px] h-[469px] flex flex-col lg:justify-center lg:rounded-[24px] rounded-[12px] lg:pl-10 px-4 text-white relative transition-none"
      >
        <h2 class="text-xl lg:text-[46px] lg:leading-[48px] font-bold text-[#F9F7F7] pb-5 lg:w-[40%]">
          {{ currentItem.title }}
        </h2>
        <div class="flex space-x-2.5 items-start pb-2.5">
          <img
            v-if="currentItem.question"
            class="lg:w-[36px] w-[23px]"
            src="/icons/question.svg"
            alt=""/>
          <h3 class="text-sm lg:text-[22px] font-medium leading-[120%] text-[#F5F5F5] lg:w-[40%]">
            {{ currentItem.text1 }}
          </h3>
        </div>
        <div class="flex space-x-2.5 items-start">
          <img
            v-if="currentItem.question"
            class="lg:w-[36px] w-[23px]"
            src="/icons/question.svg"
            alt=""/>
          <h3 class="text-sm lg:text-[22px] leading-[120%] text-[#F9F7F7] lg:w-1/3">
            {{ currentItem.text2 }}
          </h3>
        </div>
        <h3
          v-if="currentItem.text3"
          class="text-sm lg:text-[32px] leading-[120%] font-bold text-[#F9F7F7] lg:pt-10 pt-5 w-[400px]">
          {{ currentItem.text3 }}
        </h3>
      </div>

      <!-- Кнопка "вперёд" -->
      <button
        class="absolute lg:w-[60px] lg:h-[60px] w-8 h-8 flex flex-center bg-[#46A5AF] font-bold text-black -translate-y-1/2 rounded-full shadow lg:-right-5 -right-4 top-1/2"
        @click="nextSlide"
      >
        <img
          class="w-3 lg:w-6"
          src="/icons/rightWhite.svg"
          alt=""/>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const list = ref([
  {
    title: 'Экспресс помощь',
    text1: 'Вам нужна разовая консультация по налоговому законодательству?',
    text2: 'Требуется срочно восстановить бухгалтерскую и кадровую документацию?',
    text3: 'Мы поможем в сложной ситуации!',
    image: '/images/format1.webp',
    question: true
  },
  {
    title: 'Заменяем целые отделы компании',
    text1: 'КНОПКА может полностью взять на себя обязанности финансового, кадрового и юридического отдела вашей компании.',
    text2: 'Например: предоставляем юристов, бухгалтеров всех отраслей, кадров и финансового директора.',
    image: '/images/format2.webp',
    question: false
  },
  {
    title: 'Заменяем одного или нескольких специалистов',
    text1: 'Вы довольны своим отделом бухгалтерии, но он не справляется с горой авансовых отчетов?',
    text2: 'Вам нужно получить кредит в банке на развитие бизнеса, но не хватает времени на анализ и сбор документов?',
    text3: 'Мы возьмём это на себя!',
    image: '/images/format3.webp',
    question: true
  }
])

const currentIndex = ref(0)
const currentItem = computed(() => list.value[currentIndex.value])

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % list.value.length
}

function bgClass(image) {
  return {
    'lg:bg-[url(/images/format1.webp)] bg-[url(/images/format1m.webp)]': image === '/images/format1.webp',
    'lg:bg-[url(/images/format2.webp)] bg-[url(/images/format2m.webp)]': image === '/images/format2.webp',
    'lg:bg-[url(/images/format3.webp)] bg-[url(/images/format3m.webp)]': image === '/images/format3.webp'
  }
}
</script>
