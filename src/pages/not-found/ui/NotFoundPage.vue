<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
</script>
<template>
  <div class="flex flex-col items-center justify-center space-y-5 py-6 text-center sm:space-y-7 sm:py-10">
    <div class="text-5xl sm:text-6xl">404</div>
    <h1 class="text-xl font-bold sm:text-2xl">Page Not Found</h1>
    <BaseLink
      class="hover:bg-secondary bg-primary hover:text-default flex max-h-10 items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium text-white"
      to="/"
      activeClass="bg-secondary !text-primary"
    >
      Main Page
    </BaseLink>
  </div>
</template>
