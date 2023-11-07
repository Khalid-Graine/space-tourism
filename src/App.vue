<template>
  <div class="relative overflow-hidden text-lg text-white">
    <header
      class="countainer absolute top-4 flex w-full items-center justify-between bg-transparent"
    >
      <a href="/">
        <img src="./assets/shared/logo.svg" class="mr-6" alt="" />
      </a>
      <div
        class="hidden h-[1px] w-full flex-grow rounded-l-sm bg-galaxy lg:flex"
      ></div>

      <!-- Nav for desktop -->
      <nav
        class="custom-shadow hidden gap-8 rounded-sm bg-galaxy py-5 pl-4 md:flex"
      >
        <Links @closeMenu="closeMenu()" />
      </nav>

      <!-- Nav for ipdate and phone -->
      <nav
        :class="showMenu ? 'right-0' : '-right-full'"
        class="fixed top-0 flex h-screen w-full flex-col justify-center gap-10 custom-color transition-all delay-100 duration-500 ease-in-out"
      >
        <div class="ml-10 flex flex-col gap-10 uppercase">
          <Links @closeMenu="closeMenu()" />
        </div>
      </nav>

      <div
        class="static right-0 top-0 z-0 h-10 w-10 cursor-pointer p-2 md:hidden"
      >
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

    <div >
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import Links from './components/Links.vue';
const showMenu = ref(false);

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
.custom-color {
backdrop-filter: blur(10px) saturate(100%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
}
</style>
