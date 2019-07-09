<template>
  <div id="app">
    <div id="nav">

      <div class="navEmblem">
        <b> Lai's Webpage </b>
      </div>

      <div class="navItem">
        <router-link to="/home">Home</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/about">About</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/asf">Profile</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/contact">Contact Me</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/af">Resources</router-link> 
      </div>

    </div>

    <div class="bg">
    </div>
    <router-view/>
  </div>
</template>
<style>
.bg {
  position: absolute;
  top: 0;
  z-index: -99999;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
}
.mainContainer {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 35px 20% 20px 20%;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -999;
}
.Card {
  border-radius: 20px;
  padding: 30px 100px 30px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
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
  padding: 20px;
  background-color: white;
  box-shadow: 0px 6px 6px -2px rgba(0,0,0,0.10);
  position: sticky;
  position:-webkit-sticky;
  display: flex;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #303133;
    transition: linear 0.2s;
    &.router-link-exact-active {
      color: #67C23A;
      transition: linear 0.2s;
    }
  }
}
.navEmblem {
  width: 100%;
  margin-left: 50px;
}
.navItem {
  text-align: right;
  width: 100%;
  a {
    padding: 0 15px 0 15px;
  }
}
</style>
