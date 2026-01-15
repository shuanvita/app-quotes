<script setup lang="ts">
import { QuoteCard } from '@/entities/quoteCard'
import UiButton from '@/shared/ui/uiButton/UiButton.vue'
</script>

<template>
  <div class="flex flex-col items-center gap-12.5">
    <QuoteCard />
    <UiButton class="h-17.5 w-17.5" icon="outline/shuffle" aria-label="Random quote" />
  </div>
</template>
