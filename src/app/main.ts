import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import '@/app/styles/main.css'

import App from './entrypoint/App.vue'
import router from './routes'

import en from '@/shared/locales/en.json'
import ru from '@/shared/locales/ru.json'

const messages = {
  en,
  ru,
}


const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
