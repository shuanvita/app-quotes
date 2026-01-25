<script setup lang="ts">
import { AppHeader } from '@/widgets/AppHeader'
import { AppFooter } from '@/widgets/AppFooter'
import { AppSidebar } from '@/widgets/AppSidebar'
</script>

<template>
  <div class="container grid h-screen grid-cols-[260px_1fr]">
    <AppSidebar />
    <div class="px-10 py-6">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<style scoped></style>
