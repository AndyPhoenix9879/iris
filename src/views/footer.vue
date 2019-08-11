<template>
    <div class="footer">

        <div class="fir" @click="unshowAll">
        </div>

        <div class="sec">
            <div class="fIcon" @click="unshowAll">
                <a target="_blank" href="https://www.linkedin.com/in/laijianshin9879/"><img src="../assets/Circle Color/Linkedin.png"></a> 
                <a target="_blank" href="https://github.com/AndyPhoenix9879"><img src="../assets/Circle Color/Github.png"></a> 
                <a target="_blank" href="https://www.facebook.com/andy.lai.9879"><img src="../assets/Circle Color/Facebook.png"></a> 
                <a target="_blank" href="https://www.instagram.com/lai9879/"><img src="../assets/Circle Color/Instagram.png"></a> 
            </div>
            <div class="fgrid">
                
                <div>
                    <el-popover
                        placement="top"
                        title="Iris"
                        trigger="click">
                        <p>In greek mythology, Iris was the goddess of rainbow and the messenger of the Gods. <br><br>This webpage aims
                        to impersonify those attributes. The design I implemented hopes to give off a colourful and friendly look, and the
                        content I hope would be a good repository of resources that we all could search and find easier</p>
                        <button @click="showAbt" id="abt" slot="reference">About</button>
                    </el-popover>
                </div>

                <div>
                    <el-popover
                        placement="top"
                        title="Contact"
                        trigger="click">
                        <p>Mobile Tel : +852 69949398<br>
                        Email : <a href="Lai9879m@gmail.com">Lai9879m@gmail.com</a></p>
                        <button @click="showContact" id="cntct" slot="reference">Contact</button>
                    </el-popover>
                </div>

                <div>
                    <a target="_blank" href="https://github.com/AndyPhoenix9879/web_Project">Source code</a>
                </div>

                <div>
                    
                    <el-popover
                        placement="top"
                        title="Legend"
                        trigger="click">
                        <p>WEB</p>
                        <button @click="showLegend" id="legend" slot="reference">Legend</button>
                    </el-popover>
                </div>

            </div>
            <div class="theBottomText" @click="unshowAll">
                Developed by Lai Jian Shin.<br>
                <span style="color: #67C23A; font-weight: bolder;">vueJS</span> + 
                <span style="color: #409EFF; font-weight: bolder;">ElementUI</span> + 
                <span style="color: #FFCB2B; font-weight: bolder;">Firebase</span>
            </div>
        </div>

        <div class="thir" @click="unshowAll">
        </div>
        <!-- <img src="../../public/iris.png" style="height: 30px; margin-top: -2.5px; margin-left: -7px;"> was developed as a centralized web page for me to share my resources in a prettier way :) <br>
        -->
    </div>
</template>
<script>
export default {
    name: 'webfooter',
    data() {
        return {
        }
    },
    methods: {
        showAbt() {
            var target = $("#abt");
            target.hasClass("shown")? target.removeClass("shown") : target.addClass("shown");
            var otarget = $("#legend , #cntct")
            otarget.hasClass("shown")? otarget.removeClass("shown") : otarget.addClass("");
        },
        showContact() {
            var target = $("#cntct");
            target.hasClass("shown")? target.removeClass("shown") : target.addClass("shown");
            var otarget = $("#legend , #abt")
            otarget.hasClass("shown")? otarget.removeClass("shown") : otarget.addClass("");
        },
        showLegend() {
            var target = $("#legend");
            target.hasClass("shown")? target.removeClass("shown") : target.addClass("shown");
            var otarget = $("#abt , #cntct")
            otarget.hasClass("shown")? otarget.removeClass("shown") : otarget.addClass("");
        },
        unshowAll() {
            var otarget = $("#legend, #cntct, #abt");
            
            otarget.hasClass("shown")? otarget.removeClass("shown") : otarget.addClass("");
            
        }
    }
}
</script>
<style scoped>
.footer {
  text-align: center;
  height: 230px;
  background-color: white;
  padding: 30px 0 30px 0;
  box-shadow: 0px -6px 6px -2px rgba(0,0,0,0.10);
  font-size: 14px;
  color: #606266;
  width:100%;
  position: sticky;
  display: grid;
  grid-template-columns: 35% 30% 35%;
}
.footer .fIcon {
    transform: scale(1.2);
    margin-top: -5px;
    margin-bottom: 20px;
}
.fIcon {
    padding-bottom: 30px;
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
    grid-template-columns: 150px 150px 150px 150px;
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
.fgrid div button {
    border: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
}
.fgrid div button:hover {
    color: #F56C6C;
    cursor: pointer;
}
.fgrid div button:active {
    color: #F56C6C;
}
.theBottomText {
    padding-top: 60px;
}
#abt.shown {
    color: #F56C6C;
    font-weight: bolder;
}
#cntct.shown {
    color: #F56C6C;
    font-weight: bolder;
}
#legend.shown {
    color: #F56C6C;
    font-weight: bolder;
}
@media screen and (max-width: 970px) {
  .footer {
      grid-template-columns: 20% 60% 20%;
  }
  .fgrid {
    grid-template-columns: 100px 100px 100px 100px;
  }
}
@media screen and (max-width: 585px) {
  .footer {
      grid-template-columns: 15% 70% 15%;
  }
}
@media screen and (max-width: 488px) {
  .footer {
      grid-template-columns: 10% 80% 10%;
  }
}
</style>

