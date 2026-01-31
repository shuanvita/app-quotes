<script setup lang="ts">
import { BaseButton } from '@/shared/ui/BaseButton'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { BaseLink } from '@/shared/ui/BaseLink'
</script>

<template>
  <header class="text-secondary-200 flex items-center justify-end gap-3">
    <BaseButton
      class="max-h-10 border px-4.5 text-[14px]"
      preIcon="outline/language"
      iconSize="16"
    >
      English
    </BaseButton>
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
