<template>
  <div
    id="hero"
    class="flex flex-col pb-11 lg:pt-12 pt-7 lg:space-x-8 wrapper lg:flex-row lg:pb-20">
    <div class="lg:max-w-[751px] flex-shrink-0">
      <h1 class="lg:text-[50px] text-[25px] pb-4 lg:pb-8 leading-[110%] font-semibold">Мы заботимся <br/> <span class="text-[#007070]">о финансовом здоровье вашего бизнеса</span></h1>

      <div class="flex-shrink-0">
        <img
          class="hidden lg:block"
          src="/images/hero1.webp"
          alt=""/>
        <img
          class="lg:hidden"
          src="/images/hero1m.webp"
          alt=""/>
        <!-- <h1 class="text-[25px] leading-[100%] font-semibold lg:hidden absolute bottom-0 p-2.5">Мы заботимся <br/> <span class="text-[#007070]">о финансовом здоровье вашего бизнеса</span></h1> -->
      </div>

      <div
        id="partners"
        class="flex pt-3.5 lg:space-x-5 space-x-2.5">
        <div class="w-1/3 px-1.5 lg:px-3 lg:py-5 py-2 rounded-[6px] lg:rounded-[10px] bg-[#F4F8F8] border border-[#46A5AF80]">
          <h2 class="lg:text-[46px] font-bold text-[#007070] leading-[120%] text-[20px]">350+</h2>
          <h3 class="text-[#031313] lg:text-xl text-[10px] leading-[120%]">Компаний доверяют нам</h3>
        </div>
        <div class="w-1/3 px-1.5 lg:px-3 lg:py-5 py-2 rounded-[6px] lg:rounded-[10px] bg-[#F4F8F8] border border-[#46A5AF80] ">
          <h2 class="lg:text-[46px] font-bold text-[#007070] leading-[120%] text-[20px]">300+</h2>
          <h3 class="text-[#031313] lg:text-xl text-[10px] leading-[120%]">Успешных налоговых проверок</h3>
        </div>
        <div class="w-1/3 px-1.5 lg:px-3 lg:py-5 py-2 rounded-[6px] lg:rounded-[10px] bg-[#F4F8F8] border border-[#46A5AF80]">
          <h2 class="lg:text-[46px] font-bold text-[#007070] leading-[120%] text-[20px]">100+ </h2>
          <h3 class="text-[#031313] lg:text-xl text-[10px] leading-[120%]">Внедренных автоматизаций учета</h3>
        </div>
      </div>
    </div>

    <div class="lg:max-w-[417px] pt-5 lg:pt-0">
      <div class="flex items-center space-x-2 lg:items-start lg:flex-col lg:space-x-0">
        <div class="flex flex-col lg:flex-row w-full justify-between bg-[#358E8E1A] lg:p-4 p-3 rounded-[10px] items-center space-y-1.5 lg:space-y-0">
          <h2 class="text-[#031313] leading-[120%] lg:text-[22px]">Специалисты <br/> своего дела:</h2>
          <div class="flex-shrink-0 lg:w-[147px]">
            <img
              src="/images/hero2.webp"
              alt=""/>
          </div>
        </div>

        <h3 class="lg:pt-[18px] text-[#3A3A3A] lg:leading-[130%] leading-[120%] lg:text-base">Опытные профессионалы, которые берут на себя ведение вашего учета, обеспечивая точность, законность и экономию времени и ресурсов.</h3>
      </div>

      <div class="lg:w-[417px] flex-shrink-0 lg:pt-6 pt-5 relative">
        <img
          class="hidden lg:block"
          src="/images/hero3.webp"
          alt=""/>
        <img
          class="lg:hidden"
          src="/images/hero3m.webp"
          alt=""/>
        <nuxt-link
          to="https://api.whatsapp.com/send?phone=996552000048"
          target="_blank"
          class="bg-[#007070] text-sm absolute right-3.5 lg:right-7 lg:bottom-5 bottom-3 flex text-white lg:text-xl w-[125px] lg:w-[172px] space-x-2.5 justify-center lg:py-3 py-1.5 rounded-[10px]">
          <span>Связаться</span>
          <img
            src="/icons/right.svg"
            alt=""/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>