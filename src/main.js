// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nav from '@/components/MainNav'
import mailchimp from '@/components/Mailchimp'
import pageHeader from '@/components/Header'
import page from '@/components/Page'

require('tachyons')

Vue.config.productionTip = false
Vue.component('main-nav', nav);
Vue.component('mailchimp', mailchimp);
Vue.component('page-header', pageHeader);
Vue.component('page', page);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
