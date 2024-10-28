<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-4">
    <select class="form-select" v-model="currencyType">
      <option value="" disabled selected>By Currency Type</option>
    </select>
    <input class="form-input" placeholder="By Client" v-model="clientName" />
    <input type="date" class="form-input" placeholder="By Creation Period" v-model="creationPeriod" />
    <select class="form-select" v-model="paymentStatus">
      <option value="" disabled selected>By Payment Status</option>
    </select>
    <select class="form-select" v-model="tags">
      <option value="" disabled selected>By Tags</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currencyType = ref('')
const clientName = ref('')
const creationPeriod = ref('')
const paymentStatus = ref('')
const tags = ref('')
</script>