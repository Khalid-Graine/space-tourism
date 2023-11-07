<template>
 <div class="
 bg-[url('@/assets/technology/background-technology-mobile.jpg')] md:bg-[url('@/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('@/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-center bg-cover  min-h-screen flex flex-col ">
   <div class="h-20 md:mb-10"></div>
   <div class=" grid grid-cols-12 gap-4 flex-grow countainer">
    <div class="col-span-full md:col-span-8 h-full  flex flex-col items-center md:items-start md:justify-center gap-4 py-3">
      

     <TheTitle :number="'02'" :title="'MEET YOUR CREW'" />

      <p class="text-gray uppercase font-belle text-2xl">{{ data.role }}</p>
      <p class=" uppercase font-belle text-3xl md:text-4xl">{{ data.name }}</p>
      <p class=" text-gray text-center md:text-start">
        {{ data.bio }}
      </p>


    <ul class="flex gap-3">
      <li @click="choose(1)">1</li>
      <li @click="choose(2)">2</li>
      <li @click="choose(3)">3</li>
      <li @click="choose(4)">4</li>
    </ul>


    </div>
    <div class="col-span-full md:col-span-4   flex flex-col justify-end overflow-hidden">
      
      <img :src="`../../public/crew/${data.image}.png`" alt="" class="w-9/12 mx-auto">
     
    </div>
   </div>
 </div>
</template>

<script setup>
import { computed,ref } from "vue";
import { useAllDataStore } from "../stores/alldata";
import TheTitle from "../components/TheTitle.vue";
const MyData = useAllDataStore();
const { crew } = MyData;
const targetIndex = ref(1);

function choose(n) {
  targetIndex.value = n;
}
const data = computed(() => crew[targetIndex.value -1])
</script>

<style scoped>
ul li {
  @apply w-10 h-10  rounded-full border-gray border-[2px] flex justify-center items-center hover:bg-gray hover:text-black cursor-pointer;
}
</style>


