<script setup>
const state=reactive({
  adaptivePanelConfig:{
    mode:"scroll",
    width:420,
  }
})
</script>

<template>
  <div id="root-adaptive">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
</style>
