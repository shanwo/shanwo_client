import Vue from 'vue'
import Vuex from 'vuex'
import shanDetail from './modules/home/shanDetail.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	modules: {
	    shanDetail
	},
	mutations: {}
})