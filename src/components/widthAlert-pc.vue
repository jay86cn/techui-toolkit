<script setup>
const router=useRouter()
const state=ref(true);
const goToApp=()=>{
  router.push("/layout");
}
const close=()=>{
  state.value=false
}
</script>
<template>
<div class="with-alert-pc" v-if="state">
  <div class="alert-inner">
    <i class="i carbon:warning"></i>
    <p>Please use the PC to visit, if it is already on the PC side, please enlarge the browser window.</p>
    <p>The 3D panel here uses the cursor for interaction, which cannot be tested and experienced on the mobile terminal.</p>
    <div class="button" @click="close">Close this Tip</div>
    <div class="button" @click="goToApp">Back to App Demo</div>
  </div>
</div>
</template>

<style lang="less">
.with-alert-pc {.pof; display:none; .fullbox; z-index: 99; .bdFilter(3px); .bgc(fade(@bk,80%));
  .alert-inner{.pof; z-index: 10; .fc(@wh); text-align: center; left:50%; top:40%; .fixc("xy"); width: 80%; height: 100px;
    .i{font-size: 48px; display:block; margin:0 0 30px 0;}
    .button{.bd(@wh); display:inline-block; margin:0 10px; padding:10px 20px;.bdr(5px); font-size: 14px; cursor: pointer;}
  }
}
@media (max-width: 900px){
  .with-alert-pc{display:block;}
}
</style>
