<script setup lang="ts">
import { computed } from 'vue'
import { BaseButton } from '@/shared/ui/BaseButton'
import type { PaginationProps } from '@/shared/ui/BasePagination/BasePagination.types.ts'

const { total, limit, currentPage } = defineProps<PaginationProps>()
const emit = defineEmits<{ 'page-change': [page: number] }>()

const totalPages = computed(() => Math.ceil(total / limit))

const visiblePages = computed(() => {
  const start = Math.max(0, Math.min(currentPage - 1, totalPages.value - 3))
  const count = Math.min(3, totalPages.value)
  return Array.from({ length: count }, (_, i) => start + i)
})

const isFirst = computed(() => currentPage === 0)
const isLast = computed(() => currentPage >= totalPages.value - 1)

const changePage = (page: number) => {
  emit('page-change', page)
}
</script>

<template>
  <ul class="flex items-center justify-center gap-1 text-[14px]/1" v-if="totalPages > 1">
    <li>
      <BaseButton
        class="h-8 w-8"
        icon="outline/arrow-left"
        iconSize="16"
        :disabled="isFirst"
        @click="changePage(currentPage - 1)"
      />
    </li>

    <li v-for="(page, index) in visiblePages" :key="index">
      <BaseButton
        class="h-8 w-8"
        :class="{ active: page === currentPage }"
        :disabled="page === currentPage"
        @click="changePage(page)"
      >
        {{ page + 1 }}
      </BaseButton>
    </li>

    <li>
      <BaseButton
        class="h-8 w-8"
        icon="outline/arrow-right"
        iconSize="16"
        :disabled="isLast"
        @click="changePage(currentPage + 1)"
      />
    </li>
  </ul>
</template>
