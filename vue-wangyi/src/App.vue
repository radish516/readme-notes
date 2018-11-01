<template>
  <div id="app">
    <!-- <router-view/> -->

    <view-box>
      <x-header
        slot="header"
        class="header"
        :left-options="{showBack: false,backText: 'Back'}"
      >
        <div slot="left">直播</div>
        <div>网易</div>
        <div slot="right">搜索</div>
      </x-header>

      <sc
        :lock-y="true"
      >   
        <div class="tab">
          <tab>
            <tab-item selected>推荐</tab-item>
            <tab-item>要闻</tab-item>
            <tab-item>游戏</tab-item>
            <tab-item>科技</tab-item>
            <tab-item>娱乐</tab-item>
            <tab-item>体育</tab-item>
          </tab> 
        </div>
      </sc>

      <scroller 
        class="my-scroller"
        :on-refresh="refresh"
        refresh-text="Loading"
        :on-infinite="infinite"
        ref="myRef"
      >
        <swiper
          :list="swiperList"
          v-model="swiperIndex"
          :loop="true"
        ></swiper>

        <marquee class="my-marquee">
          <marquee-item v-for="item in marqueeList" :key="item.index">{{item.title}}</marquee-item>
        </marquee>

        <panel
          :list="dataList"
        ></panel>

        <panel
          :list="moreDataList"
        ></panel>
      </scroller>  
      
      <tabbar slot="bottom">
        <tabbar-item>
          <img src="./assets/project-icon1.jpg" slot="icon"/>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img src="./assets/project-icon2.jpg" slot="icon"/>
          <span slot="label">推荐</span>
        </tabbar-item>
        <tabbar-item>
          <img src="./assets/project-icon3.jpg" slot="icon"/>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>

    </view-box>

  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem, Tab, TabItem, Scroller as sc, Swiper, Marquee, MarqueeItem, Panel } from 'vux'

var reFreshKey = ['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B010']
var key = 0;
var start = 0;
var end = start + 9;

var keyValue = 'A';

var initLoaded = false; //初始化数据是否加载完成

function getRefreshkey() {
  key++;
  if(key == reFreshKey){
    key = 0;
  }
  keyValue = reFreshKey[key];
}

export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader,
    Tabbar, 
    TabbarItem,
    Tab, 
    TabItem,
    sc,
    Swiper,
    Marquee, 
    MarqueeItem,
    Panel
  },
  created() {
    //首屏地址 http://3g.163.com/touch/jsonp/sy/recommend/0-9.html
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data =>  {
          //首屏幻灯片数据
          this.swiperList = data.focus.filter(item => {
            return item.addata === null && item.picInfo[0];
          }).map(item =>{
            return {
              url: item.link,
              img: item.picInfo[0].url,
              title: item.title
            }
          })

          //滚动新闻数据
          this.marqueeList = data.live.filter(item => {
            return item.addata === null && item.picInfo[0];
            return {
              title: item.title
            }
          })

          //首屏新闻列表数据
          this.dataList = data.list.filter(item => {
            return item.addata === null && item.picInfo[0];
          }).map(item => {
            return {
              src: item.picInfo[0].url,
              title: item.title,
              desc: item.digest,
              url: item.link
            }
          })

          initLoaded = true;

          //console.log(this.swiperList)
        });
  },
  data() {
    // var dataList = [];
    // for(var i=0;i<10;i++){
    //   dataList.push({
    //     src: 'http://somedomain.somdomain/x.jpg',
    //     title: '标题一',
    //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
    //   })
    // }
    return {
      swiperList: [],
      swiperIndex: 0,
      dataList: [],
      marqueeList: [],
      moreDataList: []
    }
  },
  methods: {
    refresh() {
      //console.log(111)
      getRefreshkey();
      //下拉刷新数据接口
      this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',{
        miss: '00',
        refresh: keyValue
      }).then(data => {
        //console.log(data);
        //console.log(this.$refs.myRef);

        //首屏新闻列表数据
        this.dataList = data.list.filter(item => {
          return item.addata === null && item.picInfo[0];
        }).map(item => {
          return {
            src: item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        })
        //实例对象上才能阻止转圈
        this.$refs.myRef.finishPullToRefresh();
        //提示组件ToastPlugin，vux组件
        this.$vux.toast.text(`本次共刷新${this.dataList.length}条数据`,'top');
      })
    },
    infinite() {
      if(!initLoaded){
        this.$refs.myRef.finishInfinite();
        return;
      }
      //console.log(2222)
      //上拉加载更多数据
      this.$jsonp(`http://3g.163.com/touch/jsonp/sy/recommend/${start}-${end}.html`,{
        miss: '00',
        refresh: keyValue
      }).then(data => {

        //上拉加载更多
        setTimeout(() => {
          this.moreDataList = data.list.filter(item => {
            return item.addata === null && item.picInfo[0];
          }).map(item => {
            return {
              src: item.picInfo[0].url,
              title: item.title,
              desc: item.digest,
              url: item.link
            }
          });

          start += 10;
          end = start +9;
          this.$refs.myRef.finishInfinite();
        },1000)

      })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height:  100%;
  overflow-x: hidden;
}
#app {
  height: 100%;
  overflow-y: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9;
}
.tab{}
.my-scroller{
  top: 90px !important;
}
.loading-layer {
  padding-bottom: 90px;
}
.my-marquee{
  margin: 10px;
}
.weui-media-box__hd, .weui-media-box__hd img{
  width: 102px !important;
  height: 78px !important;
}
.weui-media-box__bd{
  height: 78px !important;
}
</style>
