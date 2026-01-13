<template>
  <nav class="flex z-10 justify-center items-center w-fit text-white font-medium">
    <!-- TODO: Need to keep track of the current step! -->
    <RouterLink
      :to="routerLink"
      active-class="bg-blue-300 border-transparent text-black duration-150 transition-all"
      class="border w-9 h-9 rounded-full flex justify-center items-center"
    >
      {{ routerStep }}
    </RouterLink>
  </nav>
  <img :src="LogoMobile" alt="Logo Mobile" class="fixed top-0 object-cover w-full max-w-3xl" />
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoMobile from '@/assets/bg-sidebar-mobile.svg';

defineProps<{
  routerLink: string;
  routerStep: number;
}>();
</script>
