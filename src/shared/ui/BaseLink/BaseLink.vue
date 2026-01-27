<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BaseLinkProps } from '@/shared/ui/BaseLink/BaseLink.types.ts'
import { computed } from 'vue'
import { BaseSvg } from '@/shared/ui/BaseSvg'

const props = defineProps<BaseLinkProps>()

const isExternal = computed(() => !!props.href)
</script>

<template>
  <a v-if="isExternal" :href="props.href" :target="props.target || '_blank'" v-bind="$attrs">
    <BaseSvg v-if="props.preIcon" :name="props.preIcon" :size="props.iconSize" />
    <span>
      <slot />
    </span>
    <BaseSvg v-if="props.postIcon" :name="props.postIcon" :size="props.iconSize" />
  </a>
  <RouterLink v-if="!isExternal && props.to" :to="props.to" v-bind="$attrs">
    <BaseSvg v-if="props.preIcon" :name="props.preIcon" :size="props.iconSize" />
    <span>
      <slot />
    </span>
    <BaseSvg v-if="props.postIcon" :name="props.postIcon" :size="props.iconSize" />
  </RouterLink>
</template>
