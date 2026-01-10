<template>
  <!-- TODO: Add accessibility features and check if this can be written cleaner -->
  <div class="flex justify-center mt-4 bg-blue-200/40 rounded-lg">
    <div class="flex items-center gap-3 p-2.5">
      <!-- Monthly -->
      <span
        class="font-medium transition-colors cursor-pointer"
        :class="!enabled ? 'text-blue-900' : 'text-gray-500'"
        @click="update(false)"
      >
        Monthly
      </span>

      <!-- Switch -->
      <Switch
        :model-value="enabled"
        @update:model-value="update"
        class="relative inline-flex h-6 w-11 bg-blue-950 items-center rounded-full"
      >
        <span class="sr-only"> Switch between monthly and yearly </span>

        <span
          class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
          :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        />
      </Switch>

      <!-- Yearly -->
      <span
        class="font-medium transition-colors cursor-pointer"
        :class="enabled ? 'text-blue-900' : 'text-gray-500'"
        @click="update(true)"
      >
        Yearly
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue';

defineProps<{
  enabled: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:enabled', value: boolean): void;
}>();

const update = (value: boolean) => {
  emit('update:enabled', value);
};
</script>
