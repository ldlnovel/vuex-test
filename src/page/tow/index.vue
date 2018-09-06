
<template>
  <div>
    <h1>Hello world</h1>
    <h2>{{sgin}}</h2>
    <value-list  
      :list="[]"
      :listValue="{ss:2}"
      :valueCallback="valueCallback"
    > 

    </value-list>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import valueList from '../../components/formlist/index.vue'
export default {
  name: 'one',
  data() {
    return {
      sgin: 'hello vuex Tow',
      list: [{
          codinType:1,
          value:'奥术大师大所大所',
          disable:false,
        },
        {
          codinType:2,
          value:'2018-06-05',
          disable:false,
        },
        {
          codinType:3,
          value:'1',
          disable:false,
        },
        {
          codinType:4,
          value: [1,2],
          disable:false,
      }]
    }
  },
  methods: {
    valueCallback(value) {
      console.log(value)
    }
  },
  computed: { ///在更新前 能对 值 进行 改变
  },
  components: {
    valueList
  }
}

</script>


<style scoped>

</style>
