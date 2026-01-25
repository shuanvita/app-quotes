<script setup lang="ts">
import { AppLogo } from '@/shared/ui/AppLogo'
import NavMenu from '@/widgets/AppSidebar/ui/NavMenu/NavMenu.vue'
import PopularTags from '@/widgets/AppSidebar/ui/PopularTags/PopularTags.vue'
</script>

<template>
  <aside class="space-y-8 border-r border-[#1F2937] p-6">
    <AppLogo />
    <NavMenu />
    <PopularTags />
  </aside>
</template>
