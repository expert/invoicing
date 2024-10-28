<template>
  <div>
    <InvoiceDashboard :invoices="invoices.invoiceList" />
    <!-- Button to create a new invoice -->
    <button @click="createInvoice">Create</button>

    <!-- Edit button for invoice -->
    <button @click="editInvoice(33)"">Edit</button>

    <!-- Modal Component -->
    <InvoiceModal v-if="showModal" :invoiceId="currentInvoiceId" @close="closeModal" />
  </div>
</template>

<script lang="ts" setup>
import type {  Ref } from 'vue'
// To track if modal should be open
const invoices = useInvoiceStore()
const showModal = ref(false)
const currentInvoiceId: Ref<number | null> = ref(null)

const createInvoice = () => {
    showModal.value = true
}

const editInvoice = (id: number ) => {
    showModal.value = true
    currentInvoiceId.value = id
}

// Close the modal
const closeModal = () => {
  showModal.value = false
}
</script>
