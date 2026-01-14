<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-2xl font-bold text-blue-950">{{ title }}</h1>
    <div class="mt-2 mb-4 text-grey-500">
      {{ description }}
    </div>
    <div class="bg-blue-100 rounded-lg p-4">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="block font-bold capitalize text-blue-950">
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
        <span class="block font-bold">
          {{ `$${price}${subLengthShort}` }}
        </span>
      </div>
      <hr class="text-grey-500 my-5" />
      <div class="flex flex-col gap-2">
        <div v-for="addOn in addOns" :key="addOn.id" class="flex justify-between items-center">
          <span class="text-grey-500">{{ addOn.name }}</span>
          <span class="">{{ `+$${addOn.price}${subLengthShort}` }}</span>
        </div>
      </div>
    </div>

    <!-- Total cost -->
    <div class="flex justify-between items-center p-4">
      <span class="text-grey-500">
        {{ `Total (${totalTitle})` }}
      </span>
      <span class="text-blue-950 font-bold">
        {{ `${isYearly ? '' : '+'}$${totalPrice}/${isYearly ? 'yr' : 'mo'}` }}
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
  addOns: Array<{ name: string; price: number; id: string }>;
  totalTitle: string;
  totalPrice: number;
  isYearly: boolean;
}>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
