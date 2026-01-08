<template>
  <main>
    <header class="h-20 flex justify-center items-center gap-5">
      <NavigationStep routerLink="/signup/personal-info" :routerStep="1" />
      <NavigationStep routerLink="/signup/select-plan" :routerStep="2" />
      <NavigationStep routerLink="/signup/add-ons" :routerStep="3" />
      <NavigationStep routerLink="/signup/summary" :routerStep="4" />
    </header>
    <div class="container relative z-10">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationStep from './NavigationStep.vue';
</script>
