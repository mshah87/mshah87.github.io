<template>
<section>
  <div class="row">
     <div class = "col left-info">
       <h2>Hello 👋</h2>
       <div class = "intro">
         <h2>
           I'm a developer and product designer based in Toronto. I enjoy meeting new people and exploring creative solutions to real-world problems.
         </h2>
         <p>
           Incoming Software Engineering Intern at Amazon!
         </p>
          <div class="social-media">
            <a href="mailto: mauliksc87@outlook.com" class="">Email</a>
            <a href="https://github.com/mshah87" class="">GitHub</a>
            <a href="https://www.linkedin.com/in/maulikshah87/" class="">LinkedIn</a>
            <a href="https://www.instagram.com/_maulikshah/?hl=en" class="">Instagram</a>      
          </div>
    </div>
     </div>

    <div class = "col right-info">
      <h2>Projects.</h2>
      <Card/>
    </div>
  </div>
</section>
</template>

<script>
import Card from './Card' 

export default {
  name: 'App',
   components: {
    Card
  }
}
</script>

<style>
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: rgb(32, 32, 32);
}

.col{
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1;
}

.left-info{
  padding-right: 10%;
}

h2{
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.intro h2{
  margin-bottom: 5%;
  line-height: 1.8;
  font-weight: 500;
  margin-top: 0;
}

.intro p{
  font-size: 18px;
  padding-bottom: 20px;
}

.social-media {
    height: 60px;
    display: flex;
    align-items: center;
}

.social-media a{
  text-decoration: none;
  padding-right: 30px;
  color: #3b4287;
}
</style>