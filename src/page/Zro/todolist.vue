<template>
    <div class="ldl_todolist">
        <el-input key='1' v-model="todoInput" placeholder="enter 保存"  @keyup.enter.native="enterToaddTodoArr" width='200px'></el-input>
        <el-input key='2' :value="filterValue" @input="filterTodoArr" placeholder="筛选"  width='200px'></el-input>
        <!-- <p>{{totoArr.length}}</p> -->
        <ul>
            <li v-for="item in totoArr" :key="item.time" >
                <el-checkbox v-model="item.ischecked" @change="selectArr" v-if="item.time !== edtorTodosValue.time"></el-checkbox>
                <el-input  :placeholder="item.value" @input="editTorodoArr"  @keyup.enter.native="endEdtorTodos"  width='200px' v-if="item.time === edtorTodosValue.time"></el-input>
                <span  @dblclick="startEdtorTodos(item)" v-else>{{item.value}}</span>
            </li>
        </ul>
        <div>
            <el-button type="info"  @click="showTodoArr('all')">所有</el-button>
            <el-button type="warning"  @click="showTodoArr('checked')">完成</el-button>
            <el-button type="danger"  @click="showTodoArr('unchecked')">未完成</el-button>
            <el-button type="info" >已完成：{{ischecked}}</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      todoInput: "",
      filterValue: "",
      edtorTodosValue: {},
      ischecked: "",
      totoArr: JSON.parse(localStorage.getItem("totoArr")) || []
    };
  },
  created() {
    this.setIscheckedValue();
  },
  //   computed() {
  //   },
  methods: {
    setIscheckedValue() {
      let _totoArr = JSON.parse(localStorage.getItem("totoArr")) || [];
      this.ischecked = _totoArr.filter(v => v.ischecked).length;
    },
    enterToaddTodoArr(e) {
      if (e.target.value == "") return;
      let _obj = {
        time: +new Date(),
        value: this.todoInput,
        ischecked: false
      };
      this.todoInput = "";
      this.totoArr.push(_obj);
      localStorage.setItem("totoArr", JSON.stringify(this.totoArr));
    },
    filterTodoArr(value) {
      let _totoArr = JSON.parse(localStorage.getItem("totoArr")) || [];
      return (this.totoArr = _totoArr.filter(v => v.value.indexOf(value) > -1));
    },
    selectArr() {
      localStorage.setItem("totoArr", JSON.stringify(this.totoArr));
    },
    showTodoArr(type) {
      let _totoArr = JSON.parse(localStorage.getItem("totoArr")) || [];
      switch (type) {
        case "All":
          return (this.totoArr = _totoArr);
          break;
        case "checked":
          this.totoArr = _totoArr.filter(v => v.ischecked);
          break;
        case "unchecked":
          this.totoArr = _totoArr.filter(v => !v.ischecked);
          break;
        default:
          break;
      }
    },
    editTorodoArr(value) {
      this.editTorodoArr.value = value;
      // this.selectArr()
    },
    startEdtorTodos(value) {
      console.log(value);
      this.edtorTodosValue = value;
    },
    endEdtorTodos() {
      var _totoArr = JSON.parse(localStorage.getItem("totoArr")) || [];
      console.log(_totoArr);
      for (let i = 0; i < _totoArr.length; i++) {
        console.log(_totoArr[i]);
        if (this.edtorTodosValue.time == _totoArr[i].time) {
          _todoArr[i] = this.edtorTodosValue;
          break;
        }
      }
      this.totoArr = _totoArr;
      this.edtorTodosValue = "";
      this.selectArr();
    }
  }
};
</script>

<style scoped>
.ldl_todolist .el-input {
  margin-bottom: 10px;
}
.ldl_todolist ul {
  margin: 0;
  padding: 0;
}
.ldl_todolist ul li {
  font-size: 16px;
  padding: 5px 0;
  list-style: none;
  border-bottom: 1px dashed #ccc;
}
.ldl_todolist ul li span {
  margin-left: 10px;
}
</style>