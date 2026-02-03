<script setup lang="ts">
import type { BaseButtonProps } from '@/shared/ui/BaseButton/BaseButton.types.ts'
import { BaseSvg } from '@/shared/ui/BaseSvg'
import { computed } from 'vue'

const props = defineProps<BaseButtonProps>()

const variants = {
  default: 'border border-secondary-300 text-default hover:bg-secondary',
  primary: 'bg-primary hover:bg-secondary-300 hover:text-default',
  favorite: 'border border-primary text-primary hover:bg-secondary',
  custom: '',
}
const variantClass = computed(() => {
  if (props.disabled) return 'cursor-not-allowed bg-slate-700 text-slate-500'
  const key = (props.variant || 'default') as keyof typeof variants
  return variants[key] + ' cursor-pointer'
})
</script>

<template>
  <button
    :class="[
      'flex items-center justify-center gap-2 rounded-md duration-200',
      props.icon ? '' : 'px-4 py-3',
      variantClass,
    ]"
    :disabled="props.disabled"
  >
    <BaseSvg v-if="props.preIcon" :name="props.preIcon" :size="props.iconSize" />
    <BaseSvg v-if="props.icon" :name="props.icon" :size="props.iconSize" />
    <slot />
    <BaseSvg v-if="props.postIcon" :name="props.postIcon" :size="props.iconSize" />
  </button>
</template>
