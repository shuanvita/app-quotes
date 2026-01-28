<script setup lang="ts">
import type { BaseButtonProps } from '@/shared/ui/BaseButton/BaseButton.types.ts'
import { BaseSvg } from '@/shared/ui/BaseSvg'

const props = defineProps<BaseButtonProps>()

const variants = {
  default: 'bg-green-400 text-gray-900 hover:bg-green-600',
  primary: 'bg-primary text-body-text hover:bg-purple-700',
}
</script>

<template>
  <button
    :class="[
      'flex items-center justify-center gap-2 rounded-md duration-200',
      props.icon ? 'p-2' : 'px-4 py-3',
      props.disabled
        ? 'cursor-not-allowed bg-slate-700 text-slate-500'
        : `${variants[props.variant as keyof typeof variants]} cursor-pointer`,
    ]"
    :disabled="props.disabled"
  >
    <BaseSvg v-if="props.preIcon" :name="props.preIcon" :size="props.iconSize" />
    <BaseSvg v-if="props.icon" :name="props.icon" :size="props.iconSize" />
    <slot />
    <BaseSvg v-if="props.postIcon" :name="props.postIcon" :size="props.iconSize" />
  </button>
</template>
