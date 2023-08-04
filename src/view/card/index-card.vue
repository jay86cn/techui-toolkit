<script setup>
import demo01 from "@/assets/images/demo/demo01.png"
import demo02 from "@/assets/images/demo/demo02.png"
import demo03 from "@/assets/images/demo/demo03.png"
import demo04 from "@/assets/images/demo/demo04.png"
import demo05 from "@/assets/images/demo/demo05.png"
import demo06 from "@/assets/images/demo/demo06.png"

const state=reactive({
  cardList:[
    {title:"This is card title",date:"20230728",img:demo01,statistics:{comments:532,forward:428,favorite:631,view:121}},
    {title:"This is card title",date:"20230728",img:demo02,statistics:{comments:52,forward:31,favorite:68,view:82}},
    {title:"This is card title",date:"20230728",img:demo03,statistics:{comments:42,forward:21,favorite:23,view:28}},
    {title:"This is card title",date:"20230728",img:demo04,statistics:{comments:532,forward:421,favorite:231,view:321}},
  ],
  panelGyroConfig:{
    debug:false,
    coeff:.2,
    thicknessColor:$c.gyr5,
    thicknessCoeff:.1,
    shadowCoeff:.1,
    perspective:500,
    showShadow:true,
    shadowTransparent:.5,
  },
  toogleButtonConfig:{
    desc:"3D Model",
    // style:"round"
  },
})

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    loading.value = false;
    count.value++;
  }, 1000);
};

onMounted(() => {
    
})

</script>

<template>
  <van-pull-refresh class="card-wrap" v-model="loading" @refresh="onRefresh">
    <div class="card-item" v-for="(item,index) in state.cardList">
      <panelGyro :config="state.panelGyroConfig" :index="index">
        <template #default="parmas">
          <div :class="`card-inner ${parmas.boxShadowItem}`">
            <img :src="item.img" alt="">
            <div class="title">{{item.title}}</div>
          </div>
          <div :class="`statistics-wrap ${parmas.textShadowItem}`">
            <div class="sta-item" v-for="(itemSta,indexSta) in item.statistics">
              <i class="i carbon:chat" v-if="indexSta=='comments'"></i>
              <i class="i carbon:launch" v-if="indexSta=='forward'"></i>
              <i class="i carbon:star" v-if="indexSta=='favorite'"></i>
              <i class="i carbon:view" v-if="indexSta=='view'"></i>
              <span class="sta">{{itemSta}}</span>
            </div>
          </div>
        </template>
      </panelGyro>
    </div>
    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>
  </van-pull-refresh>
</template>


<style lang="less">
.card-wrap{
  .card-item{margin:30px;
    .unInit{
      .card-inner{ }
    }
    .inited{
      .card-inner{
        .title{ }
      }
    }
    .card-inner{.bdr(10px);.por;
      img{width:100%; height:200px; object-fit: cover; .bdr(10px);}
      .title{font-size: 16px; padding:10px;.poa; .bdFilter(3px); .bgc(fade(@bk,50%)); .bdr(0 0 10px 10px); .fc(@wh); bottom:0; left:0; right:0;}//.bglg(fade(@bk,20%),fade(@bk,60%),180deg);
    }
    .statistics-wrap{padding: 5px; .fc(@gyr3);
      .sta-item{display:inline-block; font-size: 14px; margin:0 20px 0 0;
        .i{margin:0 5px 0 0; vertical-align: bottom;}
        .sta{}
      }
    }
  }
}
</style>
