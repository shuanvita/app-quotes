<script setup lang="ts">
import { useQuoteStore } from '@/entities/quote/model/quote.store.ts'

const store = useQuoteStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="(item, idx) in store.quotes" :key="`quote-card-f-${idx}`">{{ item.content }}</div>
  </div>
</template>

<style scoped></style>
