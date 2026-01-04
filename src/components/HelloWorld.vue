<template>
  <div class="container">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
