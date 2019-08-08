<template>
    <div class="footer">

        <div class="fIcon">
            <a target="_blank" href="https://www.linkedin.com/in/laijianshin9879/"><img src="../assets/Circle Color/Linkedin.png"></a> 
            <a target="_blank" href="https://github.com/AndyPhoenix9879"><img src="../assets/Circle Color/Github.png"></a> 
            <a target="_blank" href="https://www.facebook.com/andy.lai.9879"><img src="../assets/Circle Color/Facebook.png"></a> 
            <a target="_blank" href="https://www.instagram.com/lai9879/"><img src="../assets/Circle Color/Instagram.png"></a> 
        </div><br>
        <div class="fgrid">
            
            <div>
                <router-link to="/about">About</router-link>
            </div>

            <div>
                <router-link to="/contact">Contact</router-link>
            </div>

            <div>
                <a target="_blank" href="https://github.com/AndyPhoenix9879/web_Project">Source code</a>
            </div>

        </div>
        <br><br><br>
        <div class="theBottomText">
            Developed by Lai Jian Shin.<br>
            <span style="color: #67C23A; font-weight: bolder;">vueJS</span> + 
            <span style="color: #409EFF; font-weight: bolder;">ElementUI</span> + 
            <span style="color: #FFCB2B; font-weight: bolder;">Firebase</span>
        </div>
        <!-- <img src="../../public/iris.png" style="height: 30px; margin-top: -2.5px; margin-left: -7px;"> was developed as a centralized web page for me to share my resources in a prettier way :) <br>
        -->
    </div>
</template>
<script>
export default {
    name: 'webfooter',
}
</script>
<style scoped>
.footer {
  text-align: center;
  height: 235px;
  background-color: white;
  padding: 30px 20% 30px 20%;
  box-shadow: 0px -6px 6px -2px rgba(0,0,0,0.10);
  font-size: 14px;
  color: #606266;
  width:100%;
  position: sticky;
}
.footer .fIcon {
    transform: scale(1.2);
    margin-top: -5px;
    margin-bottom: 20px;
}
.fIcon a {
    margin: 0 7px;
}
.footer img {
    height: 20px;
    padding-right: 5px;
    padding-left: 5px;
}
.fgrid {
    display: grid;
    grid-template-columns: 150px 150px 150px;
    justify-content: center;
    align-content: center;
}
.fgrid div a {
    text-decoration: none;
    color: inherit;
}
.fgrid div a:hover {
    color: #409EFF;
}
.fgrid div a:active {
    color: #F56C6C;
}
</style>

