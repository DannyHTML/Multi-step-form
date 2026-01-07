<template>
  <div class="fixed bottom-0 right-0 w-full h-16 bg-white">
    <div class="flex items-center h-full container justify-end">
      <button
        type="submit"
        @click="emit('data')"
        class="text-white font-medium rounded-sm bg-blue-950 px-3 py-2"
      >
        <slot />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['data']);
</script>
