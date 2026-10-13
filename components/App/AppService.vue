<template>
  <div
    id="services"
    class="py-11 wrapper lg:py-20">
    <h2 class="lg:text-[42px] text-[25px] font-bold leading-[120%] lg:pb-10 pb-5">Наши услуги</h2>

    <div class="space-y-10 lg:space-y-10">
      <div class="lg:p-[30px] p-5 rounded-[10px] bg-[#F4F8F8]">
        <div class="flex items-center space-x-4">
          <img
            src="/icons/service1.svg"
            alt=""/>
          <h3 class="lg:text-[30px] text-xl leading-[120%] font-bold lg:leading-[25px]">Функция финансового директора</h3>
        </div>

        <div class="flex flex-col justify-between lg:flex-row pt-7">
          <div class="lg:w-[35%] space-y-5">
            <div
              v-for="l in list1"
              :key="l.title"
              class="flex items-start space-x-5">
              <img
                class="mt-1 lg:w-[22px] w-4"
                src="/icons/check2.svg"
                alt=""/>
              <p class="text-sm font-medium lg:text-lg leading-[130%]">{{ l.title }}</p>
            </div>
          </div>

          <div class="lg:w-[40%] space-y-5 pt-7 lg:pt-0">
            <div
              v-for="i in list2"
              :key="i.title"
              class="flex items-start space-x-5">
              <img
                class="mt-1 lg:w-[22px] w-4"
                src="/icons/check2.svg"
                alt=""/>
              <p class="text-sm font-medium lg:text-lg leading-[130%]">{{ i.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:p-[30px] p-5 rounded-[10px] bg-[#F4F8F8]">
        <div class="flex flex-col items-start justify-between lg:flex-row">
          <div class="lg:w-[35%] space-y-5 pb-14 lg:pb-0">
            <div class="flex items-start space-x-4">
              <img
                src="/icons/service1.svg"
                alt=""/>
              <h3 class="lg:text-[30px] text-xl leading-[120%] font-bold lg:leading-[30px]">Аутсорсинг бухгалтерского учета</h3>
            </div>
            <div
              v-for="q in list3"
              :key="q.title"
              class="flex items-start space-x-5">
              <img
                class="mt-1 lg:w-[22px] w-4"
                src="/icons/check2.svg"
                alt=""/>
              <p class="text-sm font-medium lg:text-lg leading-[130%]">{{ q.title }}</p>
            </div>
          </div>

          <div class="lg:w-[543px]">
            <img
              src="/images/service.webp"
              alt=""/>
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-10 lg:space-x-7 lg:flex-row lg:space-y-0">
        <div class="lg:p-[30px] p-5 bg-[#F4F8F8] rounded-[10px] lg:w-1/2">
          <div class="flex items-center space-x-4">
            <img
              src="/icons/service1.svg"
              alt=""/>
            <h3 class="lg:text-[30px] text-xl leading-[120%] font-bold lg:leading-[30px]">Кадровый учет</h3>
          </div>

          <div class="pt-5 space-y-5 lg:w-10/12">
            <div
              v-for="s in list4"
              :key="s.title"
              class="flex items-start space-x-5">
              <img
                class="mt-1 lg:w-[22px] w-4"
                src="/icons/check2.svg"
                alt=""/>
              <p class="text-sm font-medium lg:text-lg leading-[130%]">{{ s.title }}</p>
            </div>
          </div>
        </div>

        <div class="lg:p-[30px] p-5 bg-[#F4F8F8] rounded-[10px] lg:w-1/2">
          <div class="flex items-start space-x-4">
            <img
              src="/icons/service1.svg"
              alt=""/>
            <h3 class="lg:text-[30px] text-xl leading-[120%] font-bold lg:leading-[30px]">Комплексные услуги для стартапов</h3>
          </div>

          <div class="w-10/12 pt-5 space-y-5">
            <div
              v-for="e in list5"
              :key="e.title"
              class="flex items-start space-x-5">
              <img
                class="mt-1 lg:w-[22px] w-4"
                src="/icons/check2.svg"
                alt=""/>
              <p class="text-sm font-medium lg:text-lg leading-[130%]">{{ e.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list1 = [
  {
    title: 'Управление финансовыми потоками предприятия'
  },
  {
    title: 'Контроль расходов и обеспечение эффективного использования ресурсов'
  },
  {
    title: 'Контроль доходов и обеспечение фирмы финансами (в том числе и кредитными)'
  },
  {
    title: 'Налоговое планирование'
  },
  {
    title: 'Формирование и стратегическое планирование финансовой политики компании'
  }
]

const list2 = [
  {
    title: 'Обеспечение экономической безопасности'
  },
  {
    title: 'Анализ и снижение возможных финансовых рисков'
  },
  {
    title: 'Контроль ведения деятельности предприятия в соответствии с действующим законодательством'
  },
  {
    title: 'Проведение финансово-экономического анализа сделок компании'
  },
  {
    title: 'Управление коллективом финансовых и бухгалтерских служб'
  }
]

const list3 = [
  {
    title: 'Постановка учета'
  },
  {
    title: 'Ведение бухгалтерского учета'
  },
  {
    title: 'Восстановление бухгалтерии'
  },
  {
    title: 'Консультации по вопросам бухгалтерского учета и налогообложения'
  },
]

const list4 = [
  {
    title: 'Анализ бизнес-процессов кадрового учета заказчика, организации работы кадровой службы (если имеется)'
  },
  {
    title: 'Консультирование по вопросам трудового законодательства'
  },
  {
    title: 'Постановка кадрового учета «с нуля» (для стартапов) или разработка предложений по оптимизации имеющейся схемы работы'
  },
  {
    title: 'Организация кадрового документооборота, разработка локальных нормативных актов, регулирующих вопросы трудовых отношений'
  },
]

const list5 = [
  {
    title: 'Юридическая поддержка'
  },
  {
    title: 'Постановка и ведение бухучета'
  },
  {
    title: 'Консультации по вопросам экспорта-импорта'
  },
  {
    title: 'Услуга «генеральный директор»'
  },
  {
    title: 'Кадровое администрирование'
  },
]
</script>