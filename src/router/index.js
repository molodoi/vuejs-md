import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
		default: HelloWorld,
		sidebar: Sidebar
	}
    }
  ]
})
