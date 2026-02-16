<script setup lang="ts">
import { useQuoteStore } from '@/entities/quote/model/quote.store.ts'
import { QuoteCard } from '@/entities/quote'

const store = useQuoteStore()
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-[24px] font-bold">Favorites</h1>
      <p>Explore our complete collection of 1,248 quotes.</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <QuoteCard v-for="item in store.quotes" :key="item._id" v-bind="item" :quote="item.quote" />
    </div>
  </div>
</template>

<style scoped></style>
