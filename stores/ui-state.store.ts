export const useUIStateStore = defineStore('uiState', {
  state: () => {
    return {
      isSidebarOpened: true
    }
  },
  actions: {
    toggleSidebar(): void {
      console.log('toggleSidebar', this.$state.isSidebarOpened)
      this.$state.isSidebarOpened = !this.$state.isSidebarOpened
    },
    closeSidebar(): void {
      this.$state.isSidebarOpened = false
    }
  },
  getters: {
    getSidebarState(): boolean {
      return this.isSidebarOpened
    },
  }
})