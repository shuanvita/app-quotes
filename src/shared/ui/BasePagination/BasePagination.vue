<script setup lang="ts">
import { BaseButton } from '@/shared/ui/BaseButton'
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['page-change'])

const totalPages = computed(() => Math.ceil(props.total / props.limit))
const halfVisible = 2

const visiblePages = computed(() => {
  const pages: number[] = []
  let start = Math.max(0, props.currentPage - halfVisible)
  let end = Math.min(totalPages.value - 1, props.currentPage + halfVisible)

  // Если start пропускает первую страницу
  if (start > 0) {
    pages.push(0)
    if (start > 1) pages.push(-1) // "..."
  }

  // Диапазон страниц
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  // Если end не доходит до последней
  if (end < totalPages.value - 1) {
    if (end < totalPages.value - 2) pages.push(-1) // "..."
    pages.push(totalPages.value - 1)
  }

  return pages.filter((p) => p >= 0)
})
</script>

<template>
  <ul class="flex" v-if="totalPages > 1">
    <!-- Предыдущая -->
    <li class="pagination-item">
      <BaseButton @click="$emit('page-change', currentPage - 1)" :disabled="currentPage === 0"
        >←</BaseButton
      >
    </li>

    <!-- Номера страниц (диапазон 5 кнопок) -->
    <li v-for="page in visiblePages" :key="page" class="pagination-item">
      <button
        @click="$emit('page-change', page)"
        :class="{ active: page === currentPage }"
        :disabled="page === currentPage"
      >
        {{ page + 1 }}
      </button>
    </li>

    <!-- Следующая -->
    <li class="pagination-item">
      <BaseButton
        @click="$emit('page-change', currentPage + 1)"
        :disabled="currentPage >= totalPages - 1"
        >→</BaseButton
      >
    </li>
  </ul>
</template>
