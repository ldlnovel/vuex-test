
<template>
  <div>
    <h1>Hello world</h1>
    <el-button type="success"  @click='add'>+</el-button>
    <el-button type="info"  @click='reduce'>-</el-button>
    <p >{{sgin}}</p>
    <p >{{Astate.count}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: 'one',
  data() {
    return {
      sgin: 'hello vuex'
    }
  },
  computed: { ///在更新前 能对 值 进行 改变
    ...mapState({
      Astate: 'moduleA',
    })
  },
  methods: { /// 
    ...mapActions({
      add: 'moduleA/add',
      reduce: 'moduleA/reduce'
    })
  }
}

</script>


<style>

</style>
