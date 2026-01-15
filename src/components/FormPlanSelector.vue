<template>
  <label class="relative cursor-pointer">
    <input
      type="radio"
      class="sr-only"
      name="plan"
      :value="id"
      v-model="formStore.selectedPlanId"
    />

    <div
      class="block rounded-lg p-4 border border-black transition"
      :class="isSelected ? 'bg-blue-200/80 border border-blue-400' : 'outline-gray-300'"
    >
      <div class="flex gap-3 items-center">
        <img :src="icon" class="h-10" />

        <div class="relative w-full">
          <span class="font-medium">{{ name }}</span>
          <span class="block text-grey-500">
            ${{ price }}/{{ formStore.isYearly ? 'yr' : 'mo' }}
          </span>

          <span v-if="formStore.isYearly" class="absolute text-sm -bottom-4 text-blue-900">
            2 months free
          </span>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/form';

const props = defineProps<{
  id: 'arcade' | 'advanced' | 'pro';
  name: string;
  price: number;
  icon: string;
}>();

const formStore = useFormStore();

const isSelected = computed(() => formStore.selectedPlanId === props.id);
</script>
