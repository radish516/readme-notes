<template>
  <div>
    我是hello
    <p>{{$store.state.count}}</p>
    <button @click="changeCount">改变count+30</button>
  </div>
</template>

<script>
	export default{
		methods: {
			changeCount(){
				this.$store.commit('updatedCount',{
					add: 30
				})
			}
		}
	}

</script>