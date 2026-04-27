<script setup lang="ts">
import { BaseSvg } from '@/shared/ui/BaseSvg'
import { BaseButton } from '@/shared/ui/BaseButton'
import { useQuoteStore } from '@/entities/quote'
import { onMounted } from 'vue'

const store = useQuoteStore()

onMounted(() => store.loadBannerQuote())
</script>

<template>
  <section
    v-if="store.bannerQuote"
    class="border-secondary-300 gradient flex min-h-110 flex-col items-center justify-center gap-8 rounded-xl border p-6 sm:min-h-120 sm:gap-10 sm:p-10 lg:h-129.5 lg:gap-12 lg:p-16"
    role="banner"
  >
    <BaseSvg class="text-primary" name="outline/quote" size="52" />
    <div class="flex flex-col items-center gap-4 text-center sm:gap-6">
      <blockquote class="max-w-200 text-[24px]/[1.35] font-bold sm:text-[28px]/[1.4] lg:text-[32px]/[1.4]">
        {{ store.bannerQuote.content }}
      </blockquote>
      <div class="text-secondary-200 text-[14px] sm:text-[16px]">— {{ store.bannerQuote.author }}</div>
    </div>
    <div class="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <BaseButton
        variant="primary"
        class="h-11 w-full sm:min-w-36"
        preIcon="outline/random"
        iconSize="18"
        @click="() => store.loadBannerQuote()"
        >New Quote</BaseButton
      >
      <BaseButton
        class="h-11 w-full sm:min-w-44.5"
        preIcon="outline/favorites"
        iconSize="18"
        :variant="store.isFavorite(store.bannerQuote._id) ? 'favorite' : 'default'"
        @click="store.toggleFavorite({
          _id: store.bannerQuote._id,
          quote: store.bannerQuote.content,
          author: store.bannerQuote.author,
        })"
        >{{ store.isFavorite(store.bannerQuote._id) ? 'Remove' : 'Add to Favorites' }}</BaseButton
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
