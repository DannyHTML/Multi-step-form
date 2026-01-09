<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationBottom from './components/NavigationBottom.vue';
import ButtonNavigation from './components/ButtonNavigation.vue';
import { useFormStore } from '@/stores/form';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

function goNext() {
  const nextRoute = formStore.nextStep();
  if (!nextRoute) return console.log('Please fill in all required fields.');
  router.push(nextRoute);
}

function goPrev() {
  const prevRoute = formStore.prevStep();
  if (prevRoute) router.push(prevRoute);
}
</script>

<template>
  <div class="container relative z-10">
    <RouterView />
  </div>

  <NavigationBottom :showLeftButton="!formStore.firstStep">
    <!-- TODO: Previous button not working, not showing up -->
    <template #leftButton>
      <ButtonNavigation @click="goPrev"> Previous Step </ButtonNavigation>
    </template>

    <template #rightButton>
      <ButtonNavigation @click="goNext">Next Step</ButtonNavigation>
    </template>
  </NavigationBottom>
</template>
