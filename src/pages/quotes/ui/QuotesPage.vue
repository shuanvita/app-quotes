<script setup lang="ts">
import { useQuotes } from '@/entities/quote/model/useQuotes.ts'
import { QuoteCard } from '@/entities/quote'
import { BasePagination } from '@/shared/ui/BasePagination'
import { ref } from 'vue'

const { quotes, load } = useQuotes()
const currentPage = ref(0)

const handlePageChange = (page: number) => {
  currentPage.value = page
  load(page) // ✅ Передаем page в load
}
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-[24px] font-bold">All Quotes</h1>
      <p>Explore our complete collection of {{ quotes.totalCount }} quotes.</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <QuoteCard
        v-for="item in quotes.results"
        :key="item._id"
        v-bind="item"
        :quote="item.content"
      />
    </div>
    <BasePagination
      class="mt-12"
      v-if="quotes.totalCount"
      :total="quotes.totalCount"
      :limit="quotes.limit"
      :current-page="currentPage"
      @page-change="handlePageChange"
    />
  </div>
</template>

<style scoped></style>
