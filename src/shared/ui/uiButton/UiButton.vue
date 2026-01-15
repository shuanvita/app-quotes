<script setup lang="ts">
import type { UIButtonProps } from './uiButton.types.ts'
import UiSvg from '@/shared/ui/uiSvg/UiSvg.vue'

const props = withDefaults(defineProps<UIButtonProps>(), {
  icon: '',
  iconSize: '30',
  variant: 'default',
  disabled: false,
})

const variants = {
  default: 'bg-green-400 text-gray-900 hover:bg-green-600',
}
</script>

<template>
  <button
    :class="[
      'flex items-center justify-center duration-200',
      props.icon ? 'rounded-full p-5' : 'rounded-xl px-4 py-3',
      props.disabled
        ? 'cursor-not-allowed bg-slate-700 text-slate-500'
        : `${variants[props.variant as keyof typeof variants]} cursor-pointer`,
    ]"
    :disabled="props.disabled"
  >
    <UiSvg v-if="props.icon" :name="props.icon" :size="props.iconSize" />
    <slot v-else />
  </button>
</template>
