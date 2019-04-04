import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import * as filters from './filters' // 全局过滤器
import './styles/index.scss'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
