<template>
  <label
    :for="selectId"
    class="block rounded-lg p-4 outline transition outline-blue-950"
    :class="[isSelected ? 'bg-blue-200/40' : '']"
  >
    <div class="flex gap-3 items-center">
      <input
        :checked="isSelected"
        :id="selectId"
        :name="selectId"
        type="checkbox"
        class="w-4.5 h-4.5"
        @click="onClick"
      />
      <div class="grow">
        <span class="block font-bold first-letter:capitalize">{{ selectId }}</span>
        <span class="block text-sm text-grey-500">Access to multiplayer games</span>
      </div>
      <span class="text-sm text-purple-600">
        {{ `+$${addOnPrice}/${formStore.isYearly ? 'yr' : 'mo'}` }}
      </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/form';
import type { AddOns } from '@/types/addOns';

const props = defineProps<{
  selectId: 'online-services' | 'larger-storage' | 'customizable-profile';
}>();

const formStore = useFormStore();

function onClick() {
  const index = formStore.selectedAddOnIds.indexOf(props.selectId);
  if (index === -1) {
    formStore.selectedAddOnIds.push(props.selectId);
  } else {
    formStore.selectedAddOnIds.splice(index, 1);
  }
}

const isSelected = computed(() => formStore.selectedAddOnIds.includes(props.selectId));

const addOnPrice = computed(() => {
  const addOn = formStore.addOns.find((a: AddOns) => a.id === props.selectId);
  if (!addOn) return 0;
  return formStore.isYearly ? addOn.yearly : addOn.monthly;
});
</script>
