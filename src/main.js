import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import loginView from './components/loginView.vue';
import contactsView from './components/contactsView.vue';
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

router.start(App, '#app');
