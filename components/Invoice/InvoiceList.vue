<template>
  <div>
    <h3 v-for="invoice of invoices.invoiceList"> {{ invoice.description }} - {{ invoice.total }} + {{  invoice.vat }}</h3>
  </div>
</template>
<script lang="ts" setup>
  const invoices = useInvoiceStore()
  console.log('hello inv', invoices)

</script>