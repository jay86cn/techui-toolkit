<script setup>
import aboutBG from "@/assets/images/demo/demo08.png"
const router=useRouter()
const innerLinks=[
  {title:"Logout",value:"",desc:"",href:"/login"},
  {title:"Panel3D",value:"",desc:"Please open this link on a computer",href:"/#/panel3D"},
]
const outerLinks=[
  {title:"Document",value:"",desc:"Getting Documents",href:"https://toolkit.techui.net/docs"},
  {title:"Github",value:"",desc:"Getting the source code",href:"https://github.com/ayin86/techui-toolkit"},
  {title:"Toolkit-Core",value:"",desc:"Toolkit-core published at npmjs.com",href:"https://www.npmjs.com/package/techui-vue3-toolkit"},
  {title:"techui-vue2",value:"",desc:"A paid dynamic SVG-based data visualization framework.",href:"https://techui.net/docs"},
  {title:"techui-vue3-lite",value:"",desc:"A free dynamic SVG-based data visualization framework.",href:"https://lite.techui.net/docs"},
]

const about={
  title:"About TechUI-toolkit",
  desc:[
    "This toolkit is a lib of components extracted from the techui data visualization framework.",
    "All codes of this app are open source, except the toolkit, which requires authorization to use.",
    "Give star to my github repositories to get a 1-year toolkit license for free."
  ],
  mail:"ayin86cn@gmail.com",
  notice:"Find more information and how to get a free license in github or docs!"
}

const state=reactive({
  panelGyroImgConfig:{
    coeff:.1,
    shadowCoeff:.3,
    perspective:300,
    thicknessColor:$c.bld7,
    showShadow:true,
    shadowTransparent:.5,
  },
  toogleButtonConfig:{
    desc:"3D Model",
  },
})

const innerClick=(item)=>{
  if(item.href.includes("#")){
    window.open(item.href);
  }else{
    router.push(item.href);
  }
}
const outerClick=(item)=>{
  window.open(item.href);
}

onMounted(() => {
    
})

</script>

<template>
  
  <div class="about-wrap">
    <div class="img-wrap">
      <panelGyro :config="state.panelGyroImgConfig">
        <template #default="parmas">
          <div class="about-inner">
            <div class="title">{{about.title}}</div>
            <div class="desc" v-for="(item,index) in about.desc">{{item}}</div>
            
          </div>
          <img :class="`img-3d ${parmas.boxShadowItem}`" :src="aboutBG" />
        </template>
      </panelGyro>
    </div>
    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>
    <div class="group-title">Inner Links</div>
    <van-cell-group inset>
      <van-cell v-for="(item,index) in innerLinks" @click="innerClick(item)" :title="item.title" :value="item.value" :label="item.desc" is-link />
    </van-cell-group>
    <div class="group-title">Outer Links (Please open these links on a computer)</div>
    <van-cell-group inset>
      <van-cell v-for="(item,index) in outerLinks" @click="outerClick(item)" :title="item.title" :value="item.value" :label="item.desc" is-link />
    </van-cell-group>
    <div class="mail">{{about.mail}}</div>
    <div class="notice">{{about.notice}}</div>
  </div>
</template>


<style lang="less">
.about-wrap{.bgc(@gyl1); // padding:20px 0 0 0;
  .img-wrap{ margin:20px;
    .about-inner{.poa; .fullbox; top:auto; .fc(@wh);  text-align: center;  .bglg(fade(@bk,0%),fade(@bk,100%),180deg); .bdr(0 0 10px 10px); padding:80px 10px 10px 10px;
      .title{font-size: 16px; font-weight: bold; margin:0 0 10px 0;}
      .desc{font-size: 14px; line-height: 15px;margin:0 0 10px 0;}
    }
    img{width: 100%; height: 100%; object-fit: cover; .bdr(10px);}
  }
  .group-title{padding:10px 20px; font-size: 14px; .fc(@gym5);}
  .van-cell-group{margin:0 20px 20px 20px;}
  .van-cell__title{flex:10;}
  .van-cell__label{white-space: nowrap;}
  .mail{font-size: 16px; text-align: center; .fc(@gyr5);}
  .notice{font-size: 16px; padding:20px; text-align: center;margin:0 0 20px 0; .fc(@gyr5);}
}
</style>
