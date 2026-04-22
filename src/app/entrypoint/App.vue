<script setup lang="ts">
import { AppHeader } from '@/widgets/AppHeader'
import { AppFooter } from '@/widgets/AppFooter'
import { AppSidebar } from '@/widgets/AppSidebar'
</script>

<template>
  <div class="container grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
    <AppSidebar />
    <div class="grid grid-rows-[auto_1fr_auto] px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
      <AppHeader class="mb-5 sm:mb-6 lg:mb-8" />
      <RouterView />
      <AppFooter class="mt-10 sm:mt-12 lg:mt-16" />
    </div>
  </div>
</template>
