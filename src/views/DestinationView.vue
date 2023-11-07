<template>
  <div
    class="min-h-screen bg-[url('@/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('@/assets/destination/background-destination-desktop.jpg')]"
  >
    <div class="pt-28"></div>

    <div class="countainer mt-4 grid grid-cols-2 gap-8">
      <div class="col-span-2 flex flex-col items-center gap-10 md:col-span-1">
        <TheTitle :number="'01'" :title="'PICK YOUR DESTINATION'" />

        <img :src="imgUrl" class="w-[250px]" alt="" />
      </div>

      <div
        class="col-span-2 flex flex-col items-center gap-4 pb-10 md:col-span-1"
      >
        <ul class="flex gap-4">
          <li
            v-for="destination in destinations"
            :key="destination.name"
            class="destination-link"
          >
            <p
              @click="updateSelectedDestination(destination.name)"
              class="uppercase"
            >
              {{ destination.name }}
            </p>
            <div
              :class="show === destination.name ? 'w-full' : 'w-0'"
              class="mt-2 h-1 bg-red-100 transition-all delay-200 duration-300 ease-linear"
            ></div>
          </li>
        </ul>

        <div class="font-belle text-5xl font-bold uppercase">
          {{ data.name }}
        </div>
        <p class="text-center">
          {{ data.description }}
        </p>

        <div class="flex flex-col items-center gap-4 md:flex-row md:gap-20">
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
import { ref, computed } from 'vue';
import { useAllDataStore } from '@/stores/alldata';
import TheTitle from '../components/TheTitle.vue';

const show = ref('mars');
const myStore = useAllDataStore();
const { destinations } = myStore;
const imgUrl = computed(() => `/image-${show.value}.png`);
const data = ref(destinations[0]);

function updateSelectedDestination(destinationName) {
  show.value = destinationName;
  for (let i = 0; i < destinations.length; i++) {
    if (destinations[i].name == destinationName) {
      data.value = destinations[i];
    }
  }
}
</script>
.
<style scoped>
.destination-link {
  @apply cursor-pointer pb-2;
}
</style>
