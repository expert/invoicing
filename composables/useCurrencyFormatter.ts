export function useCurrencyFormatter() {
  // currency codes, order is important
  // const currencyCodes = ['MDL', 'USD', 'EUR', 'RON']

  const uiStore = useUIStateStore()
  const currencyCodes = computed(() => uiStore.currencies);

  // Function to format the value based on the currency index
  const formatCurrency = (value: number, currencyIndex: number): string => {
    // Ensure the index is valid
    if (currencyIndex < 0 || currencyIndex >= currencyCodes.value.length) {
      console.error('Invalid currency index:', currencyIndex)
      return value.toString()
    }

    // Get the currency code
    const currency = currencyCodes.value[currencyIndex]

    // Format the value using Intl.NumberFormat
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return {
    formatCurrency,
  }
}
