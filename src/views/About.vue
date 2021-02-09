<template>
<div class="outer">
  <Header/>
      <div class="container" id="about">  
          <div class="block">
            <div class="row">
              <div class="span4">
                <div class="content-heading"><span>Nice to meet you!</span></div>
                <img class="img-left" src="../assets/portrait.png"/>
                  <div class = "me">
                      <br>
                      I'm currently studying <span class = "key-word">Software Engineering</span> at the University of Ottawa.
                      I love teaching myself new concepts and diving in deep to learn how the world around us works. 
                      <br><br>When I'm not playing around with tech, you can find me <span class = "key-word">bouldering</span>, playing ice hockey, <span class = "key-word">painting</span> portraits, or reading about quantum physics.
                      <br><br>This summer, I'll be interning at <span class = "key-word">Amazon</span> as a Software Engineer on the AWS team.
                  </div>
              </div>
            </div>
          </div>
      </div>

      <div class = "about-footer">
        <div class="lets-chat">
          <a>Looking to start a project? Let's chat!</a>
        </div>
        <div class="about-social">
              <a href="mailto: mauliksc87@outlook.com" class="">Email</a>
              <a href="https://github.com/mshah87" class="">GitHub</a>
              <a href="https://www.linkedin.com/in/maulikshah87/" class="">LinkedIn</a>
              <a href="https://www.instagram.com/_maulikshah/?hl=en" class="">Instagram</a>      
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
.about-footer{
  margin-top: 20px;
}

.about-social {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-social a{
  text-decoration: none;
  padding-right: 30px;
  color: #3b4287;
}

.lets-chat{
  color: rgb(54, 54, 54);
  font-size: 25px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  font-weight: 500;
  margin-bottom: 50px;
}

.content-heading span {
  padding-right: 20px;
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

  .me{
    padding-top: 320px;
  }
}
</style>