<script setup lang="ts">
import { useQuotesStore } from '@/entities/QuoteCard/model/QuoteCard.store.ts'

const store = useQuotesStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="(item, idx) in store.quotes" :key="`quote-card-f-${idx}`">{{ item.content }}</div>
  </div>
</template>

<style scoped></style>
