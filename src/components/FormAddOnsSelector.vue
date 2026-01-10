<template>
  <!-- TODO: Look at the v-modal logic -->
  <label
    :for="selectId"
    class="block rounded-lg p-4 outline transition outline-blue-950"
    :class="[isSelected ? 'bg-blue-200/40' : '']"
  >
    <div class="flex gap-3 items-center">
      <input
        :checked="checked"
        :id="selectId"
        :name="selectId"
        type="checkbox"
        class="w-4.5 h-4.5"
        v-model="isSelected"
      />
      <div class="grow">
        <span class="block font-bold first-letter:capitalize">{{ selectId }}</span>
        <span class="block text-sm text-grey-500">Access to multiplayer games</span>
      </div>
      <span class="text-blue-950"> test </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/form';

const props = defineProps<{
  selectId: 'online-services' | 'larger-storage' | 'customizable-profile';
  checked?: boolean;
}>();

const formStore = useFormStore();

const isSelected = computed(() => formStore.selectedAddOnId === props.selectId);
</script>
