<template>
  <div
  class="bg-[url('@/assets/destination/background-destination-mobile.jpg')] md:bg-[url('@/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('@/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-center bg-cover min-h-screen  "
  >
    <div class="pt-28"></div>


   
   <div class="grid grid-cols-2 gap-8 mt-4 countainer">

 
    <div class="col-span-2 md:col-span-1  flex flex-col  items-center gap-10 ">
      <div class="flex gap-3  justify-center text-2xl">
        <span class="text-gray">01</span>
        <p>PICK YOUR DESTINATION</p>
      </div>
      <img :src="imgUrl" class="w-[250px]" alt="">
    </div> 

  
    <div class="col-span-2 md:col-span-1 flex items-center flex-col gap-4 pb-10">
      <ul class="flex gap-4">
  <li v-for="destination in destinations" :key="destination.name" class="destination-link">
    <p @click="updateSelectedDestination(destination.name)" class=" uppercase">{{ destination.name }}</p>
    <div :class="show === destination.name ? 'w-full' : 'w-0'" class="bg-red-100 h-1 mt-2 transition-all ease-linear duration-300 delay-200"></div>
  </li>
</ul>
  
      <div class=" font-belle font-bold text-5xl uppercase">
        {{ data.name }}
      </div>
      <p class="text-center">
        {{ data.description }}
      </p>

      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-20">
        <div class="flex flex-col items-center gap-3">
          <span class="text-gray">Avg. distance</span>
          <p class="font-belle text-2xl font-semibold uppercase">
            {{ data.distance }}
          </p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-gray">Est. travel time</span>
          <p class="font-belle text-2xl font-semibold uppercase">
            {{ data.travel }}
          </p>
        </div>
      </div>


    </div>


   </div>





  </div>
 
</template>

<script setup>
import { ref,computed } from "vue";
import {useAllDataStore} from '@/stores/alldata';

const show = ref('mars');
const myStore = useAllDataStore();
const {destinations} = myStore;
const imgUrl = computed(() => `/image-${show.value}.png`);
const data = ref(destinations[0])


function updateSelectedDestination(destinationName) {
  show.value = destinationName;
  for (let i = 0; i < destinations.length; i++) {
  if (destinations[i].name == destinationName) {
    data.value = destinations[i];
  }
 
}
}

</script>.
<style scoped>
.destination-link {
  @apply pb-2 cursor-pointer
}
</style>
