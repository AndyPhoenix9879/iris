<template>
    <div class="footer">

        <div class="fir">
        </div>

        <div class="sec">
            <div class="fIcon">
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
                        <p>In greek mythology, Iris was the goddess of rainbow and the messenger of the Gods. <br><br>I hoped to be able
                        to bring out that rainbow-ness that is true to Iris's title on this webpage, and with a little bit of my own
                        obsession with using box-shadows in the design process as well lol. <br><br>Resources I found nice and useful from
                        whatever sources I got them from will be hosted here. This was just an experiment project I thought would
                        be fun to make - and it was!</p>
                        <button id="abt" slot="reference">About</button>
                    </el-popover>
                </div>

                <div>
                    <el-popover
                        placement="top"
                        title="Contact"
                        trigger="click">
                        <p>Mobile Tel : +852 69949398<br>
                        Email : <a href="Lai9879m@gmail.com">Lai9879m@gmail.com</a></p>
                        <button id="cntct" slot="reference">Contact</button>
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
                        <p>
                            WEB = Webpage<br>
                            GDRIVE = Google Drive<br>
                            PDF = PDF<br>
                            TOR = Torrent file<br>
                            DOCX = MS Word file<br>
                            PIC = Picture, usually JPG
                        </p>
                        <button id="legend" slot="reference">Legend</button>
                    </el-popover>
                </div>

            </div>
            <div class="theBottomText">
                Developed by Lai Jian Shin.<br>
                <span style="color: #67C23A; font-weight: bolder;">vueJS</span> + 
                <span style="color: #409EFF; font-weight: bolder;">ElementUI</span> + 
                <span style="color: #FFCB2B; font-weight: bolder;">Firebase</span>
            </div>
        </div>

        <div class="thir">
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
        
    }
}
</script>
<style scoped>
.footer {
  text-align: center;
  height: 250px;
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
.fgrid div a:focus {
    color: #F56C6C;
    font-weight: bolder;
}
.fgrid div button {
    border: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
    background-color: white;
}
.fgrid div button:hover {
    color: #F56C6C;
    cursor: pointer;
}
.fgrid div button:focus {
    color: #F56C6C;
    font-weight: bolder;
}
.theBottomText {
    padding-top: 60px;
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
@media screen and (max-width: 420px) {
  .footer {
      grid-template-columns: 10% 80% 10%;
  }
  .fgrid {
      grid-template-columns: 75px 75px 75px 75px;
  }
}
</style>

