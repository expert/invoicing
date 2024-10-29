<template>
  <div>
    <InvoiceDashboard :invoices="invoices.getPayments" />
  </div>
</template>

<script lang="ts" setup>
const invoices = useInvoiceStore()
</script>
