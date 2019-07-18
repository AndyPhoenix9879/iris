<template>
  <div id="app">
    <div id="nav" style="z-index: 1;">

      <div class="navEmblem">
        <b> Derpy Web </b>
      </div>

      <div class="navItem">
        <router-link to="/">Home</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/about">About</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/portfolio">Portfolio</router-link> <el-divider direction="vertical"></el-divider>
        <router-link to="/downloads">Downloads</router-link> 
      </div>

    </div>

    <router-view/>
  </div>
</template>
<script>

export default {

}
</script>

<style>
.mainContainer {
  padding: 0 20% 20px 20%;
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 620px;
}
.Card {
  border-radius: 20px;
  margin-top: 20px;
  padding: 30px 100px 30px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  min-width: 800px;
}
.footer {
  height: 250px;
  background-color: white;
  padding: 30px 20% 30px 20%;
  box-shadow: 0px -6px 6px -2px rgba(0,0,0,0.10);
  font-size: 14px;
  color: #606266;
  min-width: 800px;
  width:100%;
}
.footer img {
    height: 20px;
    padding-right: 5px;
    padding-left: 5px;
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
  min-width: 800px;
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
  min-width: 0px;
}
.navItem {
  text-align: right;
  width: 100%;
  a {
    padding: 0 15px 0 15px;
  }
  min-width: 550px;
}
</style>
