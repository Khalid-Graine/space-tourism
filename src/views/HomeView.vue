<template>
  <div
    class="countainer min-h-screen bg-[url('@/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/home/background-home-tablet.jpg')] lg:bg-[url('@/assets/home/background-home-desktop.jpg')]"
  >
    <div class="pt-28"></div>
    <div
      class="flex flex-col justify-between gap-12 md:ml-16 md:mt-14 md:w-10/12 md:flex-row"
    >
      <div
        class="flex flex-col items-center gap-4 md:w-6/12 md:items-start md:gap-6"
      >
        <p class="text-2xl text-gray">SO, YOU WANT TO TRAVEL TO</p>
        <p
          class="font-belle text-6xl font-bold md:text-[110px] lg:text-[150px]"
        >
          SPACE
        </p>
        <p class="text-center text-gray md:text-start">
          Let’s face it, if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div class="flex items-center justify-center">
        <RouterLink to="/destination">
          <div
            class="delay-400 flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-white font-bold text-black outline outline-[0px] outline-[#ffffff4f] transition-all duration-300 ease-linear hover:outline-[26px]"
          >
            Explore
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>