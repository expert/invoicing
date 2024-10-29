<template>
  <div>
    <InvoiceDashboard :invoices="invoices.getPayments" invoice-type="payment" />
  </div>
</template>

<script lang="ts" setup>
const invoices = useInvoiceStore()
</script>
