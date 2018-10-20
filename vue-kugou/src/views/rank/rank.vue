<template>
<div class="rank">
  <mt-cell class="song-cell" v-for="item in 100" :key="item" title="标题"  is-link>
    <img class="ran-img" slot="icon" src="http://imge.kugou.com/mcommon/400/20150717/20150717100030907982.png" width="24" height="24">
  </mt-cell>
</div>
</template>
<script>
    export default {
        name: 'Rank'
    }
</script>
<style scoped>
  .ran-img {
    width: 2rem;
    height: 2rem;
  }
  .rank-cell {
    padding: 5px 0;

  }
  .song-cell {
    padding: 0.2rem 0;
  }
</style>