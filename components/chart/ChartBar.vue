<script setup lang="ts">
import type { VChart } from '#components'
const chart = ref<InstanceType<typeof VChart> | null>(null)

const props = defineProps<{
  data: ECOption
}>()


function getData(): ECOption {
  return {
    animation: false,
    tooltip: {
      className: 'echarts-tooltip',
    },
    toolbox: {
      show: false,
      feature: {
        dataZoom: {},
        saveAsImage: {},
      },
    },
    dataset: props.data.dataset,
    // dataset: {
    //   dimensions: ['Product', 'Unpaid', 'Paid', '2017'],
    //   source: [
    //     {
    //       Product: 'Matcha Latte',
    //       2015: random(),
    //       2016: random(),
    //       2017: random(),
    //     },
    //     {
    //       Product: 'Milk Tea',
    //       2015: random(),
    //       2016: random(),
    //       2017: random(),
    //     },
    //     {
    //       Product: 'Cheese Cocoa',
    //       2015: random(),
    //       2016: random(),
    //       2017: random(),
    //     },
    //     {
    //       Product: 'Walnut Brownie',
    //       2015: random(),
    //       2016: random(),
    //       2019: random(),
    //     },
    //   ],
    // },
    xAxis: { type: 'category' },
    yAxis: {},
    itemStyle: { borderRadius: 3 },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  }
}

const option = shallowRef(getData())
function refreshData() {
  option.value = getData()
}

function hideToolbox() {
  chart.value?.setOption({ toolbox: { show: false } })
}
function showToolbox() {
  chart.value?.setOption({ toolbox: { show: true } })
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