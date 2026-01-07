<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-2xl font-bold text-blue-950">{{ title }}</h1>
    <div class="mt-2 mb-4 text-grey-500">
      {{ description }}
    </div>

    <form class="flex flex-col gap-2">
      <FormInput
        type="text"
        label="Name"
        for="Name"
        placeholder="e.g. Danny Jager"
        autocomplete="name"
        autofocus
        v-model="formstore.formData.name"
      />
      <FormInput
        type="email"
        label="Email Address"
        for="Email"
        placeholder="e.g. danny@example.com"
        autocomplete="email"
        v-model="formstore.formData.email"
      />
      <FormInput
        type="tel"
        label="Phone Number"
        for="Phone"
        placeholder="e.g. +1 234 567 890"
        autocomplete="tel"
        v-model="formstore.formData.phone"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue';
import { useFormStore } from '@/stores/form';

const formstore = useFormStore();

defineProps<{
  title: string;
  description?: string;
}>();
</script>
