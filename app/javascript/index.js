import Vue from 'vue';
import Hello from './hello.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(Hello).$mount('#app');
});
