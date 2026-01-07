<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationStep from './components/NavigationStep.vue';
import NavigationButton from './components/NavigationButton.vue';
import { useFormStore } from '@/stores/form';

const formStore = useFormStore();
</script>

<template>
  <main>
    <header class="h-20 flex justify-center items-center gap-5">
      <NavigationStep routerLink="/personal-info" :routerStep="1" />
      <NavigationStep routerLink="/select-plan" :routerStep="2" />
      <NavigationStep routerLink="/about" :routerStep="3" />
      <NavigationStep routerLink="/about" :routerStep="4" />
    </header>
    <div class="container relative z-10">
      <RouterView />
    </div>
    <NavigationButton @data="formStore.nextStep()"> Next Step </NavigationButton>
  </main>
</template>
