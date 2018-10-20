<template>
  <mt-navbar fixed v-model='selected' >
      <mt-tab-item :id="item.path" v-for="item in routes" :key="item.path">
          <router-link tag="div" :to="{path:item.path}">{{item.title}}</router-link>
      </mt-tab-item>
  </mt-navbar>
</template>
<script>
  import {routes} from '@/router/routes'
  export default {
    data(){
      return {
          selected: '/',
          routes
      }
    },
    created(){
      this.selected = this.$route.path;
    }
  }
</script>