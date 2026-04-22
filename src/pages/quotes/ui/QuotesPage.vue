<script setup lang="ts">
import { ref } from 'vue'
import { useQuotes, QuoteCard } from '@/entities/quote'
import { BasePagination } from '@/shared/ui/BasePagination'

const { quotes, load } = useQuotes()
const currentPage = ref(0)

const handlePageChange = (page: number) => {
  currentPage.value = page
  load(page)
}
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <div>
      <h1 class="text-[22px] font-bold sm:text-[24px]">All Quotes</h1>
      <p>Explore our complete collection of {{ quotes.totalCount }} quotes.</p>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
      <QuoteCard
        v-for="item in quotes.results"
        :key="item._id"
        v-bind="item"
        :quote="item.content"
      />
    </div>
    <BasePagination
      class="mt-8 sm:mt-12"
      v-if="quotes.totalCount"
      :total="quotes.totalCount"
      :limit="quotes.count"
      :current-page="currentPage"
      @page-change="handlePageChange"
    />
  </div>
</template>

<style scoped></style>
