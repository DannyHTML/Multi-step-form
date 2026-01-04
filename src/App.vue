<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>
<!-- TODO: Make setup correct before starting project. -->
<!-- TODO: Is husky pre-commit running npm run test correctly -->
<template>
  <header>
    <div class="wrapper">
      <HelloWorld title="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
