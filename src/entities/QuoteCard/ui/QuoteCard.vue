<script setup lang="ts">
import type { QuoteCardProps } from '@/entities/QuoteCard/model/QuoteCard.types.ts'
import { BaseButton } from '@/shared/ui/BaseButton'

const props = defineProps<QuoteCardProps>()
</script>

<template>
  <blockquote
    class="bg-tag-bg border-secondary flex min-h-50 flex-col justify-between rounded-lg border p-6"
  >
    <div class="text-[14px]">{{ props.quote }}</div>
    <div class="border-secondary flex items-center justify-between border-t pt-4">
      <div class="text-secondary-text text-[12px]">{{ props.author }}</div>
      <div class="flex items-center gap-3">
        <BaseButton
          variant="custom"
          class="text-secondary-text hover:text-primary border-none duration-200"
          icon="outline/copy"
          iconSize="18"
        />
        <BaseButton
          variant="custom"
          class="text-secondary-text hover:text-primary border-none duration-200"
          icon="outline/favorites"
          iconSize="18"
        />
      </div>
    </div>
  </blockquote>
</template>
