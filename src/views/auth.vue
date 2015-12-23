<template>
  <div class="container contacts-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
    <form class="login-wrapper">
      <div class="mdl-textfield mdl-js-textfield input-wrapper">
        <input class="mdl-textfield__input" type="text" name="username" id="username" v-model="username">
        <label class="mdl-textfield__label" for="username">Username</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield input-wrapper">
        <input class="mdl-textfield__input" type="password" name="password" id="password" v-model="password">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <div class="input-wrapper agree-wrapper">
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
          <input type="checkbox" id="agree" class="mdl-checkbox__input" checked>
          <span class="mdl-checkbox__label"> I agree term of this websit.</span>
        </label>
      </div>
      <div class="btn-group">
        <button class="btn btn-signup mdl-button mdl-js-button mdl-button--primary" @click="signup">
          Signup
        </button>
        <button class="btn btn-submit mdl-button mdl-js-button mdl-button--accent" @click="login">
          OK
        </button>
      </div>
    </form>
  </div>
</template>


<script>

 export default {
   name: 'auth',

   data () {
     return {
       username: '',
       password: ''
     }
   },
   methods: {
     signup: function () {
       console.log('redirect to signup or replace login view');
     },
     login: function () {
       event.preventDefault();

       this.$http.post('http://localhost:8000/login', {
         username: this.username,
         password: this.password
       }).then(function (res) {
         if (!res.data.userId) return;
         localStorage.setItem('userId', res.data.userId);
         this.redirect('contacts');
       });
     },
     redirect: function (path) {
       this.$route.router.go(path);
     }
   },

 }
</script>


<style lang="less">
 .container {
   background: url("../assets/images/background.jpg") no-repeat left center;
   background-size: 100%;
 }

 .login-wrapper {
   width: 300px;
   margin: 200px auto;
 }

 .btn-group,
 .agree-wrapper {
   margin-top: 20px;
 }

 .btn-group {
   .btn {
     width: 100px;
   }
 }

 .btn-signup {
   float: left;
   margin-left: 20px;
 }
 .btn-submit {
   float: right;
   margin-right: 20px;
 }
</style>
