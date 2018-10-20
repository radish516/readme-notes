<template>
  <div>
    <div class="new-song-swipe">
      <mt-swipe :auto="0">
          <mt-swipe-item v-for="item in banner" :key="item.id">
              <img :src="item.imgurl" />
          </mt-swipe-item>
      </mt-swipe>
  </div>
  <div class="song-list">
      <mt-cell class='song-cell' 
      :key="item.hash" v-for="item in list" :title="item.filename"  is-link></mt-cell>
  </div>
</div>
</template>
<script>
  import {getNewSongs} from '@/server'
    export default {
        name: 'NewSong',
        data(){
          return {
            banner:[],
            list: []
          }
        },
        async created(){

          let {data} = await getNewSongs({laoding:2})

          console.log(data)
          this.banner = data.banner;
          this.list = data.data;
        }
    }
</script>
<style scoped>
  .new-song-swipe {
    height: 2.54rem;
  }
  .new-song-swipe img {
    width: 100%;
  }
  
</style>