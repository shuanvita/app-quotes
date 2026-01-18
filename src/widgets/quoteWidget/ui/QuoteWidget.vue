<script setup lang="ts">
import { QuoteCard } from '@/entities/quoteCard'
import UiButton from '@/shared/ui/uiButton/UiButton.vue'
import { useQuoteWidget } from '../model/useQuoteWidget'
const { quotes, loading, refresh } = useQuoteWidget()
</script>

<template>
  <div class="flex flex-col items-center gap-12.5">
    <QuoteCard :quote="quotes[0].content" :author="quotes[0].author" />
    <!--    <QuoteCard :quote="quotes[0].content" />-->
    <UiButton class="h-17.5 w-17.5" icon="outline/shuffle" aria-label="Random quote" />
  </div>
</template>
