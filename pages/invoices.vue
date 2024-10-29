<template>
  <div>
    <InvoiceDashboard :invoices="invoices.getBills" invoice-type="bill" />
  </div>
</template>

<script lang="ts" setup>
const invoices = useInvoiceStore()
</script>
