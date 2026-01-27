<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { sidebarData } from '@/shared/data'
</script>

<template>
  <nav class="space-y-2">
    <BaseLink
      v-for="(item, idx) in sidebarData.navigation"
      :key="`nav-item-${idx}`"
      class="text-nav-text hover:bg-nav-bg hover:text-nav-text-hover flex max-h-10 items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium duration-200"
      :to="item.to"
      :preIcon="item.preIcon"
      iconSize="20"
      activeClass="bg-nav-bg text-nav-text-hover"
    >
      {{ item.label }}
    </BaseLink>
  </nav>
</template>
