<script setup lang="ts">
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { BaseLink } from '@/shared/ui/BaseLink'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'
</script>

<template>
  <header class="text-secondary-200 flex items-center justify-end gap-3">
    <LanguageSwitcher />
    <ThemeSwitcher />
    <BaseLink
      class="border-secondary-300 hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-md border text-[14px] duration-200"
      to="/favorites"
      icon="outline/favorites"
      iconSize="20"
      activeClass="bg-secondary"
    />
  </header>
</template>
