<script setup lang="ts">
import type { UiSvgProps } from '@/shared/ui/uiSvg/uiSvg.types.ts'

const props = withDefaults(defineProps<UiSvgProps>(), {
  name: '',
  size: '30',
  width: '',
  height: '',
})
</script>

<template>
  <svg
    :style="{
      width: props.width || props.size,
      height: props.height || props.size,
    }"
    role="img"
    aria-hidden="true"
  >
    <use :href="`/svg/${props.name}.svg`" />
  </svg>
</template>
