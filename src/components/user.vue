<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <el-card shadow="always">
      <el-table :data="userlist" border style="width: 100%">

        <el-table-column type="index" label="#" width="180" align="center"> </el-table-column>
        <el-table-column prop="username" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="ip" label="ip地址" align="center"> </el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"> </el-table-column>
        <el-table-column label="操作" width="180px" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
             
            >
            </el-button>
            <!-- 删除 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              
            >
            </el-button>

            <!-- 分配角色 -->
            <!-- <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
              ></el-button>
            </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: [],
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 获取用户列表
    async getUserList() {
      const { data: res } = await this.$axios.get('userlist')
      this.userlist = res.data.users
      // console.log(this.userlist)
    },
  },
}
</script>

<style lang="less" scoped>
</style>