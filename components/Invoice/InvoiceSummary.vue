<script setup lang="ts">
import type { InvoiceModel } from '~/src/models/invoice.model';

const props = defineProps<{
  invoices: InvoiceModel[]
}>()

const chartData = useInvoiceDatasetAdapter()
</script>

<template>
  <div class="border border-gray-300 rounded p-4 mt-4">
    <h2 class="font-semibold text-lg md:text-xl">Monthly Invoice Overview</h2>
    <ChartBar :data="chartData" ></ChartBar>
    <div class="h-32 md:h-40 bg-gray-100 my-4 rounded"></div>
    <div class="flex flex-col md:flex-row justify-between text-sm">
      <span>Total invoiced: <span class="text-green-600 font-semibold">€ 8,849.74</span></span>
      <div class="mt-2 md:mt-0">
        <span class="text-green-500 font-semibold">Paid € 324.27</span>
        <span class="text-red-500 font-semibold ml-4">Unpaid € 5,525.47</span>
      </div>
    </div>
  </div>
</template>