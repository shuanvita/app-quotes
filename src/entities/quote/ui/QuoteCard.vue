<script setup lang="ts">
import type { QuoteCardProps } from '@/entities/quote/model/QuoteCard.types.ts'
import { BaseButton } from '@/shared/ui/BaseButton'
import CopyButton from '@/shared/ui/CopyButton/CopyButton.vue'
import { useQuoteStore } from '@/entities/quote/model/quote.store.ts'
import { computed } from 'vue'

const props = defineProps<QuoteCardProps>()

const store = useQuoteStore()

const isFavorite = computed(() => store.isFavorite(props._id))
</script>

<template>
  <blockquote
    class="bg-accent border-secondary-300 hover:border-primary flex min-h-50 flex-col justify-between rounded-lg border p-6 hover:shadow-[0_8px_24px_0_rgba(15,23,42,0.35)] duration-200"
  >
    <div class="text-[14px]">{{ props.quote }}</div>
    <div class="border-secondary-300 flex items-center justify-between border-t pt-4">
      <div class="text-secondary-200 text-[12px]">{{ props.author }}</div>
      <div class="flex items-center gap-3">
        <CopyButton
          class="text-secondary-200 hover:text-primary border-none"
          :source="props.quote"
        />
        <BaseButton
          variant="custom"
          :class="[
            'hover:text-primary border-none',
            isFavorite ? 'text-primary' : 'text-secondary-200',
          ]"
          icon="outline/favorites"
          iconSize="18"
          @click="store.toggleFavorite(props)"
        />
      </div>
    </div>
  </blockquote>
</template>
