<script setup lang="ts">
import { AppLogo } from '@/shared/ui/AppLogo'
import NavMenu from '@/widgets/AppSidebar/ui/NavMenu/NavMenu.vue'
import PopularTags from '@/widgets/AppSidebar/ui/PopularTags/PopularTags.vue'
</script>

<template>
  <aside class="border-secondary space-y-8 border-r p-6">
    <AppLogo />
    <NavMenu class="mb-10" />
    <PopularTags />
  </aside>
</template>
