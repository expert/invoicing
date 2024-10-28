<template>
  <div class="flex flex-wrap gap-2 mt-2">
    <button
      v-for="currency in currencies"
      :key="currency"
      class="btn"
      :class="{ 'btn-primary': selectedCurrency === currency }"
      @click="selectCurrency(currency)"
    >
      {{ currency }}
    </button>
  </div>
</template>
<script lang="ts" setup>
const uiStore = useUIStateStore()
const currencies = computed(() => uiStore.currencies);

const selectedCurrency = ref(uiStore.currencies[uiStore.currentCurrency]);

const selectCurrency = function(currency: string ) {
  selectedCurrency.value = currency;
  uiStore.setCurrency(currencies.value.indexOf(currency))
}
</script>
