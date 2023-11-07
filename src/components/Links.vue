<template>
  <RouterLink to="/" @click="$emit('closeMenu')">
    <span class="mr-2 font-bold">00</span>
    <span class="uppercase">home</span>
  </RouterLink>

  <RouterLink to="/destination" @click="$emit('closeMenu')">
    <span class="mr-2 font-bold">01</span>
    <span class="uppercase">destination</span>
  </RouterLink>

  <RouterLink to="/crew" @click="$emit('closeMenu')">
    <span class="mr-2 font-bold">02</span>
    <span class="uppercase">crew</span>
  </RouterLink>

  <RouterLink to="/technology" @click="$emit('closeMenu')">
    <span class="mr-2 font-bold">03</span>
    <span class="uppercase">technology</span>
  </RouterLink>
</template>

<script setup>
import { defineEmits } from 'vue';
defineEmits(['closeMenu']);
</script>
