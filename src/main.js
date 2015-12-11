import Vue from 'vue';
import Router from 'vue-router';
import App from './views/App.vue';
import loginView from './views/login.vue';
import contactsView from './views/contacts.vue';
import mdlCss from '../node_modules/material-design-lite/material.min.css';
import mdl from '../node_modules/material-design-lite/material.min.js';


Vue.use(Router);

const router = new Router();

router.map({
  '/login': {
    component: loginView
  },
  '/contacts': {
    component: contactsView
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/contacts'
});

router.start(App, '#app');
