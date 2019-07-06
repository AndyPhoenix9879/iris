<template>
  <div id="app">
    <div id="nav">

      <div class="navEmblem">
        <b> Lai's Webpage </b>
      </div>

      <div class="navItem">
        <router-link to="/home">Home</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/about">About</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/asf">Resources</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/asfasf">Test</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/af">Test2</router-link> 
      </div>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
