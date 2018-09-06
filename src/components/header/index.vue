<template>
    <div class="ldl_head">
        <span class="el-icon-menu ldl_btn" @click="toggleParen"></span>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">    
            <el-menu-item index="1" @click="getNavList('/')">处理中心</el-menu-item>            
            <el-menu-item index="2" @click="getNavList('one')">处理中心</el-menu-item>            
            <el-menu-item index="3" @click="getNavList('tow')">处理中心</el-menu-item>            
            <el-menu-item index="4" @click="getNavList('there')">处理中心</el-menu-item>            
            <el-menu-item index="5" @click="getNavList('four')">处理中心</el-menu-item>            
            <el-menu-item index="6" @click="getNavList('five')">消息中心</el-menu-item>         
        </el-menu>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      ldl_path:this.$route.path
    //   activeIndex2: "1"
    };
  },
   mounted() { 
    //  console.log(this)
    //  console.log('===============mounted================')
     let path = this.$route.path
     this.getNavList(path)
  },
  methods: {
    // ...mapActions({test:'homeModal/test'}),
    getNavList(path) {
        // console.log(path)
        this.$store.dispatch("homeModal/getNavList", path);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    toggleParen() {
        this.$emit('togoleisCollapse')
    }
    
  }
};
</script>

<style scoped>
.ldl_head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.ldl_btn{
    /* float: left; */
    /* margin-top: 20px; */
    padding: 10px;
    cursor: pointer;
}
.el-header{
    padding: 0;
}
</style>
