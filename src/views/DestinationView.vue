<template>
  <div
    class="bg-[url('@/assets/destination/background-destination-mobile.jpg')] md:bg-[url('@/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('@/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-center bg-cover min-h-screen countainer"
  >
    <div class="pt-28"></div>







    <!-- parent -->
   <div class="grid grid-cols-2 gap-8 mt-4">

    <!-- one -->
    <div class="col-span-2 md:col-span-1  flex flex-col  items-center gap-10">
      <div class="flex gap-3  justify-center text-2xl">
        <span class="text-gray">01</span>
        <p>PICK YOUR DESTINATION</p>
      </div>
      <img src="../assets/destination/image-moon.png" class="w-[250px]" alt="">
    </div> 

    <!-- two -->
    <div class="col-span-2 md:col-span-1 flex items-center flex-col gap-4">
      <ul class="flex gap-4">
        <li>
          <p @click="show = 'mars'">mars</p>
          <div :class="show == 'mars' ? 'w-full':'w-0' " class="bg-red-100 h-1 transition-all ease-linear duration-300 delay-200"></div>
        </li>
        <li>
          <p @click="show = 'moon'">moon</p>
          <div :class="show == 'moon' ? 'w-full':'w-0' " class="bg-red-100 h-1 transition-all ease-linear duration-300 delay-200"></div>
        </li>
        <li>
          <p @click="show = 'europa'">europa</p>
          <div :class="show == 'europa' ? 'w-full':'w-0' " class="bg-red-100 h-1 transition-all ease-linear duration-300 delay-200"></div>
        </li>
        <li>
          <p @click="show = 'titian'">titian</p>
          <div :class="show == 'titian' ? 'w-full':'w-0' " class="bg-red-100 h-1 transition-all ease-linear duration-300 delay-200"></div>
        </li>
      
      </ul>
      <div class=" font-belle font-bold text-5xl">MOON</div>
      <p class="text-center">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-20">
        <div class="flex flex-col items-center gap-3">
          <span class="text-gray">Avg. distance</span>
          <p class="font-belle text-2xl font-semibold">384,400 KM</p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-gray">Est. travel time</span>
          <p class="font-belle text-2xl font-semibold">3 DAYS</p>
        </div>
      </div>


    </div>


   </div>





  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref('mars');

import { useAllDataStore } from '@/stores/alldata'

// access the `store` variable anywhere in the component ✨
const store = useAllDataStore()
store.test('r')
</script>

<style scoped>
ul li p {
  @apply pb-2 cursor-pointer
}
</style>
