
import {createRouter,createWebHashHistory} from 'vue-router';
import HomePage from "./../pages/HomePage";
import LiveDraw from "./../pages/LiveDrawPage";
import AuthPage from "./../pages/AuthPage"

// const HomeComponent = { template: HomePage }



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/auth', component: AuthPage },
    { path: '/home', component: HomePage },
    { path: '/live', component: LiveDraw },
]
export const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
