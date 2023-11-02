<template>
  <div id="demo" 
  :class="{

    'bg-red-300': false,
     'bg-blue-200': false, 
     'w-full': true,
      'h-[100px]': true
      
      
      }">
    {{ message }}
  </div>
  <button @click="toggleClass" class="bg-blue-200">Toggle Class</button>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
const isActive = ref(false);

function toggleClass() {
  isActive.value = !isActive.value;
  message.value = isActive.value ? 'ok' : '';
}
</script>
