<script setup>
  import home from "../home/index-home.vue"
  import apps from "../apps/index-apps.vue"
  import task from "../task/index-task.vue"
  import card from "../card/index-card.vue"
  import chart from "../chart/index-chart.vue"
  import about from "../about/index-about.vue"
  const active = ref(0);
  const tabChange=(val)=>{
    // console.log("tabChange",active.value,val);
  }
  const state=reactive({
    adaptivePanelConfig:{
      mode:"scroll",
      width:420,
    },
    tabBarData:[
      {label:"Home",icon:"home-o",dot:true},
      {label:"Card",icon:"coupon-o"},
      {label:"Apps",icon:"apps-o"},
      {label:"Task",icon:"label-o",badge:5},
      {label:"Chart",icon:"bar-chart-o"},
      {label:"About",icon:"more-o"},
    ]
  })
</script>

<template>
  <adaptivePanel :config="state.adaptivePanelConfig">
    <div class="layout-wrap">
      <div class="content-wrap">
        <home v-if="active==0"></home>
        <card v-if="active==1"></card>
        <apps v-if="active==2"></apps>
        <task v-if="active==3"></task>
        <chart v-if="active==4"></chart>
        <about v-if="active==5"></about>
      </div>
      <div class="tabbar-wrap">
        <van-tabbar v-model="active" @change="tabChange">
          <van-tabbar-item v-for="(item,index) in state.tabBarData" :icon="item.icon" :badge="item.badge" :dot="item.dot">{{item.label}}</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
  </adaptivePanel>
</template>

<style lang="less">
.layout-wrap {.pof; .fullbox; font-size: 24px;
  .content-wrap{.pof; .fullbox; bottom:50px; 
    >div{ overflow-x: hidden; overflow-y: auto; .poa; .fullbox;}
  }
  .tabbar-wrap{.pof; bottom:0; left:0; right:0; height:50px;}
}
</style>
