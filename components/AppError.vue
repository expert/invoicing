<template>
  <div v-if="invoiceStore.isError" class="fixed inset-0 bottom-auto height-[50px] z-100 p-5 text-white bg-red text-lg text-center">Something wrong. Server Erorr</div>
</template>
<script lang="ts" setup>
const invoiceStore = useInvoiceStore()

</script>