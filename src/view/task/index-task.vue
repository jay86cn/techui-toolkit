<script setup>
import { showToast } from 'vant';

import btnImg1 from "@/assets/images/btn1.png"
import btnImg2 from "@/assets/images/btn2.png"
import btnImg3 from "@/assets/images/btn3.png"
import btnImg4 from "@/assets/images/btn4.png"

const state=reactive({
  btnImg:[btnImg1,btnImg2,btnImg3,btnImg4],
  taskList:[
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: false, data: {executor: "Wang Yan", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", dateLimit: "20230625"}},
   ],
   taskList2:[
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", source: "Leader A", type: "Document A", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", source: "Leader A", type: "Document A", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: false, data: {executor: "Wang Yan", source: "Leader A", type: "Document A", dateLimit: "20230625"}},
    {title: "Writing department work summary", state: true, data: {executor: "Wang Yan", source: "Leader A", type: "Document A", dateLimit: "20230625"}},
   ],
   panelGyroConfig:{
    coeff:.1,
    shadowCoeff:.2,
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

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast('Refresh Done');
    loading.value = false;
    count.value++;
  }, 1000);
};

onMounted(() => {
    
})

</script>

<template>

  <van-pull-refresh class="task-wrap" v-model="loading" @refresh="onRefresh">
    <panelGyro :config="state.panelGyroConfig">
      <template #default="parmas">
        <van-row class="btn-img-wrap">
          <van-col span="12" v-for="(item,index) in state.btnImg">
            <div :class="`img-wrap ${parmas.boxShadowItem}`"><img :src="item" alt=""></div>
          </van-col>
        </van-row>
      </template>
    </panelGyro>
    <panelGyroToggle :config="state.toogleButtonConfig"></panelGyroToggle>
    <!-- <div class="task-item" v-for="(item,index) in state.taskList">
      <div class="task-title">
        <span class="state state-done" v-if="item.state">Done</span>
        <span class="state state-processing" v-if="!item.state">Processing</span>
        {{item.title}}
      </div>
      <div class="task-grid" >
        <div class="grid-item"  v-for="(itemD,indexD) in item.data">
          <div class="label" v-if="indexD=='executor'">Administrator</div>
          <div class="label" v-if="indexD=='dateLimit'">Deadline</div>
          <div class="label" v-if="indexD=='state'">state</div>
          <div class="content">{{itemD}}</div>
        </div>
      </div>
    </div> -->
    
    <div class="task-item2" v-for="(item,index) in state.taskList2">
      <div class="task-title">
        <span class="state state-done" v-if="item.state">Done</span>
        <span class="state state-processing" v-if="!item.state">Processing</span>
        {{item.title}}
      </div>
      <div class="task-grid" >
        <div class="grid-item"  v-for="(itemD,indexD) in item.data">
          <div class="label" v-if="indexD=='executor'">Administrator</div>
          <div class="label" v-if="indexD=='source'">source</div>
          <div class="label" v-if="indexD=='type'">Type</div>
          <div class="label" v-if="indexD=='dateLimit'">Deadline</div>
          <div class="content">{{itemD}}</div>
        </div>
      </div>
    </div>
   
    <div class="task-blank" v-if="state.taskList.length==0">
      <i class="fal fa-comment-alt-dots"></i>
      <span class="desc">No tasks yet!</span>
    </div>
    <p class="refresh-count">Refresh times: {{ count }}</p>
  </van-pull-refresh>
  
  
</template>


<style lang="less">
.task-wrap{.por; .bgc(@gyl1); min-height:100%;
  
  .btn-img-wrap{margin:15px!important;
    .van-col{position: relative; height:100px;
      .img-wrap{.poa; .fullbox(8px); .bdr(5px);
        img{width:100%; height: 100%; object-fit: cover; .bdr(5px);}
      }
    }
  }

  .task-item{.bdb(@gyl3); .bgc(@wh); padding:0 20px; 
    .task-title{font-size: 14px; padding:15px 0 10px 0;
      .state{font-size: 12px; display:inline-block; padding:0 5px; .fc(@wh); margin:0 5px 0 0; vertical-align: top; .bdr(3px);
        &.state-done{.bgc(@bll5); }
        &.state-processing{.bgc(@orl5); }
      }
    }
    .task-grid{font-size: 12px; margin:0 0 15px 0; .grid(2,1,10px);
      .grid-item{display:flex;
        .label{.fc(@gym5); padding:0 10px 0 0;}
        .content{.fc(@gyd5);}
      }
    }
  }
  
  
  .task-item2{.bd(@gyl3); margin:20px; .bdr(5px); .bgc(@wh);
    .task-title{font-size: 14px; margin:15px 0 10px 0; padding:0 15px; 
      .state{font-size: 12px; display:inline-block; padding:0 5px; .fc(@wh); margin:0 5px 0 0; vertical-align: top; .bdr(3px);
        &.state-done{.bgc(@bll5); }
        &.state-processing{.bgc(@orl5); }
      }
    }
    .task-grid{font-size: 12px; margin:0 0 15px 0; .grid(4,1,0); 
      .grid-item{text-align: center; .bdri(@gyl2);
        &:last-child{border:none;}
        .label{.fc(@gym5); }
        .content{.fc(@gyd5);}
      }
    }
  }


  .task-blank{.pof; top:50%; .fixc("y"); left:0; right:0; text-align: center; padding:20px; .fc(@gyl5);
    .fal{font-size:64px; display:block;}
    .desc{font-size: 16px;}
  }
  .refresh-count{font-size: 12px; text-align: center;}
}
</style>
