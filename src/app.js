import Vue  from 'vue';

Vue.component('home', require('./components/Home.vue'));

const app = new Vue({
    el: '#app'
});
