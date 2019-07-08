<template>
  <div class="mainContainer">
    
    <div class="Card">
      <h1>About this website</h1>
    </div>
    <br>
    <div class="Card">
      <p>
        
        <el-divider></el-divider>
        This website is the culmination of everything I have learnt in Vue.JS, web development and UI design. This website can be regarded as my playground project
        where I play with whatever there is to play around with in Web Development. Other than that, I will use this as my platform to share stuffs I think is either helpful
        or cool around the web as well as a CV profile tab just for the sake of it. Enjoy!
        <el-divider></el-divider>
        
      </p>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.mainContainer {
  flex-direction: column;
}
.Card {
  border-radius: 20px;
  padding: 30px 100px 30px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
}
</style>
