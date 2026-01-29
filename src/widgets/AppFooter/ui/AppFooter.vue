<script setup lang="ts">
import { BaseLink } from '@/shared/ui/BaseLink'
</script>

<template>
  <footer
    class="text-secondary-text border-secondary flex items-center justify-between border-t pt-4 text-[12px]"
  >
    <div>© 2026 App Quotes</div>
    <div class="item-center flex gap-4">
      <BaseLink
        class="hover:text-primary flex items-center gap-2 duration-200"
        preIcon="outline/github"
        iconSize="16"
        href="https://github.com/shuanvita"
        >GitHub</BaseLink
      >
      <BaseLink
        class="hover:text-primary flex items-center gap-2 duration-200"
        preIcon="outline/telegram"
        iconSize="16"
        href="https://t.me/anvshurygin"
        >Telegram</BaseLink
      >
      <BaseLink
        class="hover:text-primary flex items-center gap-2 duration-200"
        preIcon="outline/linkedin"
        iconSize="16"
        href="#"
        >Linkedin</BaseLink
      >
    </div>
  </footer>
</template>
