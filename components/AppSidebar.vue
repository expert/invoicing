<template>
  <aside
    class="bg-primary-light hidden md:block alg:top-10 fixed left-0 top-0 z-30 h-full transition-all w-a0px lg:w-[222px] [&.opened]:block pt-6"
    :class="{
      // hidden: !isSidebarOpened,
      opened: isSidebarOpened,
    }"
  >
    <div class="lg:pb-50 h-full overflow-y-auto pb-12 pt-6">
      <NuxtLink to="/" class="flex items-center no-underline p-4">
        <img
          src="@/assets/images/logo.svg"
          alt="Invoice Manger"
          class="h-9 w-9 mr-1"
        />
        <span class="font-bold text-lg no-underline text-black"
          >InvoiceManager</span
        >
      </NuxtLink>
      <AppNav />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const uiStateStore = useUIStateStore();
const isSidebarOpened = computed(() => uiStateStore.getSidebarState);

const breakpoints = useBreakpoints(breakpointsTailwind)

const smallerThanLg = breakpoints.smaller('lg') // only smaller than lg
if (smallerThanLg) {
  uiStateStore.closeSidebar()
}

</script>
