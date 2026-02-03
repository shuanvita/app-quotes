<script setup lang="ts">
import { useQuoteFavoritesStore } from '@/entities/QuoteCard/model/QuoteFavorites.store.ts'

const store = useQuoteFavoritesStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="(item, idx) in store.quotes" :key="`quote-card-f-${idx}`">{{ item.content }}</div>
  </div>
</template>

<style scoped></style>
