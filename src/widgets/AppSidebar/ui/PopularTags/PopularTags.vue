<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { sidebarData } from '@/shared/data'
import { useQuoteTags } from '@/entities/quote/model/useQuoteTags.ts'

const { sidebarTags } = useQuoteTags()
</script>

<template>
  <h3 class="text-secondary-200 mb-4 text-[12px] font-medium">Popular Tags</h3>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="(item, idx) in sidebarTags"
      :key="`tag-item-${idx}`"
      class="bg-accent border-secondary-300 hover:bg-secondary hover:border-primary flex max-h-7 items-center justify-center rounded-2xl border px-3 py-1.5 text-[12px] duration-200"
      >{{ item }}</span
    >
<!--    <BaseLink-->
<!--      v-for="(item, idx) in sidebarTags"-->
<!--      :key="`tag-item-${idx}`"-->
<!--      class="bg-accent border-secondary-300 hover:bg-secondary hover:border-primary flex max-h-7 items-center justify-center rounded-2xl border px-3 py-1.5 text-[12px] duration-200"-->
<!--      :to="item.to"-->
<!--    >-->
<!--      {{ item }}-->
<!--    </BaseLink>-->
  </div>
</template>
