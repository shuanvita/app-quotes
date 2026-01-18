<script setup lang="ts">
import { QuoteCard } from '@/entities/quoteCard'
import UiButton from '@/shared/ui/uiButton/UiButton.vue'
import { useRandomQuote } from '@/features/randomQuote/lib/useRandomQuote.ts'

const { quote, loading } = useRandomQuote()
</script>

<template>
  <div class="flex flex-col items-center gap-12.5">
        <QuoteCard
          v-if="quote"
          :quote="quote.content"
          :author="quote.author"
          :loading="loading"
        />
    <UiButton class="h-17.5 w-17.5" icon="outline/shuffle" aria-label="Random quote" />
  </div>
</template>
