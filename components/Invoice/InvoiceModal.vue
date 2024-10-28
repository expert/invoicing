<template>
  <div v-if="showModal" class="modal">
    <div class="modal-bg fixed inset-0 bg-black-[0.2] z-10" @click="closeModal"></div>
    <div class="modal-content absolute inset-72 z-20 bg-white rounded-md border-gray-300">
      <button @click="closeModal">Close</button>
      <h1>Hello Invoice</h1>
      <h2>{{ invoiceId ? 'Edit Invoice' : 'Create Invoice' }}</h2>
      <Form :fields="fields" @submit="handleSubmit" />
      <!-- Form for invoice details -->
      <!-- <form @submit.prevent="saveInvoice">
        <input v-model="invoice.details" placeholder="Description" required />
        <input v-model="invoice.total" placeholder="Total" required />

        <!-- Other fields as necessary -->

        <!-- <button type="submit">{{ invoiceId ? 'Save' : 'Create' }}</button>
        <button type="button" @click="$emit('close')">Cancel</button>
      </form> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { InvoiceModel, ServiceType } from '~/src/models/invoice.model';

type FieldType = {
  label: string,
  groupTitle?: string,
  component: 'input' | 'select' | 'services',
  required: boolean,
  value: string | number | ServiceType[],
  options?: string[],
  name: keyof InvoiceModel,  // linked to the InvoiceModel
}


const props = defineProps({
  invoiceId: {
    type: [String, Number],
    default: null
  }
})
const invoice = ref({
  id: 1,
  logo: '',
  po: '',
  currency: 'USD',
  issueDate: `${new Date()}`,
  dueDate: `${new Date()}`,
  tags: '',
  fromName: 'Company A',
  fromEmail: 'email@example.com',
  toName: 'Client A',
  toEmail: 'client@example.com',
  services: [],
  details: 'Some details',
  discount: 5,
  total: 1000,
  category: 'bill',
  isPaid: false,
  createdAt: `${new Date()}`,
  createdBy: `${new Date()}`,
  updatedAt: `${new Date()}`,
})

const showModal = ref(true)

// Define fields for the form
const fields: Ref<FieldType[]> = ref([
  { label: 'ID', component: 'input', required: true, value: invoice.value.id, name: 'id' },
  { label: '', groupTitle: 'Currency',  component: 'select', required: true, value: invoice.value.currency, name: 'currency', options: ['MDL', 'USD', 'EUR', 'RON'] },
  { label: 'Issue Date*', component: 'input', required: true, value: invoice.value.issueDate, name: 'issueDate' },
  { label: 'Due Date*', component: 'input', required: true, value: invoice.value.dueDate, name: 'dueDate' },
  { label: 'PO Number', component: 'input', required: true, value: invoice.value.po, name: 'po' },


  { label: 'Tags', component: 'input', required: true, value: invoice.value.tags, name: 'tags' },
  { label: 'Company Name', groupTitle: 'From', component: 'input', required: true, value: invoice.value.fromName, name: 'fromName' },
  { label: 'Email Address', component: 'input', required: true, value: invoice.value.fromEmail, name: 'fromEmail' },

  { label: 'Customer Name', groupTitle: 'To', component: 'input', required: true, value: invoice.value.toName, name: 'toName' },
  { label: 'Email Address', component: 'input', required: true, value: invoice.value.toEmail, name: 'toEmail' },


  { label: 'Services', component: 'services', required: true, value: invoice.value.services, name: 'services' },


  { label: 'Bank Details', component: 'input', required: true, value: invoice.value.details, name: 'details' },
  { label: 'Discount', component: 'input', required: true, value: invoice.value.discount, name: 'discount' },
  { label: 'Total', component: 'input', required: true, value: invoice.value.total, name: 'total' },



  { label: 'Category', component: 'select', required: true, value: invoice.value.category, name: 'category', options: ['bill', 'payment'] },
  // Add other fields dynamically as needed...
])

const handleSubmit = (formValues) => {
  console.log('Form submitted with values:', formValues)
  // Handle form submission, update invoice data, call API, etc.
}

const closeModal = () => {
  showModal.value = false
}


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
