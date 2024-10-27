<template>
  <div class="max-w-xl mx-auto">
    <!-- Table Header -->
    <div class="grid grid-cols-5 gap-1 p-4 bg-gray-800 text-white rounded-t-md">
      <span class="col-span-2">Description of Goods and Services</span>
      <span>Quantity</span>
      <span>Price / unit</span>
      <span>VAT</span>
      <span>Amount</span>
    </div>

    <!-- Service Rows -->
    <div v-for="(service, index) in services" :key="index" class="grid grid-cols-5 gap-1 p-2 items-center border border-gray-300 rounded-md mb-2 relative">
      <!-- Description -->
      <input
        v-model="service.description"
        placeholder="Service or Goods"
        class="col-span-2 px-2 py-1 border rounded outline-none"
      />

      <!-- Quantity -->
      <input
        v-model.number="service.quantity"
        type="number"
        class="w-full px-2 py-1 text-center border rounded outline-none"
      />

      <!-- Price per unit -->
      <input
        v-model.number="service.price"
        type="number"
        class="w-full px-2 py-1 text-center border rounded outline-none"
      />

      <!-- VAT -->
      <select v-model="service.vat" class="w-full px-2 py-1 border rounded outline-none">
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>

      <!-- Amount (computed) -->
      <span class="w-full px-2 py-1 text-center">
        {{ calculateAmount(service) | currency }}
      </span>

      <!-- Remove item button -->
      <button @click="removeService(index)" class="absolute top-0 right-0 px-2 text-xl text-red-500">&times;</button>
    </div>

    <!-- Add Item Button -->
    <button @click="addService" class="flex items-center gap-1 text-blue-500 hover:text-blue-600 mt-2">
      <span class="text-lg">➕</span> Add Item
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

// Service Type
interface ServiceType {
  description: string;
  quantity: number;
  price: number;
  vat: number;
}

// Service List
const services = reactive<ServiceType[]>([
  { description: '', quantity: 1, price: 0, vat: 0 },
])

// Add a new service item
const addService = () => {
  services.push({ description: '', quantity: 1, price: 0, vat: 0 })
}

// Remove a service item
const removeService = (index: number) => {
  services.splice(index, 1)
}

// Calculate the amount for a service item
const calculateAmount = (service: ServiceType) => {
  const amount = service.quantity * service.price
  const vatMultiplier = 1 + service.vat / 100
  return amount * vatMultiplier
}

// Currency filter
const currency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

// const props = defineProps({
//   name: String,
//   modelValue: [String, Number],
//   required: Boolean,
//   options: {
//     type: Array,
//     required: true
//   }
// })

// const emit = defineEmits(['update:modelValue'])

// const updateValue = (value) => {
//   emit('update:modelValue', value)
// }
</script>
