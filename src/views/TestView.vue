<template>
  <div id="demo" 
  class="w-full h-screen bg-blue-100 pt-20">
    <div>
      message:{{ message }}
      <div>
        <form action="">
          <input type="text" placeholder="write a text" v-model="myText" class=" text-black">
        </form>
      </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref,computed } from 'vue';


const myText = ref('khaliid')


const message = computed(
  () => myText.value
);

</script>
