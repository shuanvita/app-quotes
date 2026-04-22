<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { sidebarData } from '@/shared/data'
</script>

<template>
  <nav class="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:block md:space-y-2 md:overflow-visible md:px-0 md:pb-0">
    <BaseLink
      v-for="(item, idx) in sidebarData.navigation"
      :key="`nav-item-${idx}`"
      class="hover:bg-secondary flex h-10 shrink-0 items-center gap-3 rounded-md px-3 py-2 text-[14px] font-medium whitespace-nowrap text-secondary-200 hover:text-default md:max-h-10 md:whitespace-normal"
      :to="item.to"
      :preIcon="item.preIcon"
      iconSize="20"
      activeClass="bg-secondary !text-primary"
    >
      {{ item.label }}
    </BaseLink>
  </nav>
</template>
