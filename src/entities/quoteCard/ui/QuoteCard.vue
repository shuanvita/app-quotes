<script setup lang="ts">
import type { QuoteCard } from '@/entities/quoteCard/model/quoteCard.types.ts'

const props = defineProps<QuoteCard>()
</script>

<template>
  <blockquote
    class="bg-quote-bg flex max-w-226.5 flex-col items-center justify-center gap-7.5 rounded-[10px] px-7.5 py-12.5"
  >
    <div class="text-center text-[36px]/[1.3]">
      {{ props.quote }}
    </div>
    <div class="text-[20px] italic">{{ props.author }}</div>
  </blockquote>
</template>
