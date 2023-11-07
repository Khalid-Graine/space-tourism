<template>
  <div
    class="flex min-h-screen flex-col bg-[url('@/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('@/assets/crew/background-crew-desktop.jpg')]"
  >
    <div class="h-20 md:mb-10"></div>
    <div class="countainer grid flex-grow grid-cols-12 gap-4">
      <div
        class="col-span-full flex h-full flex-col items-center gap-4 py-3 md:col-span-8 md:items-start md:justify-center"
      >
        <TheTitle :number="'02'" :title="'MEET YOUR CREW'" />

        <p class="font-belle text-2xl uppercase text-gray">{{ data.role }}</p>
        <p class="font-belle text-3xl uppercase md:text-4xl">{{ data.name }}</p>
        <p class="text-center text-gray md:text-start">
          {{ data.bio }}
        </p>

        <ul class="flex gap-3">
          <li @click="choose(1)">1</li>
          <li @click="choose(2)">2</li>
          <li @click="choose(3)">3</li>
          <li @click="choose(4)">4</li>
        </ul>
      </div>
      <div
        class="col-span-full flex flex-col justify-end overflow-hidden md:col-span-4"
      >
        <img
          :src="`/crew/${data.image}.png`"
          alt=""
          class="mx-auto w-9/12"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useAllDataStore } from '@/stores/alldata';
import TheTitle from '../components/TheTitle.vue';
const MyData = useAllDataStore();
const { crew } = MyData;
const targetIndex = ref(1);

function choose(index) {
  targetIndex.value = index;
}
const data = computed(() => crew[targetIndex.value - 1]);
</script>

<style scoped>
ul li {
  @apply flex h-10  w-10 cursor-pointer items-center justify-center rounded-full border-[2px] border-gray hover:bg-gray hover:text-black;
}
</style>
