<template>
   <!-- Invoice List Section -->
   <div class="border rounded-md overflow-hidden shadow">
    <!-- Invoice List Header -->
    <div class="grid grid-cols-[50px_1fr_1fr_1fr_1fr_100px] bg-gray-200 p-3 font-semibold">
      <span>#</span>
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
      class="grid grid-cols-[50px_1fr_1fr_1fr_1fr_100px] items-center p-3 border-b"
    >
      <input type="checkbox" class="form-checkbox" />
      <span>{{ invoice.dueDate }}</span>
      <span>{{ invoice.client }}</span>
      <span>{{ invoice.paymentDate || '-' }}</span>
      <span>{{ invoice.value }} {{ invoice.currency }}</span>
      <span :class="invoice.status === 'Paid' ? 'text-green-500' : 'text-red-500'">
        {{ invoice.status }}
      </span>
    </div>
  </div>

  <!-- Pagination Section -->
  <!-- <div class="flex items-center justify-between mt-4">
    <button class="btn-icon"><i class="i-mdi-chevron-left"></i></button>
    <span>1 / page</span>
    <button class="btn-icon"><i class="i-mdi-chevron-right"></i></button>
  </div> -->
</template>


<script lang="ts" setup>
const invoices = [
  { id: 1, dueDate: '2024-10-31', client: 'My Company', paymentDate: '2024-10-23', value: '€ 332', isPaid: true },
  { id: 2, dueDate: '2024-10-31', client: 'Another Company', paymentDate: null, value: '€ 8888', isPaid: false },
  // Add more invoices as needed
]
</script>
