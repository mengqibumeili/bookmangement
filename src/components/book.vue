<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>图书管理</el-breadcrumb-item>
      <el-breadcrumb-item>书籍列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card shadow="always">
      <!-- 头部区域 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddBookDialog">添加书籍</el-button>
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="booklist" border style="width: 100%">
        <el-table-column type="index" label="#" width="180" align="center"> </el-table-column>
        <el-table-column prop="bookname" label="书名" width="180" align="center"> </el-table-column>
        <el-table-column prop="author" label="作者" width="180" align="center"> </el-table-column>
        <el-table-column prop="country" label="国家" width="180" align="center"> </el-table-column>
        <el-table-column prop="number" label="数量" width="180" align="center"> </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"> </el-button>
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteBook"> </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 对话框区域 -->
    <el-dialog title="提示" :visible.sync="addBookDialogVisible" width="30%">
      <!-- 表单 -->
      <el-form :model="addBookRuleForm" :rules="addBookRules" ref="addBookRef" label-width="100px">
        <el-form-item label="书名" prop="bookname">
          <el-input v-model="addBookRuleForm.bookname"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="addBookRuleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="国家" prop="country">
          <el-input v-model="addBookRuleForm.country"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="number">
          <el-input v-model="addBookRuleForm.number"></el-input>
        </el-form-item>
      </el-form>

      <!-- 确定取消按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addBookDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBook">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklist: [],
      addBookDialogVisible: false,
      addBookRuleForm: {
        bookname: '',
        author: '',
        country: '',
        bumber: '',
      },
      addBookFormRules: {
        bookname: [{ required: true, message: '请输入书籍名称', trigger: 'blur' }],
      },
    }
  },
  created() {
    this.getBookList()
  },
  methods: {
    // 获取书籍列表
    async getBookList() {
      const { data: res } = await this.$axios.get('booklist')
      // console.log(res)
      this.booklist = res.data
    },
    // 展示对话框
    showAddBookDialog() {
      this.addBookDialogVisible = true
    },
    // 添加书籍、
    addBook() {
      // this.$axios.post('addbook')
      this.addBookDialogVisible = false
    },
    // 删除书籍
    deleteBook() {
      this.getBookList()
    },
  },
}
</script>

<style lang="less" scoped>
</style>