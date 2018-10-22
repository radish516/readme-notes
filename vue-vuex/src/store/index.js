import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义store
//vuex中的状态是响应的
let store = new Vuex.Store({
	state: {
		count: 10 //定义一个状态
	},
	mutations: {
		updatedCount(state,payload) {
			state.count += payload.add;
		}
	}
})

export default store