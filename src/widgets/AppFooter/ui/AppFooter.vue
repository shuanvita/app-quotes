<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
</script>

<template>
  <footer
    class="text-secondary-200 border-secondary-300 flex flex-col items-start justify-between gap-3 border-t pt-4 text-[12px] sm:flex-row sm:items-center sm:gap-4"
  >
    <div>© 2026 App QuotesTypes</div>
    <div class="item-center flex flex-wrap gap-x-4 gap-y-2">
      <BaseLink
        class="hover:text-primary flex items-center gap-2"
        preIcon="outline/github"
        iconSize="16"
        href="https://github.com/shuanvita"
        >GitHub</BaseLink
      >
      <BaseLink
        class="hover:text-primary flex items-center gap-2"
        preIcon="outline/telegram"
        iconSize="16"
        href="https://t.me/anvshurygin"
        >Telegram</BaseLink
      >
      <BaseLink
        class="hover:text-primary flex items-center gap-2"
        preIcon="outline/linkedin"
        iconSize="16"
        href="https://www.linkedin.com/in/andrey-shurygin-a66609389/"
        >Linkedin</BaseLink
      >
    </div>
  </footer>
</template>
