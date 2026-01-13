<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationBottom from './components/NavigationBottom.vue';
import ButtonNavigation from './components/ButtonNavigation.vue';
import { useStepValidation } from '@/stores/stepValidation';
import { useRouter } from 'vue-router';

const stepValidationStore = useStepValidation();
const router = useRouter();
// TODO: I can do the validation logic in index.ts router file.
function goNext() {
  const nextRoute = stepValidationStore.nextStep();
  if (!nextRoute) return console.error('Please fill in all required fields.');
  router.push(nextRoute);
}

function goPrev() {
  const prevRoute = stepValidationStore.prevStep();
  if (prevRoute) router.push(prevRoute);
}
</script>

<template>
  <div class="container relative z-10">
    <RouterView />
  </div>

  <NavigationBottom :showLeftButton="!stepValidationStore.firstStep">
    <template #leftButton>
      <ButtonNavigation @click="goPrev"> Previous Step </ButtonNavigation>
    </template>

    <template #rightButton>
      <ButtonNavigation @click="goNext">{{
        stepValidationStore.lastStep ? 'Confirm' : 'Next Step'
      }}</ButtonNavigation>
    </template>
  </NavigationBottom>
</template>
