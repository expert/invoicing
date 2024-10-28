<script setup lang="ts">
import type { VChart } from "#components";
const chart = ref<InstanceType<typeof VChart> | null>(null);

const props = defineProps<{
  options: ECOption;
}>();

// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec"
// ];
// const paidData = [0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0]; // example data for paid invoices
// const unpaidData = [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0]; // example data for unpaid invoices

// function getData(): ECOption {
//   return {
//     tooltip: {
//       trigger: "axis",
//       axisPointer: { type: "shadow" }
//     },
//     legend: {
//       data: ["Paid", "Unpaid"],
//       right: 10,
//       bottom: 10
//     },
//     xAxis: {
//       type: "category",
//       data: months,
//       axisLabel: {
//         color: "#333",
//         fontSize: 12
//       }
//     },
//     yAxis: {
//       type: "value",
//       axisLabel: {
//         color: "#333",
//         fontSize: 12,
//         formatter: "{value}"
//       },
//       splitLine: {
//         lineStyle: {
//           type: "dashed",
//           color: "#ccc"
//         }
//       }
//     },
//     series: [
//       {
//         name: "Paid",
//         type: "bar",
//         data: paidData,
//         barWidth: "30%",
//         itemStyle: {
//           color: "#4C6EF5"
//         }
//       },
//       {
//         name: "Unpaid",
//         type: "bar",
//         data: unpaidData,
//         barWidth: "30%",
//         itemStyle: {
//           color: "#333"
//         }
//       }
//     ]
//   };
// }

const option = shallowRef(props.options);
// function refreshData() {
//   option.value = props.options;
// }

function hideToolbox() {
  chart.value?.setOption({ toolbox: { show: false } });
}
function showToolbox() {
  chart.value?.setOption({ toolbox: { show: true } });
}
</script>

<template>
  <VChart
    ref="chart"
    class="h-[300px]"
    :option="option"
    @native:mouseenter="showToolbox()"
    @globalout="hideToolbox()"
  />
</template>
