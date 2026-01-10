<template>
  <label :for="inputId">
    {{ label }}
    <input
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="onInput"
      :class="[
        'border p-2 rounded-sm w-full border-grey-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500',
        warning ? 'ring-red-500 ring-2 focus:ring-red-500' : '',
      ]"
    />
  </label>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form';
const props = defineProps<{
  label: string;
  inputId: string;
  field: 'name' | 'email' | 'phone';
  warning: boolean;
  placeholder: string;
  type: string;
  autofocus?: boolean;
  autocomplete: string;
  modelValue?: string | number;
}>();

const emit = defineEmits(['update:modelValue']);

const formStore = useFormStore();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  formStore.clearError(props.field);
  emit('update:modelValue', target.value);
}
</script>
