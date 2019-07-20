<template>
<div>
  <div class="mainContainer">

    <div class="aboutTitle"><b>A Fun Experiment...</b></div>
    <span style="font-size:30px">
      that's all there is to this website. And more of course. But I developed this website
      as a "playground" for me to explore and learn web development using a framework (Vue.JS).
      <br><br>
      Beyond that, the content here is for me to share resources in a centralized and easy to access
      manner - and these resources ranges anywhere from academic to stuffs I think would be helpful or
      interesting or just really cool. 
    </span>
    
  </div>

  <webfooter/>

</div>
</template>

<script>
import webfooter from './footer'
export default {
  components: {
    webfooter
    }
}
</script>

<style scoped>
.mainContainer {
  margin: 150px 0 180px 0;
  min-height:470px;
}
.aboutTitle {
  font-size: 100px;
}
</style>
