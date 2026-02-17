<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { useI18n } from 'vue-i18n'
import { sidebarData } from '@/shared/data'
import { computed } from 'vue'

const { t } = useI18n()

const labelKeys = {
  Home: 'sidebar.home',
  Authors: 'sidebar.authors',
  'All Quotes': 'sidebar.quotes',
  Favorites: 'sidebar.favorites',
} as const

const navigation = computed(() =>
  sidebarData.navigation.map((item) => ({
    ...item,
    label: t(labelKeys[item.label as keyof typeof labelKeys]),
  })),
)
</script>

<template>
  <nav class="space-y-2">
    <BaseLink
      v-for="(item, idx) in navigation"
      :key="`nav-item-${idx}`"
      class="hover:bg-secondary text-secondary-200 hover:text-default flex max-h-10 items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium"
      :to="item.to"
      :preIcon="item.preIcon"
      iconSize="20"
      activeClass="bg-secondary !text-primary"
    >
      {{ item.label }}
    </BaseLink>
  </nav>
</template>
