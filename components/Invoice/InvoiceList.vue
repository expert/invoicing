<template>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse mt-4">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="p-2">Invoice #</th>
          <th class="p-2">Due Date</th>
          <th class="p-2">Client</th>
          <th class="p-2">Payment Date</th>
          <th class="p-2">Invoice Value</th>
          <th class="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(invoice, index) in invoices" :key="invoice.id" :class="{ 'bg-gray-100': index % 2 === 0 }" class="border-b">
          <td class="p-2">{{ invoice.id }}</td>
          <td class="p-2">{{ invoice.dueDate }}</td>
          <td class="p-2">{{ invoice.client }}</td>
          <td class="p-2">{{ invoice.paymentDate || '-' }}</td>
          <td class="p-2">{{ invoice.value }}</td>
          <td class="p-2"><span :class="invoice.isPaid ? 'text-green-500' : 'text-red-500'">{{ invoice.isPaid ? 'Paid' : 'Unpaid' }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-col md:flex-row justify-between items-center mt-4">
    <div class="text-sm mb-2 md:mb-0">Showing 1–20 of 100</div>
    <select class="form-select w-24">
      <option>10 / page</option>
      <option selected>20 / page</option>
      <option>50 / page</option>
    </select>
  </div>
</template>


<script lang="ts" setup>
const invoices = [
  { id: 1, dueDate: '2024-10-31', client: 'My Company', paymentDate: '2024-10-23', value: '€ 332', isPaid: true },
  { id: 2, dueDate: '2024-10-31', client: 'Another Company', paymentDate: null, value: '€ 8888', isPaid: false },
  // Add more invoices as needed
]
</script>
