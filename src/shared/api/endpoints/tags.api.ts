import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'

export const getQuoteTags = async () => {
  try {
    return await httpClient('tags', {
      baseUrl: quotesConfig.BASE_URL,
    })
  } catch (error) {
    console.error('Ошибка получения тегов:', error)
    throw error
  }
}
