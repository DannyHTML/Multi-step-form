<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-2xl font-bold text-blue-950">{{ title }}</h1>
    <div class="mt-2 mb-4 text-grey-500">
      {{ description }}
    </div>
    <div class="flex justify-between items-center bg-blue-100 rounded-lg p-4">
      <div class="flex flex-col">
        <span class="block font-medium capitalize text-blue-950">
          {{ PlanName }} {{ subLength }}</span
        >
        <button
          type="button"
          @click="handleClick"
          class="flex font-medium text-grey-500 underline cursor-pointer"
        >
          Change
        </button>
      </div>
      <span class="block">
        {{ `$${price}${subLengthShort}` }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  PlanName: string;
  subLength: string;
  price: number;
  subLengthShort: string;
}>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
