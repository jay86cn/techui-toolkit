<script setup>
const state=reactive({
  chartData:{
    legend:['income', 'expenses'],
    yAxis:['Type1', 'Type2', 'Type3', 'Type4', 'Type5'],
    colors:[$c.cbl4,$c.bll5,],
    data:[
      [320, 302, 341, 374, 390],
      [-120, -132, -101, -134, -190],
    ],
  },
  chartOption:{}
})


const processData=()=>{
  let {legend,colors,yAxis,data}=state.chartData,
      processedData=[];
  legend.forEach((item,i)=>{
    processedData.push({
      name: legend[i],
      type: 'bar',
      barWidth:10,
      stack: 'Total',
      label: {
        color:$c.wh,
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle:{
        color: $c.fade(colors[i],.9),
        borderRadius: 3
      },
      data: data[i]
    })
  })
  state.chartOption.legend.data=legend;
  state.chartOption.series=processedData;
  state.chartOption.yAxis.data=yAxis;
}

const processOption=()=>{
  state.chartOption={
    update:false,
    title:{ text:"Cost situation", left:5, top:5},
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      right: '5',
      top: '5',
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: '8%',
      top: "25%",
      containLabel: true
    },
    xAxis: { 
      
      type: 'value',
      axisLabel: {
        align: 'center',
        interval:0,
      }
    },
    yAxis: {
      splitNumber: 2,
      type: 'category',
      axisTick: {
        show: false
      },
      data: [],
      axisLabel: {
        formatter: '{value}',
        align: 'right'
      }
    }
  }
  processData();
}

onMounted(() => {
  processOption();
})
</script>
<template>
  <echartsInit :chartOption="state.chartOption"></echartsInit>
</template>
<style lang="less">
</style>
