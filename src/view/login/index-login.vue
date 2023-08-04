<script setup>
const router=useRouter();
const username = ref('admin');
const password = ref('tesT!@#$%^&^&&*()');
const onSubmit = (values) => {
  router.push("/layout");
};
const state=reactive({
  adaptivePanelConfig:{
    mode:"scroll",
    width:420,
    backgroundName:"A2"
  }
})
</script>

<template>
  <adaptivePanel :config="state.adaptivePanelConfig">
    <van-form class="login-form" @submit="onSubmit">
      <div class="logo-wrap">
        <img class="logo" src="/logo.svg" alt="">
        <div class="desc">TechUI-toolkit</div>
      </div>
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="User"
          left-icon="user-o"
          placeholder="Enter any user name"
          :rules="[{ required: true, message: 'Please enter user name!' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          left-icon="label-o"
          placeholder="Enter any password"
          :rules="[{ required: true, message: 'Please enter password!' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          SUBMIT
        </van-button>
      </div>
    </van-form>
  </adaptivePanel>

  
</template>

<style lang="less">
.login-form{.poa; top:40%; .fixc("y"); left:0; right:0;
  .logo-wrap{margin:0 auto 40px auto;
    .logo{width: 80px; display:block; margin:20px auto;}
    .desc{text-align: center; font-size: 32px; font-weight: bold; .ff("en4"); .fc(@bll6);}
  }
  .van-cell-group{.bd(@gyl2);}
  .van-field__control{text-align: center;font-size: 18px;}
  .van-field__error-message{text-align: center;}
}
</style>
