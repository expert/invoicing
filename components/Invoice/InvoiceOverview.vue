<template>
  <div class="overview-card sp-6 p-4 rounded-lg shadow bg-white flex gap-6 items-center">
    <div class="flex-1">
      <p class="text-sm font-semibold text-gray-600">
        <span :class="trendIconClass"></span>
        {{ title }}
      </p>
      <p class="text-4xl font-bold text-gray-900 mt-2">{{ formatCurrency(totalValue,  currency) }}</p>
      <p class="text-sm text-gray-500 mt-1">
        Average Payment Date: <span class="text-blue-500">{{ averagePaymentDate }} days</span>
      </p>
    </div>
    <div class="w-px bg-gray-200 h-full"></div>
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1">
        <i class="i-ic-baseline-account-balance-wallet w-4.5 h-4.5 text-state-success block"></i>
        <p class="text-sm font-semibold text-gray-600">Paid</p>
      </div>
      <p class="text-lg font-bold text-gray-900">{{ formatCurrency(paidAmount, currency) }}</p>
    </div>
    <div class="flex-1 flex-wrap">
      <div class="flex items-center gap-2 mb-1">
        <i class="i-ic-baseline-account-balance-wallet w-4.5 h-4.5 text-state-warning block"></i>
        <p class="text-sm font-semibold text-gray-600">Not Paid ({{ unpaidPercentage.toFixed() }}%)</p>
      </div>
      <p class="text-lg font-bold text-gray-900">{{ formatCurrency(unpaidAmount, currency) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  totalValue: number;
  paidAmount: number;
  unpaidAmount: number;
  unpaidPercentage: number;
  averagePaymentDate: number;
  currency: number;
  isTrendingDown?: boolean;
}>();

const trendIconClass = computed(() => {
  return props.isTrendingDown ? 'icon-trend-down text-red-500' : 'icon-trend-up text-green-500';
});

const { formatCurrency } = useCurrencyFormatter()
</script>

<style scoped>
.overview-card {
  /* max-width: 400px; */
  display: flex;
}

</style>
