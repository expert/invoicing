<template>
  <div class="modal">
    <div class="modal-content">
      <h1>Hello Invoice</h1>
      <h2>{{ invoiceId ? 'Edit Invoice' : 'Create Invoice' }}</h2>

      <!-- Form for invoice details -->
      <form @submit.prevent="saveInvoice">
        <input v-model="invoice.description" placeholder="Description" required />
        <input v-model="invoice.total" placeholder="Total" required />

        <!-- Other fields as necessary -->

        <button type="submit">{{ invoiceId ? 'Save' : 'Create' }}</button>
        <button type="button" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  invoiceId: {
    type: [String, Number],
    default: null
  }
})

const invoice = ref({
  description: '',
  total: 0
})

// If editing, fetch the invoice details
watchEffect(() => {
  if (props.invoiceId) {
    // Fetch the invoice details via store
    // invoice.value = await fetchInvoiceById(props.invoiceId)
  } else {
    // Reset the form for new invoice
    invoice.value = { description: '', total: 0 }
  }
})

const saveInvoice = () => {
  if (props.invoiceId) {
    // Call API to update the invoice
  } else {
    // Call API to create a new invoice
  }

  // Close modal after saving
  $emit('close')
}
</script>
