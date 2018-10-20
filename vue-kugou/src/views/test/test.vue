<template>
  <div>
    <mt-button type="default" @click="getNewSongs">获取新歌数据</mt-button>
    <mt-cell title="/proxy/"></mt-cell>
    <hr />
    <mt-button type="default" @click="getRankList">获取排行数据</mt-button>
    <mt-cell title="/proxy/rank/list"></mt-cell>
    <hr />
    <mt-button type="default" @click="getPlist">获取歌单数据</mt-button>
    <mt-cell title="/proxy/plist/index"></mt-cell>
    <hr />
    <mt-button type="default" @click="getSingers">测试歌手数据</mt-button>
    <mt-cell title="/proxy/singer/class"></mt-cell>
    <hr />
  </div>
</template>
<script>
  import * as api from '@/server'
  export default {
    name: 'Test',
    data(){
      return {
        api
      }
    },
    methods:{
      async getNewSongs(){
        let {data} = await this.api.getNewSongs();
        console.log(data)
      },
      async getRankList(){
        let {data} = await this.api.getRankList();
        console.log(data)
      },
      async getPlist(){
        let {data} = await this.api.getPlist();
        console.log(data)
      },
      async getSingers(){
        let {data} = await this.api.getSingers();
        console.log(data)
      }
    }
  }
</script>
