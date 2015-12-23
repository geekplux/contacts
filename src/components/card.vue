<template>
  <div class="contact-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{contact.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{contact.phone}}
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        View More
      </a>
    </div>
  </div>
</template>


<script>
 export default {
   name: 'Card',

   props: ['contact'],
   ready() {
     console.log(this.contact);
   }
 }
</script>


<style lang="less">
 .contact-card {
   height: 300px;
   margin: 5px;
 }

 .contact-card {
   .mdl-card__title {
     color: #fff;
     background:
     url('../assets/images/contact-demo.jpg') bottom right 15% no-repeat #46B6AC;
     background-size: 100%;

     .mdl-card__title-text {
       text-shadow: 0 1px rgba(0,0,0,0.2);
     }
   }

 }
</style>
