<script setup lang="ts">
import { AppLogo } from '@/shared/ui/AppLogo'
import NavMenu from '@/widgets/AppSidebar/ui/NavMenu/NavMenu.vue'
import PopularTags from '@/widgets/AppSidebar/ui/PopularTags/PopularTags.vue'
</script>

<template>
  <aside class="space-y-8 border-r border-tag-border p-6">
    <AppLogo />
    <NavMenu class="mb-10" />
    <PopularTags />
  </aside>
</template>
