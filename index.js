import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import httpVueLoader from "/web_modules/http-vue-loader/src/httpVueLoader.js";
import VueTypeIt from "/plugins/typeit.js";
import VueRemarkable from "/plugins/remarkable.js";

Vue.use(VueRemarkable);
Vue.use(VueTypeIt);
Vue.use(httpVueLoader);

new Vue({
  el: "#app",
  test: 1,
  components: {
    app: "url:./components/app.vue",
    webcam: "url:./components/webcam.vue"
  },
  template: "<app></app>"
});
