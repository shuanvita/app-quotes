<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { sidebarData } from '@/shared/data'
</script>

<template>
  <nav class="space-y-2">
    <BaseLink
      v-for="(item, idx) in sidebarData.navigation"
      :key="`nav-item-${idx}`"
      class="hover:bg-secondary flex max-h-10 items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium text-secondary-200 hover:text-default"
      :to="item.to"
      :preIcon="item.preIcon"
      iconSize="20"
      activeClass="bg-secondary !text-primary"
    >
      {{ item.label }}
    </BaseLink>
  </nav>
</template>
