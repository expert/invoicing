<template>
  <div>
    <AppError></AppError>
    <AppHeader />
    <AppSidebar />
    <main class="w-calc[(100%-0px)] lg:w-[calc(100%-222px)] overflow-x-hidden relative ml-auto min-h-screen py-16 transition-all">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
import '@unocss/reset/tailwind-compat.css'
import '@/assets/styles/main.css'

const store = useInvoiceStore()
await useAsyncData('invoice', () => store.fetchInvoices())
</script>