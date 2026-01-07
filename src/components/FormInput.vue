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
      class="border p-2 rounded-sm w-full border-grey-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  inputId: string;
  placeholder: string;
  type: string;
  autofocus?: boolean;
  autocomplete: string;
  modelValue?: string | number;
}>();

const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>
