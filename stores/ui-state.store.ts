export const useUIStateStore = defineStore('uiState', {
  state: () => {
    return {
      isSidebarOpened: true,
      currencies: ["MDL", "USD", "EUR", "RON"],
      currentCurrency: 0,
      isError: false
    }
  },
  actions: {
    toggleSidebar(): void {
      this.$state.isSidebarOpened = !this.$state.isSidebarOpened
    },
    closeSidebar(): void {
      this.$state.isSidebarOpened = false
    },
    setCurrency(currency: number): void {
      this.$state.currentCurrency = currency
    },
    setError(state: boolean): void {
      this.$state.isError = state
    }
  },
  getters: {
    getSidebarState(): boolean {
      return this.isSidebarOpened
    },
    getCurrencyCode(): 'MDL' | 'USD' | 'EUR' | 'RON' {
      return this.currencies[this.currentCurrency] as  'MDL' | 'USD' | 'EUR' | 'RON'
    },
  }
})