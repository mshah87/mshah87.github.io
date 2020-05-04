<template>
<div class="animate">
  <Header/>
  <Introduction/>
  <div class="mainContentContainer">
      <Card/>
      <Card/>
  </div>
  <Footer/>
</div>
</template>

<script>
import Header from '../components/layout/Header' 
import Footer from '../components/layout/Footer' 
import Introduction from '../components/Introduction' 
import Card from '../components/Card' 
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    Header, 
    Footer,
    Introduction,
    Card
  }, mounted(){
        $(document).ready(function() {
            $(".contentContainer").hover(function () {
            $(this).find(".label1").toggleClass("label1hover");
            $(this).find(".label3").toggleClass("label3hover");
            $(this).find(".image1").toggleClass("image1Hover");
            $(this).find(".imageContainer").toggleClass("imageContainerHover");
            })
     });
}}
</script>

<style>
@import '../assets/styles/customstyle.css';
.mainContentContainer {
    width: 100%;
    height: auto;
}

</style>
