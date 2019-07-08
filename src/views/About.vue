<template>
  <div class="mainContainer">
    
    <div class="Card">
      <h1>About...</h1>
    </div>
    <br>
    <div class="Card">
      <p>Welcome once again! This webpage aims to be my playground in learning more on the VueJS framework as well as diving deeper into Web Development. 
        I would also be showing resources (usually academic) I found on the web and sharing it here on this website. My CV will also be displayed and updated
        on this website. 
        <br><br>
        There is nothing more to this website than a display of what I have learnt and decided to implement as my own website. I hope to also consolidate a uniform
        design language across most of the projects I develop, and this website would be a display of that design language too.
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
