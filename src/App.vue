<template>
  
    <div
    class=" overflow-hidden relative  text-lg text-white"
  >
  <header class="countainer    bg-transparent absolute top-4   w-full flex items-center justify-between">

      <a href="/">
        <img src="./assets/shared/logo.svg" class=" mr-6" alt="" />
      </a>
      <div
        class="hidden lg:flex w-full h-[1px] bg-galaxy flex-grow rounded-l-sm"
      >
    </div>

      <!-- Nav for desktop -->
      <nav
        class="hidden  bg-galaxy custom-shadow pl-4 py-5 md:flex   gap-8 rounded-sm "
      >
        <Links @closeMenu="closeMenu()" />
      </nav>

      <!-- Nav for ipdate and phone -->
      <nav
        :class="showMenu ? 'right-0' : '-right-full'"
        class="fixed top-0 w-full h-screen gap-10 bg-[#273c98] flex flex-col justify-center transition-all ease-in-out delay-100 duration-500"
      >
        <div class="ml-10 flex flex-col gap-10 uppercase">
          <Links @closeMenu="closeMenu()" />
        </div>

        <!-- <div
          v-if="showMenu"
          class="w-10 h-10 fixed top-14 right-0 cursor-pointer"
        >
          <img
            @click="toggleMenu"
            src="./assets/shared/icon-close.svg"
            alt=""
          />
        </div> -->
      </nav>

      <div class="cursor-pointer md:hidden w-10 h-10 p-2 static z-0 top-0 right-0">
        <img
        v-if="!showMenu"
          @click="toggleMenu"
          src="./assets/shared/icon-hamburger.svg"
          alt=""
        />
        <img
        v-if="showMenu"
            @click="toggleMenu"
            src="./assets/shared/icon-close.svg"
            alt=""
          />
      </div>

    </header>
    
   
    <div class="">
      
      <RouterView />
    </div>
  </div>
 
  
  


</template>

<script setup>
import { ref,watch,computed, onBeforeMount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Links from './components/Links.vue'
const route = useRoute();
const showMenu = ref(false);
const routeName = ref('home');

// const BackgroundName = ref(`
//     bg-[url('@/assets/${routeName.value}/background-${routeName.value}-mobile.jpg')]
//     md:bg-[url('@/assets/${routeName.value}/background-${routeName.value}-tablet.jpg')]
//     lg:bg-[url('@/assets/${routeName.value}/background-${routeName.value}-desktop.jpg')]
//   `);

watch(
 () => route.name, (newName) => {
    routeName.value = newName;
}
);





const BackgroundName = computed(() => ({
  ['bg-[url("@/assets/' + routeName.value + '/background-' + routeName.value + '-mobile.jpg")]']: true,
  ['md:bg-[url("@/assets/' + routeName.value + '/background-' + routeName.value + '-tablet.jpg")]']: true,
  ['lg:bg-[url("@/assets/' + routeName.value + '/background-' + routeName.value + '-desktop.jpg")]']: true,
}));

onBeforeMount(() => {
  // Initial setup
});

function toggleMenu() {
  showMenu.value = !showMenu.value;
  
}

function closeMenu() {
  showMenu.value = false;

}
</script>

<style>





.custom-shadow {
  box-shadow: 100px 0px 0px #fefefe20;
}
</style>
