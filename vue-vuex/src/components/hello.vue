<template>
  <div>
    <h2>我是miaov</h2>
    <p>{{n}}</p>
    <p>{{m}}</p>
    <button @click="changeCount">改变状态+10</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    // data只能在本组间改变
    data(){
      return {
        n: this.$store.state.count  //n的初始值从vuex的state重拿
      }
    },
    methods: {
      changeCount(){
        //改变vuex中的状态
        this.$store.commit('updatedCount', {
          add: 10
        })
      }
    },
    computed: {
      m(){
        return this.$store.state.count
      }
    }
  }
</script>