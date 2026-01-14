<script setup lang="ts">
import { TheHeader } from '@/widgets/header'
import { TheFooter } from '@/widgets/footer'
</script>

<template>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <main class="container place-items-center self-center">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
