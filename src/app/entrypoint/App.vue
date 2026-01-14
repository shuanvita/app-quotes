<script setup lang="ts">
import { TheHeader } from '@/widgets/header'
import { TheFooter } from '@/widgets/footer'
</script>

<template>
  <TheHeader />
  <main class="container">
    <RouterView />
  </main>
  <TheFooter />
</template>
