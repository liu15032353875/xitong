<template>
  <div class="container">
    <!-- 卡片 -->
    <el-card class="login_box">
      <img src="../assets/images/logo_index.png" alt />
      <!-- model绑定表单数据 -->
      <el-form
        :model="LoginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="60px"
        style="margin-top:30px"
      >
        <el-form-item label="用户名">
          <el-input v-model="LoginForm.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      LoginForm: {
        name: ''
      },
      rules: {

      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../assets/images/login_bg.jpg) no-repeat center / cover;
  .login_box {
    width: 450px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto;
    }
  }
}
</style>
