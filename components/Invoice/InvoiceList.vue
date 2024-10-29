<template>
   <!-- Invoice List Section -->
   <div class="border rounded-md overflow-hidden shadow">
    <!-- Invoice List Header -->
    <div class="grid grid-cols-[100px_1fr_1fr_1fr_1fr_100px] bg-gray-200 p-3 font-semibold">
      <span>Invoice #</span>
      <span>Due Date</span>
      <span>Client</span>
      <span>Payment Date</span>
      <span>Invoice Value</span>
      <span>Status</span>
    </div>

    <!-- Invoice Items -->
    <div
      v-for="invoice in invoices"
      :key="invoice.id"
      class="grid grid-cols-[100px_1fr_1fr_1fr_1fr_100px] items-center p-3 border-b"
    >
      <span class="flex">
        <input type="checkbox" class="form-checkbox" />
        {{  invoice.id }}
      </span>
      <span>{{ formatDate(`${invoice.dueDate}`) }}</span>
      <span>{{ invoice.fromName }}</span>
      <span>{{ formatDate(`${invoice.paidAt}`) || '-' }}</span>
      <span> {{  formatCurrency(invoice.total, invoice.currency) }} </span>
      <span :class="invoice.isPaid ? 'text-green-500' : 'text-red-500'">
        {{  invoice.isPaid ? 'Paid' : 'Unpaid' }}
      </span>
    </div>
  </div>

  <!-- Pagination Section -->
  <div class="flex items-center justify-between mt-4">
    <button class="btn-icon"><i class="i-mdi-chevron-left"></i></button>
    <span>1 / page</span>
    <button class="btn-icon"><i class="i-mdi-chevron-right"></i></button>
  </div>
</template>


<script lang="ts" setup>

const { formatDate } = useSimpleDateFormatter()

const { formatCurrency } = useCurrencyFormatter()
import type { InvoiceModel } from '~/src/models/invoice.model';

const props = defineProps<{
  invoices: InvoiceModel[]
}>()

const invoices = computed(() => props.invoices)
</script>
