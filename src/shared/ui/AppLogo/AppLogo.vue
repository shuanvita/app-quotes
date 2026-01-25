<script setup lang="ts">
import { BaseSvg } from '@/shared/ui/BaseSvg'
</script>

<template>
  <RouterLink
    class="inline-flex items-center gap-3 text-lg font-bold"
    to="/"
    aria-label="App Quotes Home"
  >
    <BaseSvg class="text-primary" size="32" name="outline/logo" />
    <span>App Quotes</span>
  </RouterLink>
</template>
