<template>
  <div
    class="countainer min-h-screen bg-[url('@/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('@/assets/technology/background-technology-desktop.jpg')]"
  >
    <div class="h-20 md:mb-10"></div>

    <div class="grid grid-cols-3 grid-rows-1 gap-4 md:grid-rows-6">
      <!-- <div
        class=" col-span-3 md:col-span-2 md:row-span-1 text-center md:text-start md:pl-4 "
      >
        <span class="mr-2">0{{targetIndex  }}</span>
        <span class="uppercase">{{ data.name }}</span>
      </div> -->
      <TheTitle
        :number="'0' + targetIndex"
        :title="data.name"
        :classes="'col-span-3 text-xl md:col-span-2 md:row-span-1 text-center md:text-start md:pl-4'"
      />
      <div
        class="col-span-3 flex items-center justify-center md:col-span-1 md:row-span-6"
      >
        <!-- for phone size -->
        <img
          :src="`/technology/${data.image}-portrait.jpg`"
          class="object-containl hidden md:block"
          alt=""
        />
        <!-- for bigger devices -->
        <img
          :src="`/technology/${data.image}-landscape.jpg`"
          class="object-fill md:hidden"
          alt=""
        />
      </div>
      <div
        class="col-span-3 flex flex-col items-center gap-4 md:col-span-2 md:row-span-5 md:flex-row md:gap-8"
      >
        <ul class="flex gap-6 p-2 md:flex-col">
          <li
            @click="choose(1)"
            :class="[targetIndex === 1 ? 'bg-gray text-black' : '']"
          >
            1
          </li>
          <li
            @click="choose(2)"
            :class="[targetIndex === 2 ? 'bg-gray text-black' : '']"
          >
            2
          </li>
          <li
            @click="choose(3)"
            :class="[targetIndex === 3 ? 'bg-gray text-black' : '']"
          >
            3
          </li>
        </ul>
        <div class="flex flex-col items-center gap-4 md:items-start">
          <p class="text-bs text-gray">THE TERMINOLOGY...</p>
          <p class="font-belle text-3xl font-extrabold uppercase">
            {{ data.name }}
          </p>
          <p class="pb-2 text-center text-gray md:text-start">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useAllDataStore } from '../stores/alldata';
import TheTitle from '../components/TheTitle.vue';
const MyData = useAllDataStore();
const { technology } = MyData;
const targetIndex = ref(1);

function choose(n) {
  targetIndex.value = n;
}
const data = computed(() => technology[targetIndex.value - 1]);
</script>

<style scoped>
ul li {
  @apply flex h-10  w-10 cursor-pointer items-center justify-center rounded-full border-[2px] border-gray hover:bg-gray hover:text-black;
}
</style>
