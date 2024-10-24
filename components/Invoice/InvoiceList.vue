<template>
  <div>
    <h3 v-for="invoice of invoices.invoiceList"> {{ invoice.details }} - {{ invoice.total }} + {{  invoice.services }}</h3>
  </div>
</template>
<script lang="ts" setup>
  const invoices = useInvoiceStore()
</script>