<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="name" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="star" width="250">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>name: {{ scope.row.name }}</p>
            <p>star: {{ scope.row.string }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" v-show="!isEdit[scope.$index]">{{ scope.row.string }}</el-tag>
              <input
                type="text"
                size="medium"
                v-show="isEdit[scope.$index]"
                v-model="scope.row.string"
              />
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            v-show="!isEdit[scope.$index]"
          >编辑</el-button>
          <el-button
            size="mini"
            @click="handleConfirm(scope.$index, scope.row)"
            v-show="isEdit[scope.$index]"
          >确认</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Test from '@/api/test/test'
export default {
  data() {
    return {
      tableData: [{ "name": "aaa", "string": "星星" }, { "name": "aaa", "string": "星星" }],
      isEdit: [false, false]
    }
  },
  methods: {
    handleEdit(index, row) {
      // let isEditIndex = this.isEdit[index]
      this.isEdit.splice(index, 1, true)
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1)
    },
    handleConfirm(index, row) {
      this.isEdit.splice(index, 1, false)
    }
  },
  async mounted() {
    let res = await Test.getTest()
    this.tableData = res.data.list
    this.isEdit = new Array(this.tableData.length).fill(false)
  }
}
</script>

<style lang="scss" scoped>
</style>
