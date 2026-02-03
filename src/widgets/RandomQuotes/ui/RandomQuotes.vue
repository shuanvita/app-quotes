<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
import { homeData } from '@/shared/data'
import { QuoteCard } from '@/entities/QuoteCard'
</script>

<template>
  <section class="pt-2.5">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-[16px] font-semibold">{{ homeData.quotes.title }}</h2>
      <BaseLink class="text-primary text-[14px] hover:text-white" :to="homeData.quotes.link.to">
        {{ homeData.quotes.link.text }}</BaseLink
      >
    </div>
    <div class="grid grid-cols-3 gap-6">
      <QuoteCard v-for="item in homeData.quotes.list" :key="item._id" v-bind="item" />
    </div>
  </section>
</template>
