<template>
  <section class="p-4 md:p-6">
    <header
      class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4"
    >
      <h1 class="text-2xl font-semibold">Invoices</h1>
      <button
        type="button"
        class="btn btn-outline-primary flex items-center gap-1"
        @click="createInvoice"
      >
        <span class="i-mdi-plus-circle-outline"></span> Create Invoice
      </button>
    </header>

    <CurrencyFilter />
    <InvoiceSummary :invoices="invoices" />
    <InvoiceFilters />

    <div class="border border-gray-300 rounded p-4 mt-4 overflow-x-auto">
      <InvoiceActions />
      <InvoiceList :invoices="invoices" />
    </div>

    <!-- Modal Component -->
    <InvoiceModal
      v-if="showModal"
      @close="closeModal"
    />
  </section>
</template>

<script lang="ts" setup>
import type { InvoiceModel } from '~/src/models/invoice.model';
const props = defineProps<{
  invoices: InvoiceModel[]
}>()


const showModal = ref(false);
const currentInvoiceId: Ref<number | null> = ref(null);

const createInvoice = () => {
  showModal.value = true;
};

const editInvoice = (id: number) => {
  showModal.value = true;
  currentInvoiceId.value = id;
};

// Close the modal
const closeModal = () => {
  showModal.value = false;
};
</script>
