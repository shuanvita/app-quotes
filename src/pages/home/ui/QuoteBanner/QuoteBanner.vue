<script setup lang="ts">
import { BaseSvg } from '@/shared/ui/BaseSvg'
import { BaseButton } from '@/shared/ui/BaseButton'
import { useGetRandomQuote } from '@/pages/home/model/useGetRandomQuote/useGetRandomQuote'

const { quote, load, loading } = useGetRandomQuote()
</script>

<template>
  <section
    v-if="quote"
    class="border-secondary-300 gradient flex flex-col items-center justify-center gap-12 rounded-xl border p-16 h-129.5"
    role="banner"
  >
    <BaseSvg class="text-primary" name="outline/quote" size="64" />
    <div class="flex flex-col items-center gap-6 text-center">
      <blockquote class="max-w-200 text-[32px]/[1.4] font-bold">
        {{ quote.content }}
      </blockquote>
      <div class="text-secondary-200 text-[16px]">— {{ quote.author }}</div>
    </div>
    <div class="flex justify-center gap-4">
      <BaseButton
        variant="primary"
        class="h-11 min-w-36"
        preIcon="outline/random"
        iconSize="18"
        @click="load"
        >New Quote</BaseButton
      >
      <BaseButton class="h-11 min-w-44.5" preIcon="outline/favorites" iconSize="18"
        >Add to Favorites</BaseButton
      >
    </div>
  </section>
</template>

<style scoped>
.gradient {
  background:
    radial-gradient(235.18% 110.49% at 0 0%, #020617 0%, rgba(2, 6, 23, 0) 55%),
    radial-gradient(235.18% 110.49% at 100% 100%, #111827 0%, rgba(17, 24, 39, 0) 55%);
}

[data-theme='light'] .gradient {
  background:
    radial-gradient(235.18% 110.49% at 0 0, #e5e7eb 0%, rgba(229, 231, 235, 0) 55%),
    radial-gradient(235.18% 110.49% at 100% 100%, #e0e7ff 0%, rgba(224, 231, 255, 0) 55%);
}
</style>
