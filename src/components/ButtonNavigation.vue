<template>
  <button
    type="button"
    @click="$emit('click')"
    class="text-white font-medium rounded-sm bg-blue-950 px-3 py-2 cursor-pointer"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>
