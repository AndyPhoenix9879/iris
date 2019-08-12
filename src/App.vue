<template>
  <div id="app">
    <div id="nav" style="z-index: 9999;">

      <div class="navEmblem">
        <a href=""><img src="../public/iris.png"></a>
      </div>
      <!--
      <div class="navItem">
        <router-link to="/">Home</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/about">About</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/portfolio">Portfolio</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/downloads">Downloads</router-link> 
      </div>
      -->
    </div>
    
    <router-view/>
    
  </div>
</template>
<script>

export default {

}
</script>

<style>
.el-popover {
  max-width: 450px !important;
  word-break: normal !important;
  padding: 25px 25px 10px 25px !important;
}
.mainContainer {
  padding: 0 20% 20px 20%;
  width: 100%;
  height: 100%;
}
.Card {
  border-radius: 20px;
  margin-top: 20px;
  padding: 30px 100px 30px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
}

@media screen and (max-width: 970px) {
  .footer {
    padding: 30px 10% 200px 10%;
  }
  .mainContainer {
    padding: 0 10% 20px 10%;
  }
  .fgrid {
    grid-template-columns: 50px 50px 50px 50px;
  }
  .traylist i {
    margin-left: 15px !important;
  }
}
</style>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  background-color: white;
  box-shadow: 0px 6px 6px -2px rgba(0,0,0,0.10);
  position: sticky;
  position:-webkit-sticky;
}
.navEmblem {
  width: 100%;
  text-align: center;
}
.navEmblem img {
  height: 50px;
  transition: linear 0.05s;
}
.navEmblem img:active {
  transition: linear 0.05s;
  transform: scale(0.8);
}
/*.navItem {
  text-align: right;
  width: 100%;
  a {
    padding: 0 15px 0 15px;
  }
}*/

</style>
