<template>
  <div id="app">
    <hello></hello>
    <hr/>
    <miaov></miaov>
  </div>
</template>

<script>

import Hello from './components/hello'
import Miaov from './components/miaov'

export default {
  name: 'App',
  components: {
    hello: Hello,
    miaov: Miaov
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
