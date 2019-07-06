<template>
  <div class="mainContainer">

    <div class="Card">
      
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="Card2">

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //add whatever component name you'll have here
  }
}
</script>

<style scoped>
.mainContainer {
  margin: 20px 20% 20px 20%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: auto;
}
.Card {
  padding: 10px;
  flex: 2;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
}
.Card2 {
  padding: 10px;
  flex: 1;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  
}
</style>

