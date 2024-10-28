// useCurrencyConverter.ts
export function useCurrencyConverter() {
  const exchangeRates = {
    MDL: 1,         // base currency
    USD: 0.056,     // HARDCODED exchange rate: 1 MDL = 0.056 USD
    EUR: 0.048,     // HARDCODED exchange rate: 1 MDL = 0.048 EUR
    RON: 0.24       // HARDCODED exchange rate: 1 MDL = 0.24 RON
  };

  // const currencyCodes = ['MDL', 'USD', 'EUR', 'RON'];


  const uiStore = useUIStateStore()
  const currencyCodes = computed(() => uiStore.currencies);

  // Helper function to convert any currency to MDL
  const toMDL = (amount: number, currencyIndex: number) => {
    const fromCurrency = currencyCodes.value[currencyIndex];
    return amount / exchangeRates[fromCurrency as keyof typeof exchangeRates];
  };

  // Main conversion function
  const convertCurrency = (amount: number, currencyIndex: number, targetCurrency: 'MDL' | 'USD' | 'EUR' | 'RON') => {
    const amountInMDL = toMDL(amount, currencyIndex);
    return amountInMDL * exchangeRates[targetCurrency];
  };

  // Predefined converters for convenience
  const convertToUSD = (amount: number, currencyIndex: number) => convertCurrency(amount, currencyIndex, 'USD');
  const convertToEUR = (amount: number, currencyIndex: number) => convertCurrency(amount, currencyIndex, 'EUR');
  const convertToRON = (amount: number, currencyIndex: number) => convertCurrency(amount, currencyIndex, 'RON');

  return {
    convertCurrency,
    convertToUSD,
    convertToEUR,
    convertToRON
  };
}
