<template>
     <RouterLink to="/" @click="$emit('closeMenu')" >
          <span class="font-bold mr-2">00</span>
          <span>home</span>
        </RouterLink>


        <RouterLink to="/destination" @click="$emit('closeMenu')">
          <span class="font-bold mr-2">01</span>
          <span>destination</span>
        </RouterLink>

        <RouterLink to="/crew" @click="$emit('closeMenu')">
          <span class="font-bold mr-2">02</span>
          <span>crew</span>
        </RouterLink>

        <RouterLink to="/technology" @click="$emit('closeMenu')">
          <span class="font-bold mr-2">03</span>
          <span>technology</span>
        </RouterLink>
</template>

<script setup>
import { defineEmits } from 'vue';
defineEmits(['closeMenu'])
</script>