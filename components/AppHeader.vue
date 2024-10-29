<template>
  <header 
    class="w-full !lg:w-[calc(100%-222px)] transition-all alg:top-10 fixed right-0 top-0 z-50 flex items-center justify-between gap-2 bg-white px-6 py-3  lg:pt-12 shadow-[0_3px_2px_0_rgba(0,_0,_0,_0.10)] transition-all lg:sticky lg:z-20 lg:ml-auto lg:py-4"
    :class="{
      '!w-full': !isSidebarOpened
    }"
  >
    <button 
    class="i-ic-round-menu w-6 h-6 cursor-pointer"
    type="button" 
    @click="toggleSidebar()"
    ></button>
    <div class="flex">
      <span class="i-ic-baseline-workspace-premium text-primary-blue-3 block h-5 w-5 mr-1 text-primary-blue"></span>
      Top 100 Users
    </div>
  </header> 
</template>
<script lang="ts" setup>
const stateStore = useUIStateStore()
const toggleSidebar = () => {
  stateStore.toggleSidebar()
}
const isSidebarOpened = computed(() => stateStore.getSidebarState)

</script>