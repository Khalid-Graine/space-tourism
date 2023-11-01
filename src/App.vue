

<template>
   <div class="countainer image  text-lg text-white h-min">
    <header class="w-full  flex items-center justify-between">
      <img src="./assets/shared/logo.svg" class="countainer mr-6" alt="">
      <div class="hidden lg:flex w-full h-[1px] special flex-grow  rounded-l-sm">

      </div>

      <!-- Nav for desktop -->
      <nav class="hidden special custom-shadow md:flex  p-6 pr-20  gap-8 rounded-sm  uppercase">
        <Links @closeMenu="closeMenu()" />
      </nav>

      <!-- Nav for ipdate and phone -->
      <nav 
     :class="showMenu ? 'right-0':'-right-full'"
      class="fixed top-0  w-full  h-screen   gap-10 bg-[#273c98] flex flex-col  justify-center  transition-all ease-in-out delay-100 duration-500"
      >
      <div class="ml-10 flex flex-col gap-10 uppercase">
        <Links @closeMenu="closeMenu()" />
      </div>
      <div v-if="showMenu" class="w-10 h-10 fixed top-14 right-0 cursor-pointer">
        <img  @click="toggleMenu"  src="./assets/shared/icon-close.svg" alt="">
      </div>
      </nav>

      <div class="cursor-pointer md:hidden  w-10 h-10  p-2">
        <img  @click="toggleMenu" 
         src="./assets/shared/icon-hamburger.svg" alt="">
      </div>

    </header>


    <div class="countainer">
      <RouterView />
    </div>

  
   
  </div> 
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Links from './components/Links.vue';
const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
function closeMenu() {
  showMenu.value = false;
  console.log('Tes')
}
</script>


<style>
.image {
  background-image: url('@/assets/home/background-home-desktop.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.special {
  @apply bg-[#fefefe20]
}

.countainer {
  @apply px-3 py-5 md:px-6 lg:px-10 
}
.custom-shadow {
  box-shadow: 100px 0px 0px #fefefe20;
}
</style>
