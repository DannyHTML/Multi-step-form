<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="handleClose">
      <!-- Backdrop transition -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

      <!-- Modal panel transition -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95 translate-y-4"
          enter-to="opacity-100 scale-100 translate-y-0"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100 translate-y-0"
          leave-to="opacity-0 scale-95 translate-y-4"
        >
          <DialogPanel class="w-full max-w-sm rounded bg-white p-6 text-center">
            <img :src="checkMarkIcon" class="mx-auto h-12 w-12" />

            <DialogTitle class="text-3xl font-bold"> Thank you {{ formName }}! </DialogTitle>

            <DialogDescription class="mt-2 text-sm text-gray-500">
              Thanks for confirming your subscription! We hope you have fun using our platform.
            </DialogDescription>

            <button
              type="button"
              class="mt-6 rounded bg-blue-600 px-4 py-2 text-white"
              @click="handleClose"
            >
              Another subscription
            </button>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue';

import checkMarkIcon from '@/assets/icon-thank-you.svg';

defineProps<{
  isOpen: boolean;
  formName: string;
}>();

const emit = defineEmits(['close']);

function handleClose() {
  emit('close');
}
</script>
