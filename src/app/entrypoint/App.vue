<script setup lang="ts">
import { AppHeader } from '@/widgets/AppHeader'
import { AppFooter } from '@/widgets/AppFooter'
import { AppSidebar } from '@/widgets/AppSidebar'
</script>

<template>
  <div class="container grid h-screen grid-cols-[260px_1fr]">
    <AppSidebar />
    <div class="px-10 py-6 grid grid-rows-[auto_1fr_auto]">
      <AppHeader />
      <RouterView />
      <AppFooter class="mt-16" />
    </div>
  </div>
</template>

<style scoped></style>
