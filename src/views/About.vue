<template>
<div class="outer">
  <Header/>
      <div class="container" id="about">  
          <div class="block">
            <div class="row">
              <div class="span4">
                <div class="content-heading"><span>nice to meet you!</span></div>
                <img class="img-left" src="../assets/portrait.png"/>
                  <div class = "me">
                      I'm a software engineering student at uOttawa.
                      I enjoy meeting new <span class = "key-word">people</span> and exploring creative <span class = "key-word">solutions</span> to difficult problems. I'm highly interested in <span class = "key-word">product</span> management and UX <span class = "key-word">design</span>.
                      <br><br>
                      What excites me is systems design and I enjoy discussing upcoming technology trends and their effects.<br>

                      <br>
                      When I'm not studying or planning campus <span class = "key-word">events</span>, you can find me playing <span class = "key-word">hockey</span>, watching my favorite netflix series, or painting portraits 🎨 
                  </div>
              </div>
            </div>
          </div>
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
.img-left {
  height: 80vh;
  box-shadow:
    15px -15px 0 -3px  #606cd3;    
  transition: box-shadow ease-in 150ms;
  border-radius: 15px;
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
  width: 360px;
  height: 340px;
  opacity: 0.8;
}

.span4{
  color: #2b2b2b;
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.block{
  margin-top: 100px;
}

.content-heading{
  color: #3b4287;
  font-size: 23px;
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


@media only screen and (max-width: 414px) {
  .span4{
      margin-left: 10px;
      margin-right: 0;
    }

  .span4 img {
      margin: auto;
  }

  .span4 .img-left {
      width: 310px;
      height: 290px;
      margin-bottom: 30px;
  }

  .social.chat a {
    font-size: 20px;
  }

  .about-footer{
    margin-left: 27px;
  }

  .me{
    padding-top: 320px;
  }
}

</style>