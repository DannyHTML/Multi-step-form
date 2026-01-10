<template>
  <label
    :for="selectId"
    class="block rounded-lg p-4 outline transition outline-blue-950"
    :class="[checked ? 'bg-blue-200/40' : '']"
  >
    <div class="flex gap-3 items-center">
      <input
        :checked="checked"
        :id="selectId"
        :name="selectId"
        type="checkbox"
        class="w-4.5 h-4.5"
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
defineProps<{
  selectId: 'online-services' | 'larger-storage' | 'customizable-profile';
  checked?: boolean;
}>();
</script>
