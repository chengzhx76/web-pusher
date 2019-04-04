import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { routers } from './router';

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

const router = new VueRouter(RouterConfig);

export default router
