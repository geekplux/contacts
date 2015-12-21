<template>
  <div class="contacts-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <navbar></navbar>
    <div class="contacts-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
      <header class="contacts-drawer-header">
        <img src="../assets/images/user.jpg" class="user-avatar">
        <div class="contacts-avatar-dropdown">
          <span>hello@example.com</span>
          <div class="mdl-layout-spacer"></div>
          <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i class="material-icons" role="presentation">arrow_drop_down</i>
            <span class="visuallyhidden">Accounts</span>
          </button>
          <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
            <li class="mdl-menu__item">hello@example.com</li>
            <li class="mdl-menu__item">info@example.com</li>
            <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>


<script>
 import Navbar from '../components/navbar.vue';

 export default {
   name: 'contacts',

   components: {
     Navbar
   },

   ready () {
     const userId = localStorage.getItem('userId');
     if (!userId) this.$route.router.go('login');
   }
 };

</script>


<style lang="less">
 .contacts-drawer-header {
   box-sizing: border-box;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   flex-direction: column;
   -webkit-box-pack: end;
   justify-content: flex-end;
   height: 151px;
   padding: 16px;
 }
 .user-avatar {
   width:48px;
   height: 48px;
   border-radius: 24px;
 }
 .contacts-avatar-dropdown {
   display: flex;
   position: relative;
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   flex-direction: row;
   -webkit-box-align: center;
   align-items: center;
   width: 100%;
 }
</style>
