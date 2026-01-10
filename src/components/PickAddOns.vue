<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-2xl font-bold text-blue-950">{{ title }}</h1>
    <div class="mt-2 mb-4 text-grey-500">
      {{ description }}
    </div>
    <form>
      <FormAddOnsSelector />
    </form>
  </div>
</template>

<script setup lang="ts">
import FormAddOnsSelector from './FormAddOnsSelector.vue';

defineProps<{
  title: string;
  description?: string;
}>();
</script>
