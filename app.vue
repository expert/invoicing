<template>
  <div>
    <AppHeader />
    <AppSidebar />
    <NuxtPage />
  </div>
</template>
<script setup>
const store = useInvoiceStore()
// we could also extract the data, but it's already present in the store
await useAsyncData('invoice', () => store.fetchInvoices())
</script>