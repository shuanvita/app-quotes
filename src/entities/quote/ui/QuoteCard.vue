<script setup lang="ts">
import type { QuoteCardProps } from '@/entities/quote/model/QuoteCard.types.ts'
import { BaseButton } from '@/shared/ui/BaseButton'
import CopyButton from '@/shared/ui/CopyButton/CopyButton.vue'

const props = defineProps<QuoteCardProps>()
</script>

<template>
  <blockquote
    class="bg-accent border-secondary-300 hover:border-primary flex min-h-50 flex-col justify-between rounded-lg border p-6 duration-200"
  >
    <div class="text-[14px]">{{ props.quote }}</div>
    <div class="border-secondary-300 flex items-center justify-between border-t pt-4">
      <div class="text-secondary-200 text-[12px]">{{ props.author }}</div>
      <div class="flex items-center gap-3">
        <CopyButton />
        <BaseButton
          variant="custom"
          class="text-secondary-200 hover:text-primary border-none"
          icon="outline/copy"
          iconSize="18"
        />
        <BaseButton
          variant="custom"
          class="text-secondary-200 hover:text-primary border-none"
          icon="outline/favorites"
          iconSize="18"
        />
      </div>
    </div>
  </blockquote>
</template>
