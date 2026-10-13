<template>
  <div class="pb-11 wrapper lg:pb-20">
    <h2 class="lg:text-[42px] text-[25px] font-bold leading-[120%] lg:pb-10 pb-5">Что мы делаем?</h2>
    <div class="hidden space-x-5 lg:flex">
      <div class="w-full space-y-5">
        <div class="flex space-x-5">
          <div class="w-[317px] h-[512px] flex-shrink-0 bg-[#F4F8F8] px-4 py-[30px] rounded-[10px] relative">
            <h3 class="text-[22px] font-semibold leading-[120%]">Сдаём отчётность <br class="hidden lg:block"/> без ошибок</h3>
            <p class="text-lg leading-[130%] pt-5">Формируем и подаём налоговую и бухгалтерскую отчётность точно в срок, чтобы вы не переживали за штрафы и проверки.</p>
            <img
              class="absolute bottom-4"
              src="/icons/do1.svg"
              alt=""/>
          </div>

          <div class="w-full space-y-5">
            <div class="w-full h-[246px] relative bg-[#F4F8F8] px-4 py-[30px] rounded-[10px]">
              <h3 class="text-[22px] font-semibold leading-[120%]">Оформляем сотрудников <br/> по закону</h3>
              <p class="text-lg leading-[130%] pt-5 w-[270px]">Берём на себя приём, перевод и увольнение сотрудников с соблюдением всех требований Трудового кодекса.</p>
              <img
                class="absolute bottom-2 right-2.5"
                src="/icons/do2.svg"
                alt=""/>
            </div>

            <div class="w-full h-[246px] relative bg-[#F4F8F8] px-4 py-[30px] rounded-[10px]">
              <h3 class="text-[22px] font-semibold leading-[120%]">Готовим платёжки и проверяем <br/> контрагентов</h3>
              <p class="text-lg leading-[130%] pt-5 w-[270px]">Помогаем с подготовкой платёжных поручений и следим, чтобы все документы от партнёров были в порядке.</p>
              <img
                class="absolute bottom-2 right-2.5"
                src="/icons/do3.svg"
                alt=""/>
            </div>
          </div>
        </div>

        <div class="w-full h-[226px] relative bg-[#F4F8F8] px-4 py-[30px] rounded-[10px]">
          <h3 class="text-[22px] font-semibold leading-[120%]">Закрываем всю <br/> бухгалтерию под ключ</h3>
          <p class="text-lg leading-[130%] pt-5 w-[350px]">Ведём учёт, контролируем операции и решаем нестандартные задачи — вы сосредотачиваетесь на бизнесе, а не на рутине.</p>
          <img
            class="absolute bottom-2 right-2.5"
            src="/icons/do4.svg"
            alt=""/>
        </div>
      </div>

      <div class="w-[317px] flex-shrink-0 space-y-5">
        <div class="w-full h-[512px] relative bg-[#F4F8F8] px-4 py-[30px] rounded-[10px]">
          <h3 class="text-[22px] font-semibold leading-[120%]">Автоматизируем <br/> документооборот</h3>
          <p class="text-lg leading-[130%] pt-5">Настраиваем ЭДО с контрагентами, сканируем и распознаём документы — никаких бумаг и путаницы.</p>
          <img
            class="absolute bottom-2 right-2.5"
            src="/icons/do5.svg"
            alt=""/>
        </div>

        <div class="w-full px-4 py-[32px] rounded-[10px] bg-[#007070] text-white h-[226px] relative">
          <p class="font-semibold text-[22px] pb-1 leading-[120%]">И это только начало —</p>
          <h3 class="text-[18px] leading-[120%]"> остальное расскажем лично, под ваши задачи</h3>
          <nuxt-link
            to="https://api.whatsapp.com/send?phone=996552000048"
            target="_blank"
            class="bg-white text-sm absolute left-3 lg:left-4 lg:bottom-4 bottom-1.5 flex lg:text-xl w-[125px] lg:w-[172px] space-x-2.5 justify-center lg:py-3 py-1.5 rounded-[10px]">
            <span class="text-[#031313]">Связаться</span>
            <img
              src="/icons/rightBlack.svg"
              alt=""/>
          </nuxt-link>
        </div>
      </div>
    </div>


    <div class="space-y-[18px] lg:hidden">
      <div class="space-x-[18px] flex">
        <div class="py-[18px] px-[15px] bg-[#F4F8F8] rounded-[6px] w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-sm leading-[120%] font-semibold pb-2">Сдаём отчётность без ошибок</h2>
            <p class="text-xs leading-[130%] pb-2">Формируем и подаём налоговую и бухгалтерскую отчётность точно в срок, чтобы вы не переживали за штрафы и проверки.</p>
          </div>

          <img
            src="/icons/do1.svg"
            alt=""/>
        </div>
        <div class="py-[18px] px-[15px] bg-[#F4F8F8] rounded-[6px] w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-sm leading-[120%] font-semibold pb-2">Автоматизируем документооборот</h2>
            <p class="text-xs leading-[130%] pb-2">Настраиваем ЭДО с контрагентами, сканируем и распознаём документы — никаких бумаг и путаницы.</p>
          </div>

          <img
            src="/icons/do5.svg"
            alt=""/>
        </div>
      </div>


      <div class="flex space-x-[18px]">
        <div class="py-[18px] px-[15px] bg-[#F4F8F8] rounded-[6px] w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-sm leading-[120%] font-semibold pb-2">Оформляем сотрудников по закону</h2>
            <p class="text-xs leading-[130%] pb-2">Берём на себя приём, перевод и увольнение сотрудников с соблюдением всех требований Трудового кодекса.</p>
          </div>

          <img
            src="/icons/do2.svg"
            alt=""/>
        </div>
        <div class="py-[18px] px-[15px] bg-[#F4F8F8] rounded-[6px] w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-sm leading-[120%] font-semibold pb-2">Готовим платёжки и проверяем контрагентов</h2>
            <p class="text-xs leading-[130%] pb-2">Помогаем с подготовкой платёжных поручений и следим, чтобы все документы от партнёров были в порядке.</p>
          </div>

          <img
            src="/icons/do3.svg"
            alt=""/>
        </div>
      </div>

      <div class="flex justify-between space-x-3.5 items-center bg-[#F4F8F8] py-3 px-4 rounded-[10px]">
        <div>
          <h2 class="text-sm leading-[120%] font-semibold pb-2">Закрываем всю бухгалтерию <br/> под ключ</h2>
          <p class="text-xs leading-[130%] pb-2">Ведём учёт, контролируем <br/> операции и решаем нестандартные <br/> задачи — вы сосредотачиваетесь <br/> на бизнесе, а не на рутине.</p>
        </div>

        <div class="w-[81px] flex-shrink-0">
          <img
            src="/icons/do4.svg"
            alt=""/>
        </div>
      </div>

      <div class="p-2.5 rounded-[6px] bg-[#007070] text-white text-center">
        <h2 class="text-sm font-semibold leading-[130%] pb-1">И это только начало —</h2>
        <p class="pb-2 text-[12px] leading-[130%]">остальное расскажем лично, под ваши задачи</p>
        <nuxt-link
          to="https://api.whatsapp.com/send?phone=996552000048"
          target="_blank"
          class="flex bg-white w-[100px] h-6 rounded-[4px] items-center justify-center font-medium space-x-1.5 mx-auto">
          <span class="text-[#031313] text-[10px]">Связаться</span>
          <img
            class="w-[10px]"
            src="/icons/rightBlack.svg"
            alt=""/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>