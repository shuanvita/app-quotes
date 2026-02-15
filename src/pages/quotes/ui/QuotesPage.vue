<script setup lang="ts">
import { useQuotes } from '@/entities/quote/model/useQuotes.ts'
import { QuoteCard } from '@/entities/quote'

const { quotes } = useQuotes()
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-[24px] font-bold">All Quotes</h1>
      <p>Explore our complete collection of 1,248 quotes.</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <QuoteCard v-for="item in quotes.results" :key="item._id" v-bind="item" :quote="item.content" />
    </div>
    <div>Pagination</div>
  </div>
</template>

<style scoped></style>
