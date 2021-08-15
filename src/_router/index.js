import Vue from 'vue'
import VueRouter from 'vue-router'

const loadComponent = path => () => import(`@/views/${path}.vue`);

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: loadComponent('Home')
	},
	{
		path: '/users',
		name: 'Users',
		component: loadComponent('Users'),
	},
	{
		path: '/users/:userTitle',
		name: 'UserProfile',
		component: loadComponent('UserProfile')
	},
	{
		path: '/about-us',
		name: 'About',
		component: loadComponent('About')
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: loadComponent('Contacts')
	},
	
	{ path: '*', redirect: '/' }
	
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})



export default router
