<template>
  <div class="lg:pb-[100px] pb-[100px]">
    <h2 class="lg:text-[42px] text-[25px] font-bold leading-[120%] lg:pb-10 pb-5 wrapper">Наша Команда</h2>

    <client-only>
      <Vue3Marquee
        clone
        :duration="30">
        <div
          v-for="i in list"
          :key="i.img"
          class="relative mr-5 overflow-hidden lg:mr-9 rounded-[10px]"
          :class="i.width">
          <img
            :src="i.img"
            alt=""/>
          <div class="absolute bottom-0 left-0 w-full lg:px-[30px] px-4 lg:pt-[18px] pt-2.5 pb-3 lg:pb-[24px] bg-[#FFFFFF66] rounded-[10px] backdrop-blur-sm">
            <p class="lg:text-[22px] text-[12px] leading-[16px] font-semibold lgLpb-1.5 lg:leading-[20px]">{{ i.title }}</p>
            <p class="text-[10px] lg:text-lg">{{ i.position }}</p>
          </div>
        </div>
      </Vue3Marquee>
    </client-only>
  </div>
</template>

<script setup>
const list = [
  {
    img: '/images/team1.webp',
    title: 'Бейшенов Элдияр',
    position: 'Главный бухгалтер',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team2.webp',
    title: 'Искендербекова Айдай',
    position: 'Исполнительный директор',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team3.webp',
    title: 'Алдаярова Наргиза',
    position: 'Генеральный директор',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team4.webp',
    title: 'Усенбек кызы Айжамал',
    position: 'Операционный бухгалтер ',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team5.webp',
    title: 'Рыскельдиева Динара',
    position: 'Главный бухгалтер',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team6.webp',
    title: 'Искендербекова Алтынай ',
    position: 'Операционный бухгалтер',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team7.webp',
    title: 'Жантаева Айгуль',
    position: 'Операционный бухгалтер ',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team8.webp',
    title: 'Шарапов Ырыскелди',
    position: 'Операционный бухгалтер ',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team9.webp',
    title: 'Рахматова Назгуль',
    position: 'Главный бухгалтер ',
    width: 'lg:w-[360px] w-[288px]'
  },
  {
    img: '/images/team10.webp',
    title: 'Назарова Гулмира',
    position: 'Главный бухгалтер ',
    width: 'lg:w-[360px] w-[288px]'
  },
]
</script>