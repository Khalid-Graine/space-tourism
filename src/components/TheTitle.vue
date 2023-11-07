<template>
   <div class="text-xl md:text-2xl font-bold" :class="classes">
    <span class="mr-3 text-gray">{{ number }}</span>
    <span class="uppercase tracking-wider">{{ title }}</span>
   </div>
   
</template>

<script setup>
const props = defineProps(['number','title', 'classes'])
</script>