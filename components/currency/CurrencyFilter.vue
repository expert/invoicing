<template>
  <div class="flex flex-wrap gap-2 mt-2">
    <button v-for="currency in currencies" :key="currency" class="btn" :class="{ 'btn-primary': selectedCurrency === currency }" @click="selectCurrency(currency)">
      {{ currency }}
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const currencies = ['MDL', 'USD', 'EUR', 'RON']
const selectedCurrency = ref('EUR')

function selectCurrency(currency) {
  selectedCurrency.value = currency
}
</script>