import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'


//FastClick的ios点击穿透解决方案
FastClick.prototype.focus = (targetElement) => {
  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.focus();
      targetElement.setSelectionRange(length, length);
  } else {
      targetElement.focus();
  }
}
FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
