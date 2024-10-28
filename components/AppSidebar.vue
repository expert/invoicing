<template>
  <aside 
    class="bg-primary-light alg:top-10 fixed left-0 top-0 z-30 h-full transition-all w-a0px lg:w-[222px]"
    :class="{
      'hidden': !isSidebarOpened
    }"
  >
    <div class="lg:pb-50 h-full overflow-y-auto pb-12 pt-6">
    <NuxtLink to="/" class="flex items-center  no-underline p-4">
      <img
        src="@/assets/images/logo.svg"
        alt="Invoice Manger"
      class="h-9 w-9 mr-1"
      />
      <span class="font-bold text-lg no-underline text-black">InvoiceManager</span>
    </NuxtLink>
    <AppNav />

    </div>
  </aside>
</template>
<script lang="ts" setup>
const stateStore = useUIStateStore()
const isSidebarOpened = computed(() => stateStore.getSidebarState)
</script>