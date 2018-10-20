<template>
  <div>
    <mt-cell class='song-cell' v-for="item in 100" :key="item" title="标题"  is-link></mt-cell>
  </div>
</template>
<script>
import {getNewSongs} from '@/server'
    export default {
        name: 'Search'
    }
</script>