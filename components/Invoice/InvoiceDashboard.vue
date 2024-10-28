<template>
  <section class="p-4 md:p-6">
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
      <h1 class="text-2xl font-semibold">Invoices</h1>
      <NuxtLink to="/create-invoice" class="btn btn-outline-primary flex items-center gap-1">
        <span class="i-mdi-plus-circle-outline"></span> Create Invoice
      </NuxtLink>
    </header>

    <CurrencyFilter />
    <InvoiceSummary :invoices="invoices" />
    <InvoiceFilters />

    <div class="border border-gray-300 rounded p-4 mt-4 overflow-x-auto">
      <InvoiceActions />
      <InvoiceList :invoices="invoices" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { InvoiceModel } from '~/src/models/invoice.model';

const props = defineProps<{
  invoices: InvoiceModel[]
}>()

</script>