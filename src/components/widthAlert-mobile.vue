<script setup>
const state=ref(true);
const close=()=>{
  state.value=false
}
</script>
<template>
<div class="with-alert-mobile" v-if="state">
  <div class="alert-inner">
    <i class="i carbon:warning"></i>
    <p>Please use the mobile terminal to visit, or reducing the width of the browser window to visit.</p>
    <p>If you access it through a PC, you cannot use the gyroscope to interact with the 3D panel components.</p>
    <div class="button" @click="close">Close this Tip</div>
  </div>
</div>
</template>

<style lang="less">
.with-alert-mobile {.pof; display:none; .fullbox; z-index: 99; .bdFilter(3px); .bgc(fade(@bk,80%));
  .alert-inner{.pof; z-index: 10; .fc(@wh); text-align: center; left:50%; top:40%; .fixc("xy"); width: 80%; height: 100px;
    .i{font-size: 48px; display:block; margin:0 0 30px 0;}
    .button{.bd(@wh); display:inline-block; margin:0 10px; padding:10px 20px;.bdr(5px); font-size: 14px; cursor: pointer;}
  }
}
@media (min-width: 700px){
  .with-alert-mobile{display:block;}
}
</style>
