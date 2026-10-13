<template>
  <div class="bg-[#F4F8F8] py-10">
    <client-only>
      <Vue3Marquee
        clone
        :duration="20">
        <div
          v-for="i in list"
          :key="i.icon"
          class="mr-7"
          :class="i.width">
          <img
            :src="i.icon"
            alt=""/>
        </div>
      </Vue3Marquee>
    </client-only>
  </div>
</template>

<script setup>
const list = [
  {
    icon: '/icons/partner1.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner2.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner3.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner4.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner5.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner6.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner7.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner8.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner9.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner10.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner11.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner12.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner13.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner14.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner15.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner16.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
  {
    icon: '/icons/partner17.svg',
    width: 'lg:w-[158px] lg:h-[100px] w-[82px] h-[50px]'
  },
]
</script>