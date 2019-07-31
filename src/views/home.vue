<template>
  <div class="container">
    <template>
      <el-container class="home-container">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>
            <el-header class="my-header">
              <span class="el-icon-s-fold"></span>
              <span class="text">江苏传智播客教育科技有限公司</span>
              <el-dropdown style="float:right">
                <span class="el-dropdown-link">
                  <img
                    style="vertical-align:middle"
                    width="30"
                    height="30"
                    src="../assets/images/avatar.jpg"
                    alt
                  />
                  <b style="vertical-align:middle;padding-left:5px">黑马小哥</b>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-header>
          </el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
  }
</style>
