<script setup>
import panel3DMatrix from "./panel3DMatrix.vue"
import panel3DHive from "./panel3DHive.vue"
import panel3DUnity from "./panel3DUnity.vue"
import panel3DHover from "./panel3DHover.vue"
import panel3DHiveApart from "./panel3DHiveApart.vue"
 import withAlert from "@/components/widthAlert-pc.vue"
const state=reactive({
  activeName:"matrix",
  tabs:[
    {name:"Matrix",label:"matrix"},
    {name:"Hive",label:"hive"},
    {name:"Unity",label:"unity"},
    {name:"Hover",label:"hover"},
    {name:"HiveApart",label:"hiveApart"},
    {name:"MobileDemo",label:"mobile"},
  ]
})
const router=useRouter()
const handleClick=(item)=>{
  state.activeName=item.label;
  if(item.label=='mobile'){
    router.push("/layout");
  }
}

</script>
<template>
  <div class="panel3D-demo" >
    <withAlert></withAlert>
    <div class="tabs-wrap" >
      <div v-for="(item,index) in state.tabs" :class="`item ${item.label==state.activeName?'active':'deactive'}`"  @click="handleClick(item)">{{item.name}}</div>
    </div>
    <div class="tab-content">
      <panel3DToggle></panel3DToggle>
      <panel3DMatrix v-if="state.activeName=='matrix'"></panel3DMatrix>
      <panel3DHive v-if="state.activeName=='hive'"></panel3DHive>
      <panel3DUnity v-if="state.activeName=='unity'"></panel3DUnity>
      <panel3DHover v-if="state.activeName=='hover'"></panel3DHover>
      <panel3DHiveApart v-if="state.activeName=='hiveApart'"></panel3DHiveApart>
    </div>
   </div>
</template> 
<style lang="less">
  .panel3D-demo{
    .tabs-wrap {.poa; .fullbox; bottom:auto; padding:0 0 0 20px; .bgc(@bld1);
      .item{display:inline-block; margin:0 10px; cursor: pointer; line-height: 36px;.bdb(@tr);
        &.active{.fc(@bll5); .bdb(@bll6);}
      }
    }
    .tab-content{padding:20px;.poa;.fullbox; top:40px; .bgc(@bll9);z-index: 5;
      .panel3D-toggle-wrap{.poa; right:0; top:0; z-index: 9;}
    }
  }
  .view3d-state{.poa; left:20px; top:10px;
    .state{display:none; 
      &:before{content:" "; display:inline-block; .bdr(50%); height: 14px; width: 14px; .bgc(@wh);  vertical-align: middle; margin:0 10px 0 0;}
    }
    .desc{display:none; .fc(@cbl7); padding:10px 0 0 0;}
    &.on3D{
      .state-on{display:block;
        &:before{.bgc(@aql5);}
      }
    }
    &.off3D{
      .state-off{display:block;
        &:before{.bgc(@rel5);}
      }
      .desc{display:block;}
    }
    
  }
</style>