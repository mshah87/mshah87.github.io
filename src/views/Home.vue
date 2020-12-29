<template>
<div class="outer">
  <Header/>
  <Introduction/>
  <Footer/>
</div>
</template>

<script>
import Header from '../components/layout/Header' 
import Footer from '../components/layout/Footer' 
import Introduction from '../components/Introduction' 
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    Header, 
    Footer,
    Introduction,
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
.outer{
    margin-left: auto;
    margin-right: auto;
    max-width: 66.5rem;
    padding: 2.625rem 1.3125rem;
}
</style>