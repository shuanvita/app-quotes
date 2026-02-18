<script setup lang="ts">
import { useQuoteStore, QuoteCard } from '@/entities/quote'

const store = useQuoteStore()
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-[24px] font-bold">Favorite Quotes</h1>
    </div>
    <div v-if="store.quotes.length" class="grid grid-cols-3 gap-6">
      <QuoteCard v-for="item in store.quotes" :key="item._id" v-bind="item" :quote="item.quote" />
    </div>
    <div v-else>
      This is where your favorite quotes will live — the ones that inspire, motivate, or just hit
      the spot.
    </div>
  </div>
</template>

<style scoped></style>
