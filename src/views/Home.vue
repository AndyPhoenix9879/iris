<template>
<div class="bg">

  <div class="mainContainer">

    <div class="Card">
      
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="Card2">

    </div>

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
.bg {
  width: auto;
  height: auto;
  background-color: #F2F6FC;
}
.mainContainer {
  padding: 20px 20% 20px 20%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: auto;
}
.Card {
  padding: 10px;
  width: 400px;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
}
.Card2 {
  padding: 10px;
  width: 560px;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  
}
</style>

