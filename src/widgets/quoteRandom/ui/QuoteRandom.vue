<script setup lang="ts">
import UiButton from '@/shared/ui/uiButton/UiButton.vue'
import { QuoteCard } from '@/entities/quoteCard'
import { useRandomQuote } from '@/features/randomQuote'

const { quote, load, loading } = useRandomQuote()
</script>

<template>
  <div v-if="quote" class="flex flex-col items-center gap-12.5">
    <QuoteCard :quote="quote.content" :author="quote.author" />
    <UiButton
      class="h-17.5 w-17.5"
      icon="outline/shuffle"
      aria-label="Random quote"
      @click="load"
      :disabled="loading"
    />
  </div>
</template>
