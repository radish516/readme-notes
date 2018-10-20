<template>
<div class="plist">
  <mt-cell class="song-cell" v-for="item in 100" :key="item" title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"  is-link>
    <div>
      <i class="icon-music"></i>
      <span>999999</span>
    </div>
    <img class="plist-img" slot="icon" src="http://imge.kugou.com/mcommon/400/20150717/20150717100030907982.png" width="24" height="24">
  </mt-cell>
</div>
</template>
<script>
    export default {
        name: 'Plist'
    }
</script>
<style scoped>
  .plist-img {
    width: 2rem;
    height: 2rem;
  }
  .plist-cell {
    padding: 5px 0;

  }
  .song-cell {
    padding: 0.2rem 0;
  }

  .song-cell .icon-music {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: url('http://m.kugou.com/v3/static/images/index/icon_music.png') no-repeat;
    background-size: 100%;
  }
  
</style>