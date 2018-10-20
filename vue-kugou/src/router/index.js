import Vue from 'vue'
import Router from 'vue-router'

import NewSong from '@/views/new-song/new-song'
import Rank from '@/views/rank/rank'
import Test from '@/views/test/test'

import Search from '@/views/search/search'

/* import NavBar from '@/components/nav-bar/index'
import SearchBar from '@/components/search-bar' */

import { routes} from './routes'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    ...routes,
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    

    {
      path: '/search',
      name: 'Search',
      components: {
        //nav: SearchBar,
        default: Search
      }
    },

  ]
})
