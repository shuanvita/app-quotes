<script setup lang="ts">
import { useQuoteStore, QuoteCard } from '@/entities/quote'

const store = useQuoteStore()
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <div>
      <h1 class="text-[22px] font-bold sm:text-[24px]">Favorite Quotes</h1>
    </div>
    <div v-if="store.quotes.length" class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
      <QuoteCard v-for="item in store.quotes" :key="item._id" v-bind="item" :quote="item.quote" />
    </div>
    <div v-else>
      This is where your favorite quotes will live — the ones that inspire, motivate, or just hit
      the spot.
    </div>
  </div>
</template>

<style scoped></style>
