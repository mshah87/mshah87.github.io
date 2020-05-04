<template>
<div class="animate">
  <Header/>
      <div class="container" id="about">  
          <div class="block">
            <div class="row">
              <div class="span4">
                <div class="content-heading"><span>nice to meet you!</span></div>
                <img class="img-left" src="../assets/IMG_5867.jpg"/>
                I'm a software engineering student at uOttawa.
                I enjoy meeting <br>new <span class = "key-word">people</span> and exploring creative <span class = "key-word">solutions</span> to difficult problems. I'm highly interested in <span class = "key-word">product</span> management and UX <span class = "key-word">design</span>.
                <br><br>
                What excites me is systems design and I enjoy discussing <br> upcoming technology trends and their effects.<br>

                <br>
                When I'm not studying or planning campus <span class = "key-word">events</span>, you can find me <br> playing <span class = "key-word">hockey</span>, watching my favorite netflix series, or painting <br> portraits 🎨 
              </div>
            </div>
          </div>
      </div>
      <div class="social">
            <a href="https://www.facebook.com/maulik.shah.c87" class="">Facebook</a>      
            <a href="https://github.com/mshah87" class="">GitHub</a>
            <a href="https://www.linkedin.com/in/maulikshah87/" class="">LinkedIn</a>
            <a href="mailto: mauliksc87@outlook.com" class="">Email</a>
      </div>
</div>
</template>

<script>
import Header from '../components/layout/Header' 

export default {
components: {
  Header
},}
</script>

<style>

.social {
    width: 100%;
    height: 100px;
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social a{
  text-decoration: none;
  color: #a5a5a5;
  padding-right: 30px;
}

.img-left {
  height: 80vh;
  box-shadow:
    15px -15px 0 -3px  #606cd3;    
  transition: box-shadow ease-in 150ms;
}

.img-left:hover {
  box-shadow:
    5px -5px 0 -5px  #606cd3,
    3px -3px 0 0 #606cd3;
}

.span4 img {
  margin-right: 150px;
}
.span4 .img-left {
  float: left;
  width: 340px;
  height: 320px;
  opacity: 0.8;
}

.span4{
  color: black;
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  margin-left:150px;
}

.block{
  margin-top: 100px;
}

.content-heading{
  color: black;
  font-size: 28px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  margin-bottom: 60px;
  overflow: hidden;
}

.content-heading span {
  padding-right: 20px;
}

img.dp {
  position: absolute;
  width: 350px;
  height: 330px;
  margin-top: 50px;
  opacity: 0.8;
  overflow: hidden;
  pointer-events: none;
}

span.key-word {
  color: #757fd8;
}

</style>