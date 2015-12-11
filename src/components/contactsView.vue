<template>
  <div class="contacts-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="contacts-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Contacts</span>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" id="search">
            <label class="mdl-textfield__label" for="search">Enter your query...</label>
          </div>
        </div>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
          <i class="material-icons">more_vert</i>
        </button>
        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
          <li class="mdl-menu__item">About</li>
          <li class="mdl-menu__item">Contact</li>
          <li class="mdl-menu__item">Legal information</li>
        </ul>
      </div>
    </header>
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
</style>
