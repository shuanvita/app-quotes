<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { BaseSvg } from '@/shared/ui/BaseSvg'

const { source, icon, iconSize } = defineProps({
  icon: {
    type: String,
    default: 'outline/copy',
  },
  iconSize: {
    type: String,
    default: '18',
  },
  source: {
    type: String,
    required: true,
  },
})

const { copy, copied } = useClipboard({ source })
</script>

<template>
  <button
    class="relative cursor-pointer"
    @click="copy(source)"
  >
    <BaseSvg v-if="icon" :name="icon" :size="iconSize" />
    <span
      class="bg-secondary-300 absolute -top-10 -left-10 min-w-15 rounded-lg p-1 text-[13px] text-white"
      v-show="copied"
      >Copied</span
    >
  </button>
</template>

<style scoped></style>
