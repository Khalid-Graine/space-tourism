<template>
  <div
    class="bg-[url('@/assets/home/background-home-mobile.jpg')] md:bg-[url('@/assets/home/background-home-tablet.jpg')] lg:bg-[url('@/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-center bg-cover min-h-screen countainer"
  >
    <div class="pt-28"></div>
    <div
      class="flex flex-col justify-between gap-12 md:flex-row md:ml-16 md:mt-14 md:w-10/12"
    >
      <div
        class="flex items-center md:items-start md:w-6/12 flex-col gap-4 md:gap-6"
      >
        <p class="text-2xl text-gray">SO, YOU WANT TO TRAVEL TO</p>
        <p
          class="font-belle font-bold text-6xl md:text-[110px] lg:text-[150px]"
        >
          SPACE
        </p>
        <p class="text-gray text-center md:text-start">
          Let’s face it, if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
       
      <div class="flex justify-center items-center">
        <RouterLink to="/destination" >
          <div
          class="bg-white cursor-pointer text-black flex justify-center items-center w-40 h-40 font-bold rounded-full hover:outline-[26px] outline-[0px] outline outline-[#ffffff4f] transition-all ease-linear duration-300 delay-400"
        >
          Explore
        </div>
        </RouterLink>
       
      </div>
    </div>
  </div>
</template>

<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scoped>
.khalid {
  background-image: url(../assets/home/background-home-mobile.jpg);
  padding: 10px;
}
</style>
