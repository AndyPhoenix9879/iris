<template>
<div class="bg">

  <div class="mainContainer">

    <div class="Card">
      <h1>Hey!</h1>
      <p>Welcome to my webpage. Some brief introduction to myself: <br>~<br> My name is Lai Jian Shin, I'm a student in the Chinese University of Hong Kong
        pursuing a degree in Computer Science and expected to graduate in the year 2022. I'm an international student, from Brunei Darussalam (it's an independent country
        somewhere at the northern coast of Borneo Island). I have a passion for technology (mostly on mobile and processor), photography and software development. My experience
        in programming language inclues C, VB.NET, Python and Javascript. <br>~<br>
        Feel free to contact me if you wish, and thanks for visiting my webpage!
      </p>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

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
  padding: 50px 100px 50px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
}

</style>

