<script setup>
import bannerSmall02 from "@/assets/images/banner-small02.png"
const state=reactive({
  
  colorsN:["eb4747","f77d3d","f9ad42","e4e477","cdde72","a8df71","80e180","45e092","24e2af","18e0c6","32dad3","00d5ec","00a9ed","0078e0","1956ef","5d60eb","866ef6","f865c2","eb4771","f02c4c"],
  colorsL:["ff7c57","ffad55","ffdd66","e3e376","e3ff8e","b9ff98","86ffa7","5affc1","4cffdd","52fff4","69ffff","43d8ff","41a9ff","6193ff","5687ff","7577f6","a794ff","fb8ed3","ff7a9c","ff738a"],
  gridData:[
    {label: "Factory Leader",icon: "i carbon:user-simulation"},
     {label:"Office",icon:"i carbon:application-web"},
     {label: "Enterprise Management", icon: "i carbon:certificate"},
     {label: "Financial Management", icon: "i carbon:currency"},
     {label: "Audit Office", icon: "i carbon:data-table"},
     {label: "Human Resources", icon: "i carbon:events-alt"},
     {label: "Party Construction", icon: "i carbon:user-multiple"},
     {label:"Disciplinary Inspection",icon:"i carbon:carbon-for-ibm-product"},
     {label: "Standard Management", icon: "i carbon:carbon-ui-builder"},
     {label: "Group Work Office",icon: "i carbon:category"},
     {label: "Security Office", icon: "i carbon:security"},
     {label: "Manufacturing Office", icon: "i carbon:ibm-watson-knowledge-studio"},
     {label:"Quality Management",icon:"i carbon:ibm-z-cloud-mod-stack"},
     {label: "Logistics sub-center", icon: "i carbon:ibm-tenet"},
     {label: "Administration Office", icon: "i carbon:ibm-cloud-pak-business-automation"},
     {label: "Product leaves",icon: "i carbon:data-format"},
     {label: "Information Center",icon: "i carbon:data-base-alt"},
     {label: "Supplies Department",icon: "i carbon:block-storage"},
     {label:"Procurement Management",icon:"i carbon:container-software"},
     {label: "Trade Union Investment", icon: "i carbon:study-unread"},
     
  ],
  
  panelGyroImgConfig:{
    coeff:.3,
    shadowCoeff:.3,
    perspective:300,
    thicknessColor:$c.bll7,
    showShadow:true,
    shadowTransparent:.5,
  },
  toogleButtonConfig:{
    desc:"3D Model",
    // style:"round"
  },
})

const panelGyroGridConfig=(item,index)=>{
  return {
    debug:false,
    thicknessColor:$c.darken("#"+state.colorsN[index],.8),
    coeff:.3,
    shadowCoeff:.25,
    shadowTransparent:.4,
    thicknessCoeff:.07
  }
}

onMounted(()=>{})

</script>

<template>
  <div class="department-wrap">
    <div class="img-wrap">
      <panelGyro :config="state.panelGyroImgConfig">
        <template #default="parmas">
          <img :class="`img-3d ${parmas.boxShadowItem}`" :src="bannerSmall02" />
        </template>
      </panelGyro>
    </div>

    <van-grid class="icon-grid" :border="false">
      <van-grid-item v-for="(item,index) in state.gridData" :key="item">
        <panelGyro :config="panelGyroGridConfig(item,index)" :index="index">
          <template #default="parmas">
            <div class="grid-item-box">
              <i :class="`grid-icon ${item.icon} ${parmas.boxShadowItem}`" :style="`--bgColor:#${state.colorsN[index]};--bgColorLi:#${state.colorsL[index]}`"></i>
              <span :class="`text ${parmas.textShadowItem}`">{{item.label}}</span>
            </div>
          </template>
        </panelGyro>
      </van-grid-item>
    </van-grid>
    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>

    
  </div>
  
</template>


<style lang="less">
.department-wrap{.por; padding:130px 0 0 0;
  .img-wrap{.poa; top:0; left:0; right:0; width: 80%; height:100px; margin:20px auto 40px auto;
    img{width: 100%; height: 100%; .bdr(10px);}
  }
  .icon-grid{margin:10px 0 0 0;
    .van-grid-item__content{padding:10px; .bgc(@tr);}
    .grid-item-box{ text-align: center;
      .grid-icon{width:50px; height:50px; display:inline-block; margin:0 auto; text-align: center; line-height: 50px; font-size: 34px; color:#fff; position: relative;border-radius:8px;
        &:before{z-index: 10; position: relative;}
        &:after{ /*background-color:#7bee8a ; background-color:var(--bgColor);background: linear-gradient(#0074c2, #4da9ff);  */ background: linear-gradient(var(--bgColor), var(--bgColorLi));opacity: 1; content:" "; position: absolute; left:0; right:0; top:0; bottom:0; border-radius:8px; z-index: 9;}
      }
      .text{ padding:5px 0; font-size: 12px;line-height: 14px; max-height: 32px; display:block; }
    }
  }
  
}
</style>
