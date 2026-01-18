// widgets/QuoteWidget/model/useQuoteWidget.ts
import { useQuotes } from '@/features/quotes/lib/useRandomQuote'

export function useQuoteWidget() {
  const { quotes, loading, error, fetchQuotes } = useQuotes()

  // Виджет может перезагружать
  const refresh = () => fetchQuotes()

  return {
    quotes,
    loading,
    error,
    refresh,
  }
}
