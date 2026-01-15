<template>
  <div class="fixed bottom-0 w-full h-16 bg-white flex justify-between items-center px-4">
    <div class="flex justify-between container max-w-2xl">
      <div>
        <slot name="leftButton" v-if="showLeftButton" />
      </div>

      <div>
        <slot name="rightButton" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    showLeftButton?: boolean;
  }>(),
  {
    showLeftButton: true,
  },
);
</script>
