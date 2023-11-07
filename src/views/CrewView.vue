<template>
 <div class="
 bg-[url('@/assets/technology/background-technology-mobile.jpg')] md:bg-[url('@/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('@/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-center bg-cover  min-h-screen flex flex-col ">
   <div class="h-20 md:mb-10"></div>
   <div class=" grid grid-cols-12 gap-4 flex-grow countainer">
    <div class="col-span-full md:col-span-8 h-full  flex flex-col items-center md:items-start md:justify-center gap-4 py-3">
      
      <div class="text-xl">
        <span class="mr-2 text-gray">02</span>
        <span class="uppercase">MEET YOUR CREW</span>
      </div>

      <p class="text-gray uppercase font-belle text-2xl">FLIGHT ENGINEER</p>
      <p class=" uppercase font-belle text-3xl md:text-4xl">ANOUSHEH ANSARI</p>
      <p class=" text-gray text-center md:text-start">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>


    <ul class="flex gap-3">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>.</li>
    </ul>


    </div>
    <div class="col-span-full md:col-span-4   flex flex-col justify-end">
      
      <img src="../../public/crew/image-anousheh-ansari.png" alt="" class="">
      <!-- <div class="bg-red-200 p-10">1</div>
      <div class="bg-red-800 p-10">2</div>
      <div class="bg-red-500 p-10">3</div> -->
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


