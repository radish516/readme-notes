<template>
  <div class="singer">
    <mt-cell class='song-cell singer-song-cell' v-for="item in 100" :key="item" title="标题"  is-link></mt-cell>
  </div>
</template>
<script>
    export default {
        name: 'Singer'
    }
</script>
<style scoped>
  .singer-song-cell {
    border: 1px solid #e5e5e5;
    margin: .3rem;
  }
</style>