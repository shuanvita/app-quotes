<script setup lang="ts">
import { AppLogo } from '@/shared/ui/AppLogo'
import NavMenu from '@/widgets/AppSidebar/ui/NavMenu/NavMenu.vue'
</script>

<template>
  <aside class="border-secondary-300 space-y-4 border-b px-4 py-4 sm:px-6 md:space-y-8 md:border-r md:border-b-0 md:p-6">
    <AppLogo />
    <NavMenu class="md:mb-10" />
  </aside>
</template>
