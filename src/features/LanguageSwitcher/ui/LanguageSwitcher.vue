<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BaseButton } from '@/shared/ui/BaseButton'

const { locale, t } = useI18n()
const currentLang = ref<'en' | 'ru'>('en')

onMounted(() => {
  const savedLang = localStorage.getItem('lang') as 'en' | 'ru' | null
  if (savedLang) {
    currentLang.value = savedLang
    locale.value = savedLang
  }
})

const nextLang = computed(() => (currentLang.value === 'en' ? 'ru' : 'en'))

const buttonText = computed(() => (nextLang.value === 'ru' ? 'Русский' : 'English'))

const switchLanguage = () => {
  const newLang = nextLang.value
  locale.value = newLang
  currentLang.value = newLang
  localStorage.setItem('lang', newLang)
}
</script>

<template>
  <div class="flex gap-1">
    <BaseButton
      class="max-h-10 min-w-28.5 border px-4.5 text-[14px]"
      preIcon="outline/language"
      iconSize="16"
      @click="switchLanguage"
    >
      {{ buttonText }}
    </BaseButton>
  </div>
</template>
