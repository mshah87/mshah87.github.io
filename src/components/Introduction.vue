<template>
    <div class="hero">
      <div class="container hero-component" >
        <div class="hero__title">
            <a class ="hello">Heyo! I'm Maulik.</a> <br>
            <div class= "intro">I'm a developer and product designer based in Toronto. </div> 
            <a class = "position"> Formerly SWE Intern <span class = "company"> @ Scotiabank.</span></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

@import '../assets/styles/customstyle.css';

.hero__title {
  position: relative;
  max-width: 840px;
  margin-top: 2em;
  margin-bottom: 3.5em;
  letter-spacing: -1px;
  line-height: 1.7;
  font-size: 31px;
}

.hero__title a {
  text-decoration: none;
  pointer-events: none;
}

.hello{
  font-size: 2.2em;  
  font-weight: 600;
  color: #636262;
}

.intro {
  font-size: 1em;
  font-weight: 500;
  color: #a5a7a8;
}

.position{
  font-size: 1em;
  font-weight: 500;
  color: #a5a7a8;
}

.company{
  font-weight: 500;
  color: #5a63b3;
}
</style>
