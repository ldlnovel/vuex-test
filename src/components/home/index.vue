<template>
  <div class="ldl_vue">
      <el-container>
        <el-aside :style="{'width':!isCollapse?'200px':'80px'}" height='100%'>
            <Silder :isCollapse="isCollapse"/>
        </el-aside>
        <el-container>
            <!-- <span class="el-icon-menu" @click="togoleisCollapse"></span> -->
            <el-header>
                <Header @togoleisCollapse='togoleisCollapse'/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
  </div>
</template>

<style >
.ldl_vue {
  height: 100%;
}
.el-container.is-vertical{
  height: 100vh;
}
.el-container {
  height: 100%;
}
</style>

<script>
import Header from "../header/index.vue";
import Silder from "../silder/index.vue";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    Header,
    Silder
  },
  methods: {
    togoleisCollapse() {
      return this.isCollapse = !this.isCollapse
    }
  }
};
</script>
