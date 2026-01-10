<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-2xl font-bold text-blue-950">{{ title }}</h1>
    <div class="mt-2 mb-4 text-grey-500">
      {{ description }}
    </div>

    <form class="flex flex-col gap-3">
      <FormOptionSelector
        id="arcade"
        name="Arcade"
        :price="formStore.isYearly ? 90 : 9"
        :icon="iconArcade"
      />

      <FormOptionSelector
        id="advanced"
        name="Advanced"
        :price="formStore.isYearly ? 120 : 12"
        :icon="iconAdvanced"
      />

      <FormOptionSelector
        id="pro"
        name="Pro"
        :price="formStore.isYearly ? 150 : 15"
        :icon="iconPro"
      />

      <SubscriptionToggle v-model:enabled="formStore.isYearly" />
    </form>
  </div>
</template>

<script setup lang="ts">
import FormOptionSelector from './FormOptionSelector.vue';
import iconArcade from '@/assets/icon-arcade.svg';
import iconAdvanced from '@/assets/icon-advanced.svg';
import iconPro from '@/assets/icon-pro.svg';
import SubscriptionToggle from './SubscriptionToggle.vue';
import { useFormStore } from '@/stores/form';

const formStore = useFormStore();

defineProps<{
  title: string;
  description?: string;
}>();
</script>
