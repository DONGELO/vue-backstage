import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vue3.0版本
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)

// 引入全局ElementUI 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 引入scss样式
import '@/styles/main.scss';

// 引入svgIcon
import '@/svgIcon'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
