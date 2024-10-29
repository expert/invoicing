<template>
  <div class="p-4 md:p-6">
    <div class="flex justify-between items-center">
      <h1>Dashboard</h1>
      <CurrencyFilter :show-title="false"></CurrencyFilter>
    </div>
    <h2 class="mt-5">General overview</h2>
    <div class="grid md:grid-cols-2 gap-4">
     <InvoiceOverview 
        v-if="billsOverview"
        title="Total invoiced"
        :total-value="billsOverview.totalValue"
        :paid-amount="billsOverview.paidAmount"
        :unpaid-amount="billsOverview.unpaidAmount"
        :unpaid-percentage="billsOverview.unpaidPercentage"
        :average-payment-date="billsOverview.averagePaymentDate"
        :is-trending-down="billsOverview.isTrendingDown"
        :currency="uiStateStore.currentCurrency"
      ></InvoiceOverview> 
      
     <InvoiceOverview 
        v-if="paymentsOverview"
        title="Total payments"
        :total-value="paymentsOverview.totalValue"
        :paid-amount="paymentsOverview.paidAmount"
        :unpaid-amount="paymentsOverview.unpaidAmount"
        :unpaid-percentage="paymentsOverview.unpaidPercentage"
        :average-payment-date="paymentsOverview.averagePaymentDate"
        :is-trending-down="paymentsOverview.isTrendingDown"
        :currency="uiStateStore.currentCurrency"
      ></InvoiceOverview> 
    </div>
    <!-- <InvoiceList></InvoiceList>
    <NuxtWelcome /> -->
  </div>
</template>
<script lang="ts" setup>

const invoiceStore = useInvoiceStore()
const uiStateStore = useUIStateStore()

const billsOverview = ref(useInvoiceOverview(invoiceStore.getBills, uiStateStore.getCurrencyCode))
const paymentsOverview = ref(useInvoiceOverview(invoiceStore.getPayments, uiStateStore.getCurrencyCode))


// console.log('overviewInvoiced', billsOverview)
watch(() => uiStateStore.getCurrencyCode, () => {
  billsOverview.value = useInvoiceOverview(invoiceStore.getBills, uiStateStore.getCurrencyCode)
  paymentsOverview.value = useInvoiceOverview(invoiceStore.getPayments, uiStateStore.getCurrencyCode)
})
</script>