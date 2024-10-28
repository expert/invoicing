<template>
  <div>
    <AppHeader />
    <AppSidebar />
    <main class="w-calc[(100%-0px)] lg:w-[calc(100%-222px)] overflow-x-hidden relative ml-auto min-h-screen py-16 transition-all">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
import '@/assets/styles/main.css'

const store = useInvoiceStore()
// we could also extract the data, but it's already present in the store
await useAsyncData('invoice', () => store.fetchInvoices())
</script>