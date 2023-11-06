<template>
  <div
    class="bg-[url('@/assets/crew/background-crew-mobile.jpg')] md:bg-[url('@/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('@/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-center bg-cover min-h-screen countainer 
    borderr"
  >
    <div class="pt-28"></div>

    <div class=" bg-yellow-200 flex">
    <!-- one -->
    <div class=" bg-red-300 max-h-screen">
     /
    </div>
    <!-- two -->
    <div class="bg-green-300 max-h-screen">
      <div>
       <p> COMMANDER</p>
       <p>DOUGLAS HURLEY</p>
       <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique ipsa dicta rerum. Harum sint cumque quidem nobis, est adipisci.
       </p>
      </div>
    </div>

    <div class="static bottom-0   right-1/4 ">
      <img src="/crew/image-douglas-hurley.png" class="w-[200px]" alt="">
    </div>
</div>


  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAllDataStore } from "@/stores/alldata";

const myStore = useAllDataStore();
const { crew } = myStore;
// const imgUrl = computed(() => `/image-${show.value}.png`);
</script>

