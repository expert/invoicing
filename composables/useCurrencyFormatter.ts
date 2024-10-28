export function useCurrencyFormatter() {
  // Define the currency codes in the desired order
  const currencyCodes = ['MDL', 'USD', 'EUR', 'RON']

  // Function to format the value based on the currency index
  const formatCurrency = (value: number, currencyIndex: number): string => {
    // Ensure the index is valid
    if (currencyIndex < 0 || currencyIndex >= currencyCodes.length) {
      console.error('Invalid currency index:', currencyIndex)
      return value.toString()
    }

    // Get the currency code
    const currency = currencyCodes[currencyIndex]

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
