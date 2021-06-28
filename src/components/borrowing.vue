<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>借阅管理</el-breadcrumb-item>
      <el-breadcrumb-item>借阅信息列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <el-card shadow="always">
      <el-table :data="borrowlist" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center"> </el-table-column>
        <el-table-column prop="email" label="Email" width="180" align="center"> </el-table-column>
        <el-table-column prop="datetime" label="借出时间" width="180" align="center"> </el-table-column>
        <el-table-column prop="lease" label="租期" width="180" align="center"> </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"> </el-button>
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-delete" size="mini"> </el-button>
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
      borrowlist: [],
    }
  },
  created() {
    this.getBorrowList()
  },
  methods: {
    async getBorrowList() {
      const { data: res } = await this.$axios.get('borrowing')
      this.borrowlist = res.data
    },
  },
}
</script>

<style lang="less" scoped>
</style>