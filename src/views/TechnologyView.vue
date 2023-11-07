<template>
  <div
    class="bg-[url('@/assets/technology/background-technology-mobile.jpg')] md:bg-[url('@/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('@/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-center bg-cover min-h-screen countainer borderr"
  >

    <div class="h-20 md:mb-10 "></div>

    <div class="grid grid-rows-1 md:grid-rows-6   grid-cols-3 gap-4 ">
      <div
        class=" col-span-3 md:col-span-2 md:row-span-1 text-center md:text-start md:pl-4 "
      >
        <span class="mr-2">0{{targetIndex  }}</span>
        <span class="uppercase">{{ data.name }}</span>
      </div>
      <div
        class=" col-span-3 md:col-span-1 md:row-span-6 flex items-center justify-center"
      >
      <!-- for phone size -->
        <img
          :src="`/technology/${data.image}-portrait.jpg`"
          class="hidden md:block object-containl"
          alt=""
        />
        <!-- for bigger devices -->
        <img
          :src="`/technology/${data.image}-landscape.jpg`"
          class="md:hidden object-fill"
          alt=""
        />
      </div>
      <div
        class=" col-span-3 md:col-span-2 md:row-span-5 flex flex-col items-center md:flex-row gap-4 md:gap-8"
      >
        <ul class="flex gap-6 md:flex-col p-2">
          <li @click="choose(1)" 
          :class="[targetIndex === 1 ? 'bg-gray text-black':'']"
          >1</li>
          <li  @click="choose(2)"
          :class="[targetIndex === 2 ? 'bg-gray text-black':'']"
          >2</li>
          <li  @click="choose(3)"
          :class="[targetIndex === 3 ? 'bg-gray text-black':'']"
          >3</li>
        </ul>
        <div class="flex flex-col items-center gap-4 md:items-start">
          <p class="text-gray text-bs">THE TERMINOLOGY...</p>
          <p class="font-belle font-extrabold text-3xl uppercase">
            {{ data.name }}
          </p>
          <p class="text-center md:text-start text-gray pb-2">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed,ref } from "vue";
import { useAllDataStore } from "../stores/alldata";
const MyData = useAllDataStore();
const { technology } = MyData;
const targetIndex = ref(1);

function choose(n) {
  targetIndex.value = n;
}
const data = computed(() => technology[targetIndex.value -1])
</script>

<style scoped>
ul li {
  @apply w-10 h-10  rounded-full border-gray border-[2px] flex justify-center items-center hover:bg-gray hover:text-black cursor-pointer;
}
</style>
