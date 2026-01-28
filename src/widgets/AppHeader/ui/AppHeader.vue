<script setup lang="ts">
import { BaseButton } from '@/shared/ui/BaseButton'
</script>

<template>
  <header class="flex items-center justify-end gap-3">
    <BaseButton
      class="border-tag-border bg-tag-bg hover:bg-nav-bg hover:border-tag-border-hover max-h-10 border text-[14px] duration-200 px-4.5"
      preIcon="outline/language"
      iconSize="16"
    >
      English
    </BaseButton>
    <BaseButton
      class="border-tag-border hover:bg-nav-bg hover:border-tag-border-hover text-nav-text h-10 w-10 border text-[14px] duration-200"
      icon="outline/sun"
      iconSize="20"
    />
    <BaseButton
      class="border-tag-border  hover:bg-nav-bg hover:border-tag-border-hover text-nav-text h-10 w-10 border text-[14px] duration-200"
      icon="outline/favorites"
      iconSize="20"
    />
  </header>
</template>
