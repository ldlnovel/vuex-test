<template>
    <div class="ldl_silder">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <!-- <div class="ldl_logo">
          <img src="sss" alt="">
          <p>asdasdasdas</p>
        </div> -->
        <el-menu 
            background-color="#545c64"
            text-color="#fff"
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :router="true"
            :default-active="path"
            :collapse="isCollapse"
        > 
          <el-submenu v-for="(item,key) in homeVuex.navList" :index="item.path" v-if="!!item.children">
            <template slot="title" >
              <i class="el-icon-location"></i>
              <span slot="title">{{item.titlename}}</span>
            </template>
            <el-menu-item-group >
              <el-menu-item v-for="(list,key) in item.children" :index="list.path">{{list.titlename}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-for="(item,key) in homeVuex.navList" :index="item.path" v-if="!item.children">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.titlename}}</span>
          </el-menu-item>
        </el-menu>
  </div>
</template>

<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  /* min-height: 400px; */
  height: 100%;
}
.ldl_silder {
  display: flex;
  flex-direction: column;

  height: 100%;
}
.ldl_logo{
  /* width: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #545c64;
  color: #fff;
}
.ldl_silder .el-menu-vertical-demo {
  height: 100vh;
}
.el-menu--collapse{
  width: 80px;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: "silder",
  data() {
    return {
    //   isCollapse: true
     path: this.$route.path

    };
  },

  props: {
    'isCollapse':Boolean
  },
  updated() {
    console.log('========================silder  更新了==========================')
    console.log(this.homeVuex.navList)
  },
  computed: {
    ...mapState({
      homeVuex: 'homeModal',
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
