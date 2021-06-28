<template>
  <div>
    <el-container class="home-container">
      <!-- 头部导航区域 -->
      <el-header>
        <!-- 标题 -->
        <div class="title">
          <h3>后台管理系统</h3>
        </div>
        <!-- 退出页面 -->
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>

      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <!-- 显示隐藏按钮 -->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!-- 侧边菜单 -->
          <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :unique-opened="true"
            :collapse="isCollapse"
            :collapse-transition="false"
            :default-active="activePath"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>{{ item.authName }}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item
                :index="'/' + subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="saveNavState('/' + subItem.path)"
              >
                <span> {{ subItem.authName }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 添加路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      activePath: '',
      isCollapse: false,
    }
  },

  // 生成用户列表
  created() {
    this.getMenuList()
  },

  methods: {
    // 退出登录
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 重定向到登录页
      this.$router.push('/login')
    },
    // 获取菜单列表
    async getMenuList() {
      const { data: res } = await this.$axios.get('menu')
      if (res.meta.status != 200) return this.$message.console.error('获取用户数据失败')
      this.menulist = res.data
      // console.log(this.menulist)
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
    // 控制侧边栏展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  .title {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
}

.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #f2f6fc;
}
.el-menu {
  background-color: #606266;
}
.el-menu {
  background-color: #606266;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  /* 鼠标放上去显示小手 */
  cursor: pointer;
}
</style>