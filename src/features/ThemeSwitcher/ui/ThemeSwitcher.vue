<script setup lang="ts">
import { useThemeSwitcher } from '@/features/ThemeSwitcher'
import { BaseButton } from '@/shared/ui/BaseButton'

const { isDark, toggleTheme } = useThemeSwitcher()
</script>

<template>
  <BaseButton
    class="border-secondary-300 h-10 w-10 border text-[14px]"
    :icon="isDark ? 'outline/sun' : 'outline/moon'"
    iconSize="20"
    @click="toggleTheme"
  />
</template>
