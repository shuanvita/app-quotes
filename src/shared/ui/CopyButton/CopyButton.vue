<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <div v-if="isSupported">
    <button @click="copy(source)">
      <span>Copy Button</span>
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <div v-else>Your browser does not support Clipboard API</div>
</template>

<style scoped></style>
