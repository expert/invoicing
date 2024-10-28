<template>
  <div>
    <div v-for="invoice of invoices.invoiceList">

      <input type="checkbox">
      {{ invoice.id }} {{ invoice.dueDate }} - {{ invoice.toName }} + {{  invoice.total }}
    </div>
  
    
  </div>
</template>
<script lang="ts" setup>
  const invoices = useInvoiceStore()
</script>