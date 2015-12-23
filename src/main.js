import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

import App from './views/App.vue';
import authView from './views/auth.vue';
import contactsView from './views/contacts.vue';

import mdlCss from '../node_modules/material-design-lite/material.min.css';
import mdl from '../node_modules/material-design-lite/material.min.js';


Vue.use(Router);
Vue.use(Resource);

const router = new Router();

router.map({
  '/login': {
    component: authView
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

// Vue.http.options.beforeSend = function (req) {
//   req.url = 'http://localhost:8000' + req.url;
// };
Vue.http.options.crossOrigin = true;
Vue.http.options.emulateJSON = true;
