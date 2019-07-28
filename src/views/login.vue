<template>
  <div class="login-container">
    <!-- 卡片 -->
    <el-card class="login_box">
      <img src="../assets/images/logo_index.png" alt />
      <!-- model绑定表单数据 -->
      <el-form
        :model="LoginForm"
        status-icon
        :rules="loginrules"
        ref="LoginForm"
        label-width="80px"
        style="margin-top:30px"
      >
      <!-- prop设置需要校验的字段名 -->
        <el-form-item label="用户名" prop="mobile">
          <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="code">
          <el-input v-model="LoginForm.code" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm()">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 自定义校验：

    // - 使用一个 约定好的（定义在哪里，参数） 函数
    // - 定义在data函数的return之前
    // - 参数 rule 校验规则对象  value 字段的值  callback 成功或失败回调
    // - callback() 成功
    // - callback(new Error('提示信息')) 失败
    // - 在规则中使用 validator 指定该函数即可
    const checkMobile = (rules, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('格式不正确'))
      }
    }
    return {
      LoginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginrules: {
        mobile: [
          { required: true, message: '请输入手机号', tiggir: 'blur' },
          { validator: checkMobile, tiggir: 'blur' }
        ],
        code: [
          { required: true, message: '请输入密码', tiggir: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    //     **整体表单校验：**

    // - 需要给el-form加上ref属性
    // - 在提交的时候，获取el-form的dom对象
    // - 组件上的函数需要通过dom才能调用
    // - 校验函数的名称 validate 回调函数
    // - 传参 valid  判断整个表单是否校验成功
    submitForm () {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
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
