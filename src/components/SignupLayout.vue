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
    <div>
      <NavigationButton :showLeftButton="!formStore.firstStep">
        <template #rightButton>
          <button @click="goNext" class="text-white font-medium rounded-sm bg-blue-950 px-3 py-2">
            Next
          </button>
        </template>
        <template #leftButton>
          <button @click="goPrev" class="text-white font-medium rounded-sm bg-blue-950 px-3 py-2">
            Previous
          </button>
        </template>
      </NavigationButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationStep from './NavigationStep.vue';
import NavigationButton from '@/components/NavigationButton.vue';
import { useFormStore } from '@/stores/form.ts';
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
  if (prevRoute) {
    router.push(prevRoute);
  } else {
    console.log('No previous route available.');
  }
}
</script>
