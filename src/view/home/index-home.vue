

<script setup>
  import banner01 from "@/assets/images/banner01.png"
  import banner02 from "@/assets/images/banner02.png"
  import banner03 from "@/assets/images/banner03.png"
  import banner04 from "@/assets/images/banner04.png"
  const swipeImages=[banner01,banner02,banner04,banner03]

  import bannerSmall01 from "@/assets/images/banner-small01.png"

  const state=reactive({
    gridData:[
       {label: "Button A", icon: "i carbon:load-balancer-pool"},
       {label: "Button B", icon: "i carbon:iot-connect"},
       {label: "Button C", icon: "i carbon:ibm-z-cloud-mod-stack"},
       {label: "Button D", icon: "i carbon:ibm-power-vs"},
     ],
     counter:[
       {label: "Productivity on the job", val: 142, unit: "xiang"},
       {label: "management reviews or diagnoses", val: 45, unit: "percent"},
     ],
     counter2:[
       {label: "management reviews or diagnoses", val:898425, unit: "wei"},
     ],
     circles:[
       {label: "Labor productivity", val: 72},
       {label: "management reviews or diagnoses", val:45},
     ],
     circles2:[
       {label: "Labor productivity", val: 72},
     ],
     percentBar: {
       title: "Production Plan Execution",
       titlePosition: "top",
       data:[
         {label: "current", val: 75, position: "top", style: "blue"}, //, hide: true
         {label:"target",val:50,position:"bottom",style:"aqua"},
         {label: "Challenge", val: 85, position: "bottom", style: "orange"},
       ]
     },
     listData:[
       {title:"Production plan execution rate",val:32,unit:"%"},
       {title: "Per capita physical labor productivity on the job", val:690, unit: "box/person"},
       {title: "Innovation and efficiency", val: 52, unit: "10,000 yuan"},
       {title:"Annual System Review Coverage",val:77,unit:"%"},
       {title: "Management innovation results are solidified into the number of system standards", val:1421, unit: "item"},
       {title: "Number of special management reviews or management diagnoses", val: 321, unit: "times"},
     ],
    panelGyroGridConfig:{
      debug:false,
      coeff:.2,
      thicknessColor:$c.bll6,
      shadowCoeff:.2,
      perspective:500,
      showShadow:true,
      shadowTransparent:.5,
    },
    panelGyroImgConfig:{
      debug:false,
      coeff:.2,
      thicknessColor:$c.cbl7,
      shadowCoeff:.2,
      perspective:500,
      showShadow:true,
      shadowTransparent:.5,
    },
    toogleButtonConfig:{
      desc:"3D Model",
      // style:"round"
    },
  })

  const buttonClick=(btn)=>{
    console.log("btn",btn);
  }
</script>

<template>
  <div class="dept-wrap">

    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(img,key) in swipeImages" :height="300" :key="key">
        <img :src="img" />
      </van-swipe-item>
    </van-swipe>

    
    <div class="chart-wrap">
      <van-grid class="counter-grid counter-single" :column-num="1" :border="false">
        <van-grid-item v-for="(item,index) in state.counter2" :key="index">
          <div class="counter-inner">
            <van-rolling-text :class="`rolling-text unit-${item.unit}`" :height="42" :target-num="item.val" />
            <div class="label">{{item.label}}</div>
          </div>
        </van-grid-item>
      </van-grid>

      <van-grid class="circle-grid" :column-num="2" :border="false">
        <van-grid-item v-for="(item,index) in state.circles" :key="index">
          <div class="counter-inner">
            <van-circle v-model:current-rate="item.val" layer-color="#eee" :stroke-width="120" :rate="item.val" :speed="1000" :text="item.val+'%'" />
            <div class="label">{{item.label}}</div>
          </div>
        </van-grid-item>
      </van-grid>



    </div>
    
    <van-grid class="icon-grid" :column-num="2" :border="false">
      <van-grid-item v-for="(item,index) in state.gridData" :key="index">
        <panelGyro :config="state.panelGyroGridConfig" :index="index">
          <template #default="parmas">
            <div class="grid-inner">
              <div :class="`${parmas.boxShadowItem} grid-item-box`" @click="buttonClick(item)">
                <i :class="`grid-icon ${item.icon}`" ></i>
                <span class="text">{{item.label}}</span>
              </div>
            </div>
          </template>
        </panelGyro>
      </van-grid-item>
    </van-grid>
    
    <div class="group-title">Focus on core indicators Top6</div>
    <div class="cell-wrap">
      <van-cell-group inset>
        <van-cell v-for="item in state.listData" :title="item.title" is-link :value="item.val+item.unit" />
      </van-cell-group>
    </div>

    <div class="ezb-wrap">
      <panelGyro :config="state.panelGyroImgConfig">
        <template #default="parmas">
          <img :class="`img-3d ${parmas.boxShadowItem}`" :src="bannerSmall01" alt="">
        </template>
      </panelGyro>
    </div>
    

    <div class="chart-wrap">
      

      <van-grid class="counter-grid" :column-num="2" :border="false">
        <van-grid-item v-for="(item,index) in state.counter" :key="index">
          <div class="counter-inner">
            <van-rolling-text :class="`rolling-text unit-${item.unit}`" :height="38" :target-num="item.val" />
            <div class="label">{{item.label}}</div>
          </div>
        </van-grid-item>
      </van-grid>
      

      <van-grid class="circle-grid circle-single" :column-num="1" :border="false">
        <van-grid-item v-for="(item,index) in state.circles2" :key="index">
          <div class="counter-inner">
            <van-circle v-model:current-rate="item.val" layer-color="#eee" size="220px" :stroke-width="80" :rate="item.val" :speed="1000" :text="item.val+'%'" />
            <div class="label">{{item.label}}</div>
          </div>
        </van-grid-item>
      </van-grid>



      <div class="multiple-percent-bar">
        <div :class="`title position-${state.percentBar.titlePosition}`">{{state.percentBar.title}}</div>
        <div class="bar-wrap">
          <div class="bar-bg">
            <div class="bar-val" :style="`width:${state.percentBar.data[0].val}%`"></div>
            <template v-for="(item,index) in state.percentBar.data">
              <div v-if="!item.hide" :class="`slide style-${item.style} position-${item.position}`" :style="`left:${item.val}%`">
                <div class="val">{{item.val}}%</div>
                <div class="label">{{item.label}}</div>
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>

    <panelGyro :config="state.panelGyroGridConfig">
      <template #default="parmas">
        <van-grid class="icon-grid" :column-num="2" :border="false">
          <van-grid-item v-for="(item,index) in state.gridData" :key="index">
            <div class="grid-inner">
              <div :class="`${parmas.boxShadowItem} grid-item-box`" @click="buttonClick(item)">
                <i :class="`grid-icon ${item.icon}`" ></i>
                <span class="text">{{item.label}}</span>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </template>
    </panelGyro>

    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>
    
  </div>
  
</template>


<style lang="less">
.dept-wrap{.bgc(@gyl1);
  .van-grid-item__content{.bgc(@tr);
    .panelGyro-wrap{width: 100%;}
  }
  .swipe {
    img { width: 100%; .bdr(0); height:200px; object-fit: cover; display: block; }
  }
  
  
  // .rongText-wrap{padding:0 20px 10px 20px;
  //   img{width: 100%;}
  // }
  .ezb-wrap{padding:0 15px 20px 15px; 
    img{width: 100%; .bdr(5px); }
  }
  .icon-grid { position: relative; margin:0 10px;
    // .mine-actions { margin: 15px 15px; padding: 20px 0px; border-radius: 8px; background-color: white;
    //   .action-item {
    //     .icon { font-size: 28px; }
    //     .text { display: block; font-size: 18px; margin: 8px 0px; } 
    //   }
    // }
    .van-grid-item__content{padding:10px;}
    .grid-inner{padding:0; width: 100%;}
    .grid-item-box{.bglg(@bll6,@bll5,180deg); .bd(@bll7); border-radius:5px; display:flex;
      .grid-icon{width:50px; height:50px; text-align: center; line-height: 50px; font-size: 20px; color:@wh; }
      .text{display:inline-block; height: 50px; font-weight: 600; padding:0 10px 0 0;font-size: 18px; color:@wh; line-height: 50px; .thidden;}
    }
  }
  
  .counter-grid{margin:20px 0;
    .van-grid-item__content{padding:5px;}
    .counter-inner{text-align: center; height:90px;
      .label{ font-size: 16px; line-height: 20px; padding:0 12px; margin:10px 0 0 0;}
    }
    &.counter-single{
      .counter-inner{height:70px;
        .label{font-size: 18px; font-weight: bold;}
        .rolling-text{ --van-rolling-text-item-width:32px; }
      }
    }
    .rolling-text{.ff(impact); .por;
      &:after{.fc(@gym5);font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; white-space: nowrap; margin:0 0 0 5px; .poa; left:100%; bottom:0;}
      &.unit-ge:after{content:"unit";}
      &.unit-xiang:after{content:"b/p";}
      &.unit-wei:after{content:"unit";}
      &.unit-percent:after{content:"%";}
      --van-rolling-text-background: @bll5;
      --van-rolling-text-color: white;
      --van-rolling-text-font-size: 24px;
      --van-rolling-text-gap: 6px;
      --van-rolling-text-item-border-radius: 5px;
      --van-rolling-text-item-width: 24px;
    }
  }


  .circle-grid{margin:20px 0;
    .van-grid-item__content{padding:5px;}
    .counter-inner{text-align: center; height:160px;
      .label{ font-size: 16px; line-height: 20px; padding:0 12px; margin:10px 0 0 0;}
      .van-circle{
        .van-circle__text{font-size: 24px;.fc(@gyr5);}
      }
    }
    &.circle-single{
      .counter-inner{height:220px;
        .label{font-size: 18px; .fc(@gyr5); font-weight: bold;.poa; top:50%; padding:0 140px; left:0; right:0;}
        .van-circle{.por;
          .van-circle__text{.poa; top:40%;left:0; right:0;font-size: 48px; .fc(@bll5);}
        }
      }
    }
  }

  .multiple-percent-bar{margin:20px; 
    .title{font-size: 24px; font-weight: bold; text-align: center; }
    .bar-wrap{.por; height:140px;
      .bar-bg{.poa; left:0; right:0; top:50%; .fixc("y"); .bgc(@gyl3);height: 10px; .bdr(10px);
        .bar-val{.poa; left:0; top:0; .bgc(@bll5);height: 10px; .bdr(10px);}
        .slide{.poa; text-align: center; .fixc("x"); .fc(@wh); font-size: 12px; .bgc(@gyl5); padding:5px; .bdr(5px); line-height: 14px;
          &:before{content:""; .poa; left:50%; top:-12px; height: 12px; width: 2px; .bgc(@gyl5);}
          &.style-blue{.bgc(@bll5);&:before{.bgc(@bll5);}}
          &.style-aqua{.bgc(@aql6);&:before{.bgc(@aql6);}}
          &.style-yellow{.bgc(@yel6);&:before{.bgc(@yel6);}}
          &.style-orange{.bgc(@orl5);&:before{.bgc(@orl5);}}
          &.style-red{.bgc(@rel5);&:before{.bgc(@rel5);}}
          &.position-top{top:-50px;
            &:before{top:auto; bottom:-12px;}
          }
          &.position-bottom{bottom:-50px;
            
          }
        }
      }
    }
  }

  .group-title{padding:15px; font-size: 18px; font-weight: bold; margin:10px 0 0 0;
    &:before{content:" "; display:inline-block; vertical-align: bottom; .bdr(5px); .bgc(@bll5); margin:0 5px 0 0; width: 6px; height: 20px;}
  }
  .cell-wrap{.bgc(@gyl1); padding:0 0 20px 0;
    .van-cell-group{
      .van-cell{
        .van-cell__title{flex:2; .thidden;}
      }
    }
  }
  
  .chart-wrap{.bgc(@wh);  margin:0 0 15px 0; .bdr(5px); padding:10px;}
  
}
</style>
