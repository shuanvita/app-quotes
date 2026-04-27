<script setup lang="ts">
import { onMounted } from 'vue'
import { BaseLink } from '@/shared/ui/BaseLink'
import { homeData } from '@/shared/data'
import { QuoteCard } from '@/entities/quote'
import { useQuoteStore } from '@/entities/quote'

const store = useQuoteStore()

onMounted(() => {
  if (!store.randomQuotes?.length) store.loadRandomQuotes()
})
</script>

<template>
  <section class="pt-2.5">
    <div class="mb-6 flex items-center justify-between gap-3 sm:mb-8">
      <h2 class="text-[16px] font-semibold">{{ homeData.quotes.title }}</h2>
      <BaseLink class="text-primary text-[14px] hover:text-white" :to="homeData.quotes.link.to">
        {{ homeData.quotes.link.text }}</BaseLink
      >
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
      <QuoteCard
        v-for="item in store.randomQuotes"
        :key="item._id"
        v-bind="item"
        :quote="item.content"
      />
    </div>
  </section>
</template>
