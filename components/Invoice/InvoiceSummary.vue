<script setup lang="ts">
import type { VChart } from "#build/components";
import type { InvoiceModel } from "~/src/models/invoice.model";

const props = defineProps<{
  invoices: InvoiceModel[];
}>();

const chart = ref<InstanceType<typeof VChart> | null>(null);
const uiStateStore = useUIStateStore()
const invoiceStore = useInvoiceStore()

let chartData = useInvoiceChartDataAdapter(
  props.invoices,
  uiStateStore.getCurrencyCode
);

function getData(): ECOption {
  return {
    // update
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" }
    },
    legend: {
      data: ["Paid", "Unpaid"],
      right: 10,
      bottom: 10
    },
    xAxis: {
      type: "category",
      data: chartData.months,
      axisLabel: {
        color: "#333",
        fontSize: 12
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#333",
        fontSize: 12,
        formatter: "{value}"
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#ccc"
        }
      }
    },
    series: [
      {
        name: "Paid",
        type: "bar",
        data: chartData.paidData,
        barWidth: "30%",
        itemStyle: {
          color: "#4C6EF5"
        }
      },
      {
        name: "Unpaid",
        type: "bar",
        data: chartData.unpaidData,
        barWidth: "30%",
        itemStyle: {
          color: "#333"
        }
      }
    ]
  };
}
function hideToolbox() {
  chart.value?.setOption({ toolbox: { show: false } });
}
function showToolbox() {
  chart.value?.setOption({ toolbox: { show: true } });
}
const chartOptions = shallowRef(getData());

const invoiceOverview = ref(
  useInvoiceOverview(props.invoices, uiStateStore.getCurrencyCode)
);

watch(
  () => uiStateStore.getCurrencyCode,
  () => {
    chartData = useInvoiceChartDataAdapter(
      props.invoices,
      uiStateStore.getCurrencyCode
    );
    chartOptions.value = getData();
    chart.value?.setOption(chartOptions.value, {
      notMerge: true
    });
    invoiceOverview.value = useInvoiceOverview(props.invoices, uiStateStore.getCurrencyCode)
  }
);

watchEffect(
  () => {
    chartData = useInvoiceChartDataAdapter(
      props.invoices,
      uiStateStore.getCurrencyCode
    );
    chartOptions.value = getData();
    chart.value?.setOption(chartOptions.value, {
      notMerge: true
    });
    invoiceOverview.value = useInvoiceOverview(props.invoices, uiStateStore.getCurrencyCode)
  }
);

const { formatCurrency } = useCurrencyFormatter();

</script>

<template>
  <div class="border border-gray-300 rounded p-4 mt-4">
    <h2 class="font-semibold text-lg md:text-xl">Monthly Invoice Overview</h2>
    <!-- <ChartBar ref="chart" :options="chartOptions" :update-opotion=""></ChartBar> -->
    <VChart
      ref="chart"
      class="h-[300px]"
      :option="chartOptions"
      @native:mouseenter="showToolbox()"
      @globalout="hideToolbox()"
    />
    <!-- <div class="h-32 md:h-40 bg-gray-100 my-4 rounded"></div> -->
    <div class="flex flex-col md:flex-row justify-between text-sm">
      <span
        >Total invoiced:
        <span
          v-if="invoiceOverview?.totalValue"
          class="text-green-600 font-semibold"
          >{{
            formatCurrency(
              invoiceOverview.totalValue,
              uiStateStore.currentCurrency
            )
          }}</span
        ></span
      >
      <div class="mt-2 md:mt-0">
        <span
          v-if="invoiceOverview?.paidAmount"
          class="text-green-500 font-semibold"
          >Paid
          {{
            formatCurrency(
              invoiceOverview.paidAmount,
              uiStateStore.currentCurrency
            )
          }}</span
        >
        <span
          v-if="invoiceOverview?.unpaidAmount"
          class="text-red-500 font-semibold ml-4"
          >Unpaid
          {{
            formatCurrency(
              invoiceOverview.unpaidAmount,
              uiStateStore.currentCurrency
            )
          }}</span
        >
      </div>
    </div>
  </div>
</template>
