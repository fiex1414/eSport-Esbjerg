import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-133359319-4'
})

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
