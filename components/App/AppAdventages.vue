<template>
  <div
    id="advantages"
    class="flex justify-center bg-[#F4F8F8] w-full py-11 lg:py-20">
    <div class="w-full lg:w-[1240px] lg:px-8">
      <div class="w-full px-4 lg:flex lg:justify-between lg:px-0">
        <h2 class="lg:text-[42px] text-[25px] font-bold leading-[120%] lg:pb-10 pb-3">Преимущества <br/> сотрудничества с нами</h2>

        <nuxt-link
          to="https://api.whatsapp.com/send?phone=996552000048"
          target="_blank"
          class="flex space-x-2.5 text-sm lg:text-base items-center bg-[#007070] rounded-[10px] lg:h-[46px] h-[30px] w-[125px] lg:w-[170px] text-white flex-center mb-5 lg:mb-0">
          <span>Связаться</span>
          <img
            class="w-2.5 lg:w-[15px]"
            src="/icons/rightWhite.svg"
            alt=""/>
        </nuxt-link>
      </div>

      <div class="hidden px-4 space-x-3 overflow-x-auto lg:flex lg:overflow-x-hidden lg:px-0">
        <div class="lg:w-1/3 w-[210px] flex-shrink-0 lg:flex-shrink">
          <p
            v-for="i in list1"
            :key="i.title"
            class="lg:px-5 px-1 lg:py-6 py-3 lg:text-xl text-[8px] first:text-[10px] first:lg:text-xl first:font-bold border-[#C7C7C7] last:border-0">{{ i.title }}</p>
        </div>

        <div class="lg:w-1/3 w-[210px] bg-[#2BAD3F1A] rounded-[10px] flex-shrink-0 lg:flex-shrink">
          <div
            v-for="(l, idx) in list2"
            :key="idx"
            class="flex lg:px-5 px-1 lg:py-2.5 last:lg:pb-6 py-[9px] lg:space-x-5 space-x-2 last:border-0 first:py-[14.5px] border-[#C7C7C7] first:lg:py-6 first:space-x-0 first:font-bold">
            <div
              class="flex-shrink-0 lg:w-8 lg:h-8 w-[11px] h-[11px]"
              :class="{'hidden': idx === 0}">
              <img
                src="/icons/check.svg"
                alt=""/>
            </div>
            <p class="text-[8px] first:text-[10px] first:lg:text-xl lg:text-xl leading-[120%]">{{ l.title }}</p>
          </div>
        </div>

        <div class="lg:w-1/3 w-[210px] flex-shrink-0 lg:flex-shrink bg-[#F1E2E0] rounded-[10px] overflow-hidden">
          <p
            v-for="f in list3"
            :key="f.title"
            class="lg:px-5 px-1 lg:py-2.5 py-2 lg:pr-24 first:py-3.5 first:lg:py-6 leading-[120%] lg:text-xl text-[8px] first:text-[10px] first:lg:text-xl first:font-bold border-[#C7C7C7] last:border-0">{{ f.title }}</p>
        </div>
      </div>

      <div class="px-4 lg:hidden">
        <div class="flex w-full space-x-3">
          <p class="text-sm font-bold bg-[#46A5AF1F] w-1/2 rounded-t-[6px] p-2.5 pb-3">Бухгалтерский аутсорсинг</p>
          <p class="text-sm font-bold bg-[#F1E2E0] w-1/2 rounded-t-[6px] p-2.5 pb-3">Бухгалтер <br/> в штате</p>
        </div>
        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Оптимизированные расходы — только за нужные услуги</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5">Фиксированная зарплата + налоги + соцпакет</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Команда с экспертизой в разных отраслях бизнеса</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Один специалист, ограниченный опытом</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Быстрая реакция и онлайн-заявки </span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Ограничена графиком и загруженностью</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Постоянная доступность и замены в случае отсутствия</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Только в рабочие часы, нет замены на больничных</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Полная автоматизация: ЭДО, сканирование</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Вручную или частично автоматизирована	</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Постоянное обучение и развитие команды Knopka</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Зависит от инициативы компании</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Регулярная отчетность, прозрачные процессы</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2">Не всегда объективная оценка</p>
        </div>

        <div class="flex w-full space-x-3">
          <div class="text-[11px] bg-[#46A5AF1F] w-1/2 px-2.5 flex space-x-1 pt-2 pb-2.5 rounded-b-[6px]">
            <img
              class="w-[11px] h-[11px] flex-shrink-0 mt-[3px]"
              src="/icons/check.svg"
              alt=""/>
            <span>Соблюдают строгие условия конфиденциальности</span>
          </div>
          <p class="text-[11px] bg-[#F1E2E0] w-1/2 px-2.5 pt-2 pb-2.5 rounded-b-[6px]">Риск "человеческого фактора" внутри компании</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list1 = [
  {
    title: 'Критерий'
  },
  {
    title: 'Стоимость'
  },
  {
    title: 'Квалификация'
  },
  {
    title: 'Скорость реагирования'
  },
  {
    title: 'Доступность'
  },
  {
    title: 'Обработка документов'
  },
  {
    title: 'Профессиональный рост'
  },
  {
    title: 'Контроль и прозрачность	'
  },
  {
    title: 'Конфиденциальность'
  }
]

const list2 = [
  {
    title: 'Бухгалтерский аутсорсинг'
  },
  {
    title: 'Оптимизированные расходы — только за нужные услуги'
  },
  {
    title: 'Команда с экспертизой в разных отраслях бизнеса'
  },
  {
    title: 'Быстрая реакция и онлайн-заявки '
  },
  {
    title: 'Постоянная доступность и замены в случае отсутствия'
  },
  {
    title: 'Полная автоматизация: ЭДО, сканирование'
  },
  {
    title: 'Постоянное обучение и развитие команды Knopka'
  },
  {
    title: 'Регулярная отчетность, прозрачные процессы'
  },
  {
    title: 'Соблюдают строгие условия конфиденциальности'
  }
]

const list3 = [
  {
    title: 'Бухгалтер в штате'
  },
  {
    title: 'Фиксированная зарплата + налоги + соцпакет'
  },
  {
    title: 'Один специалист, ограниченный опытом'
  },
  {
    title: 'Ограничена графиком и загруженностью'
  },
  {
    title: 'Только в рабочие часы, нет замены на больничных'
  },
  {
    title: 'Вручную или частично автоматизирована	'
  },
  {
    title: 'Зависит от инициативы компании'
  },
  {
    title: 'Не всегда объективная оценка'
  },
  {
    title: 'Риск "человеческого фактора" внутри компании'
  }
]
</script>