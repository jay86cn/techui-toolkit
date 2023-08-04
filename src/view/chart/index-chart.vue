<script setup>
import { markRaw } from 'vue';
import echartBar from "./components/echart-bar.vue"
import echartLine from "./components/echart-line.vue"
import echarPie from "./components/echart-pie.vue"
import echartBarHoriz from "./components/echart-barHoriz.vue"

const charts=[echartBar,echartLine,echarPie,echartBarHoriz];
const state=reactive({
  panelGyroConfig:{
    coeff:.1,
    shadowCoeff:.2,
    perspective:300,
    thicknessColor:$c.gyl4,
    showShadow:true,
    shadowTransparent:.2,
  },
  toogleButtonConfig:{
    desc:"3D Model",
  },
})



onMounted(() => {
    
})

</script>

<template>
  <div  class="chart-wrap">
    <template v-for="(item,index) in charts">
      <panelGyro :config="state.panelGyroConfig" :index="index">
        <template #default="parmas">
          <div :class="`chart-item ${parmas.boxShadowItem}`">
            <component :is='item'></component>
          </div>
        </template>
      </panelGyro>
    </template>
    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>
  </div>
</template>


<style lang="less">
.chart-wrap{ .bgc(@gyl1); padding:1px 0 0 0;
  .chart-item{height: 200px;.bd(@gyl3); margin:20px; .bdr(5px); .bgc(@wh); }
}
</style>
