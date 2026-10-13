<template>
  <div class="flex flex-col pt-10 space-y-5 text-white wrapper lg:space-x-5 lg:flex-row lg:space-y-0 lg:pt-20">
    <div class="w-full lg:w-[641px] lg:h-[661px] h-auto">
      <img
        class="lg:w-[641px] lg:h-[661px] h-auto"
        src="/images/calculator.webp"
        alt=""/>
    </div>

    <div class="lg:w-1/2 w-full lg:py-9 py-7 px-5 bg-[#007070] rounded-[10px] flex flex-col">
      <div class="flex items-center space-x-2 w-full border-b border-[#9CCDCC70] lg:pb-7 pb-5 justify-center">
        <img
          src="/icons/calculator.svg"
          alt=""/>
        <h2 class="text-center text-lg lg:text-[30px] leading-[120%] font-bold text-white">Калькулятор стоимости услуг</h2>
      </div>

      <div v-if="!step">
        <p class="pt-5 pb-3 text-sm font-medium lg:text-lg lg:pt-7">Выберите вид деятельности:</p>
        <div
          class="flex items-center justify-between lg:py-3 py-1.5 lg:px-5 px-3 relative rounded-[10px] bg-[#00000026]"
          @click="selectShow(2)">
          <span
            :class="{'!text-white': selectedAction}"
            class="text-[#9CCDCC] text-sm lg:text-base">{{ selectedAction?.title ? selectedAction?.title : 'Вид деятельности' }}</span>
          <img
            src="/icons/bottom.svg"
            alt=""/>

          <div
            v-if="show2"
            class="absolute z-40 -top-[1px] -left-[1px] w-[calc(100%+2px)] rounded-[10px] bg-[#338D8D] lg:px-5 lg:py-2.5 py-1.5 px-3 border border-[#ECFFFE80] space-y-3">
            <div
              v-for="action in staticData.actions"
              :key="action + action.title"
              class="flex items-center space-x-2 cursor-pointer lg:space-x-5"
              @click="selectedAction = action">
              <div
                :class="{'border-0': selectedAction && selectedAction.id === action.id}"
                class="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] border border-white flex-shrink-0 rounded-full">
                <img
                  v-if="selectedAction && selectedAction.id === action.id"
                  src="/icons/select.svg"
                  alt=""/>
              </div>
              <span class="text-sm lg:text-base">{{ action.title }}</span>
            </div>
          </div>
        </div>

        <p class="pt-5 pb-3 text-sm font-medium lg:text-lg">Укажите систему налогообложения:</p>
        <div
          class="flex items-center justify-between lg:py-3 py-1.5 lg:px-5 px-3 relative rounded-[10px] bg-[#00000026]"
          @click="selectShow(1)">
          <span
            :class="{'!text-white': selectedTax}"
            class="text-[#9CCDCC] text-sm lg:text-base">{{ selectedTax?.title ? selectedTax?.title : 'Система налогообложения' }}</span>
          <img
            src="/icons/bottom.svg"
            alt=""/>

          <div
            v-if="show1"
            class="absolute z-40 -top-[1px] -left-[1px] w-[calc(100%+2px)] rounded-[10px] bg-[#338D8D] lg:px-5 lg:py-2.5 py-1.5 px-3 border border-[#ECFFFE80] space-y-3">
            <div
              v-for="tax in staticData.taxations"
              :key="tax + tax.title"
              class="flex items-center space-x-2 cursor-pointer lg:space-x-5"
              @click="selectedTax = tax">
              <div
                :class="{'border-0': selectedTax && selectedTax.id === tax.id}"
                class="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] border border-white flex-shrink-0 rounded-full">
                <img
                  v-if="selectedTax && selectedTax.id === tax.id"
                  src="/icons/select.svg"
                  alt=""/>
              </div>
              <span class="text-sm lg:text-base">{{ tax.title }}</span>
            </div>
          </div>
        </div>

        <p class="pt-5 pb-3 text-sm font-medium lg:text-lg">Укажите количество сотрудников:</p>
        <div
          class="flex items-center justify-between lg:py-3 py-1.5 lg:px-5 px-3 relative rounded-[10px] bg-[#00000026]"
          @click="selectShow(3)">
          <span
            :class="{'!text-white': selectedPerson}"
            class="text-[#9CCDCC] text-sm lg:text-base">{{ selectedPerson?.title ? selectedPerson?.title : 'Количество сотрудников' }}</span>
          <img
            src="/icons/bottom.svg"
            alt=""/>

          <div
            v-if="show3"
            class="absolute z-40 -top-[1px] -left-[1px] w-[calc(100%+2px)] rounded-[10px] bg-[#338D8D] lg:px-5 lg:py-2.5 py-1.5 px-3 border border-[#ECFFFE80] space-y-3">
            <div
              v-for="person in staticData.persons"
              :key="person + person.title"
              class="flex items-center space-x-2 cursor-pointer lg:space-x-5"
              @click="selectedPerson = person">
              <div
                :class="{'border-0': selectedPerson && selectedPerson.id === person.id}"
                class="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] border border-white flex-shrink-0 rounded-full">
                <img
                  v-if="selectedPerson && selectedPerson.id === person.id"
                  src="/icons/select.svg"
                  alt=""/>
              </div>
              <span class="text-sm lg:text-base">{{ person.title }}</span>
            </div>
          </div>
        </div>

        <p class="pt-5 pb-3 text-sm font-medium lg:text-lg">Укажите наличие ККМ или ЭТТН:</p>
        <div
          class="flex items-center justify-between lg:py-3 py-1.5 lg:px-5 px-3 relative rounded-[10px] bg-[#00000026]"
          @click="selectShow(4)">
          <span
            v-if="kkm === null"
            class="text-[#9CCDCC] text-sm lg:text-base">ККМ или ЭТТН</span>
          <span
            v-else
            class="text-sm text-white lg:text-base">{{ kkm ? 'Да' : 'Нет' }}</span>
          <img
            src="/icons/bottom.svg"
            alt=""/>

          <div
            v-if="show4"
            class="absolute z-40 -top-[1px] -left-[1px] w-[calc(100%+2px)] rounded-[10px] bg-[#338D8D] lg:px-5 lg:py-2.5 py-1.5 px-3 border border-[#ECFFFE80] space-y-3">
            <div
              class="flex items-center space-x-2 cursor-pointer lg:space-x-5"
              @click="kkm = true">
              <div
                :class="{'border-0': kkm === true}"
                class="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] border border-white flex-shrink-0 rounded-full">
                <img
                  v-if="kkm"
                  src="/icons/select.svg"
                  alt=""/>
              </div>
              <span class="text-sm lg:text-base">Да</span>
            </div>
            <div
              class="flex items-center space-x-2 cursor-pointer lg:space-x-5"
              @click="kkm = false">
              <div
                :class="{'border-0': kkm === false}"
                class="lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] border border-white flex-shrink-0 rounded-full">
                <img
                  v-if="kkm === false"
                  src="/icons/select.svg"
                  alt=""/>
              </div>
              <span class="text-sm lg:text-base">Нет</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <p class="pb-5 text-base font-medium lg:pb-10 lg:text-xl pt-7">Результаты расчета</p>
        <p class="pb-3 text-sm font-medium lg:pb-5 lg:text-lg">Стоимость обслуживание вашего предприятия:</p>
        <p class="lg:text-[36px] lg:leading-[36px] text-2xl font-semibold lg:pb-10 pb-5">от {{ result }} KGS</p>

        <div class="flex items-center pb-2.5 lg:pb-5 space-x-2 lg:space-x-4">
          <img
            class="lg:w-[22px] w-[18px]"
            src="/icons/select.svg"
            alt=""/>
          <p class="text-sm font-medium lg:text-lg">{{ selectedTax?.title }}</p>
        </div>
        <div class="flex items-center pb-2.5 lg:pb-5 space-x-2 lg:space-x-4">
          <img
            class="lg:w-[22px] w-[18px]"
            src="/icons/select.svg"
            alt=""/>
          <p class="text-sm font-medium lg:text-lg">{{ selectedAction?.title }}</p>
        </div>
        <div class="flex items-center pb-2.5 lg:pb-5 space-x-2 lg:space-x-4">
          <img
            class="lg:w-[22px] w-[18px]"
            src="/icons/select.svg"
            alt=""/>
          <p class="text-sm font-medium lg:text-lg">{{ selectedPerson?.title }}</p>
        </div>
        <div class="flex items-center pb-5 space-x-2 lg:space-x-4">
          <img
            class="lg:w-[22px] w-[18px]"
            src="/icons/select.svg"
            alt=""/>
          <p class="text-sm font-medium lg:text-lg">{{ kkm ? 'Да' : 'Нет' }}</p>
        </div>
      </div>

      <div
        v-if="!step"
        class="flex justify-between pt-7">
        <button
          class="bg-white rounded-[10px] text-[#031313] lg:py-4 py-2 w-full font-semibold text-sm lg:text-base"
          @click="step = true">Узнать стоимость</button>
      </div>

      <div
        v-if="step"
        class="flex flex-col space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row">
        <button
          class="flex text-sm lg:text-base space-x-2.5 font-semibold lg:py-4 py-2 lg:w-[196px] justify-center border border-[#ECFFFE80] bg-[#FFFFFF33] rounded-[10px] flex-shrink-0"
          @click="restart">
          <img
            src="/icons/rightWhite.svg"
            class="w-5 rotate-180"
            alt=""/>
          <span>Вернуться</span>
        </button>
        <nuxt-link
          to="https://api.whatsapp.com/send?phone=996552000048"
          target="_blank"
          class="flex text-sm lg:text-base space-x-2.5 font-semibold lg:py-4 py-2 w-full text-[#031313] justify-center border border-[#ECFFFE80] bg-white rounded-[10px]">
          <span>Заказать обслуживание</span>
          <img
            src="/icons/rightBlack.svg"
            class="w-5"
            alt=""/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const step = ref(false)

const staticData = ref({
  taxations: [
    {
      id: 1,
      title: 'УСН (ЕН)',
    },
    {
      id: 2,
      title: 'ПВТ, СЭЗ',
    },
    {
      id: 3,
      title: 'Условный НДС'
    },
    {
      id: 4,
      title: 'ОСНО'
    }
  ],
  actions: [
    {
      id: 1,
      title: 'Услуги',
      prices: {
        1: 7000,
        2: 10000,
        3: 0,
        4: 15000
      }
    },
    {
      id: 2,
      title: 'Торговля',
      prices: {
        1: 10000,
        2: 15000,
        3: 20000,
        4: 20000,
      },
    },
    {
      id: 3,
      title: 'Производство',
      prices: {
        1: 15000,
        2: 20000,
        3: 0,
        4: 25000
      }
    },
    {
      id: 4,
      title: 'Строительство',
      prices: {
        1: 15000,
        2: 20000,
        3: 0,
        4: 25000
      }
    },
    {
      id: 5,
      title: 'Общественное питание',
      prices: {
        1: 15000,
        2: 20000,
        3: 0,
        4: 25000
      }
    }
  ],
  persons: [
    {
      id: 1,
      title: '< 10 человек',
      price: 5000,
    },
    {
      id: 2,
      title: 'от 10 человек',
      price: 5000
    },
    {
      id: 3,
      title: 'от 50 человек',
      price: 25000
    },
    {
      id: 4,
      title: 'от 100 человек',
      price: 50000
    },
    {
      id: 5,
      title: 'от 300 человек',
      price: 150000
    }
  ]
})

const selectedTax = ref(null)
const selectedAction = ref(null)
const selectedPerson = ref(null)
const kkm = ref(null)


const result = computed(() => {
  if (selectedTax.value && selectedAction.value && selectedPerson.value) {
    const basePrice = selectedAction.value.prices[selectedTax.value.id]
    const kkmPrice = kkm.value ? (basePrice / 100) * 30 : 0
    return basePrice + selectedPerson.value.price + kkmPrice
  }
  return 0
})

function selectShow(showNumber) {
  show1.value = showNumber === 1 ? !show1.value : false
  show2.value = showNumber === 2 ? !show2.value : false
  show3.value = showNumber === 3 ? !show3.value : false
  show4.value = showNumber === 4 ? !show4.value : false
}

function restart() {
  selectedTax.value = null
  selectedAction.value = null
  selectedPerson.value = null
  kkm.value = null
  step.value = false
}
</script>