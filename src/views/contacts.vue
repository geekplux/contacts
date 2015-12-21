<template>
  <div class="contacts-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer">
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
    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="mdl-grid cards-wrapper">
        <card></card>
      </div>
    </main>
  </div>
</template>


<script>
 import Navbar from '../components/navbar.vue';
 import Card from '../components/card.vue';

 export default {
   name: 'contacts',

   components: {
     Navbar,
     Card
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
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
   -webkit-box-pack: end;
   -webkit-justify-content: flex-end;
   -ms-flex-pack: end;
   justify-content: flex-end;
   padding: 16px;
   height: 151px;
 }
 .user-avatar {
   width:48px;
   height: 48px;
   border-radius: 24px;
 }
 .contacts-avatar-dropdown {
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   position: relative;
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -webkit-flex-direction: row;
   -ms-flex-direction: row;
   flex-direction: row;
   -webkit-box-align: center;
   -webkit-align-items: center;
   -ms-flex-align: center;
   align-items: center;
   width: 100%;
 }
 .cards-container {
   max-width: 1080px;
 }
</style>
