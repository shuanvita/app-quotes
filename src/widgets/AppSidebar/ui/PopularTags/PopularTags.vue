<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { sidebarData } from '@/shared/data'
</script>

<template>
  <h3 class="text-nav-text mb-4 text-[12px] font-medium">Popular Tags</h3>
  <div class="flex flex-wrap gap-2">
    <BaseLink
      v-for="(item, idx) in sidebarData.tags"
      :key="`tag-item-${idx}`"
      class="bg-tag-bg border-tag-border max-h-7 hover:bg-nav-bg hover:border-tag-border-hover flex items-center justify-center rounded-2xl border px-3 py-1.5 text-[12px] duration-200"
      :to="item.to"
    >
      {{ item.label }}
    </BaseLink>
  </div>
</template>
