<template>
    <div class="footer">

            <div class="fIcon">
                <a target="_blank" href="https://www.linkedin.com/in/laijianshin9879/" rel="noreferrer"><img alt="linkedin icon" src="../assets/Circle Color/Linkedin.png"></a> 
                <a target="_blank" href="https://github.com/AndyPhoenix9879" rel="noreferrer"><img alt="github icon" src="../assets/Circle Color/Github.png"></a> 
                <a target="_blank" href="https://www.facebook.com/andy.lai.9879" rel="noreferrer"><img alt="facebook icon" src="../assets/Circle Color/Facebook.png"></a> 
                <a target="_blank" href="https://www.instagram.com/lai9879/" rel="noreferrer"><img alt="instagram icon" src="../assets/Circle Color/Instagram.png"></a> 
            </div>
            <div class="fgrid">
                
                <div>
                    <el-popover
                        placement="top"
                        title="Iris"
                        trigger="click">
                        <p>In greek mythology, Iris was the Goddess of rainbow and the messenger of the Gods. <br><br>The colour scheme and design approach
                        I went with was in hoping to stay true to the Goddess' title of Goddess of rainbow. The design is also inspired
                        from Google's material approach, albeit very toned down as one can see the webpage is designed very minimally.  <br><br>
                        Resources I found nice and useful from whatever sources I got them from will be hosted here (which stays true to Iris' other title -
                        being a messenger to the Gods). <br><br>Iris was an experimental web project I decided to partake in to learn and play with the multitude of
                        features found in a framework - and especially in vueJS. Thanks for visiting it!</p>
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
                    <a target="_blank" href="https://github.com/AndyPhoenix9879/web_Project" rel="noreferrer">Source code</a>
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
        <!-- <img src="../../public/iris.png" style="height: 30px; margin-top: -2.5px; margin-left: -7px;"> was developed as a centralized web page for me to share my resources in a prettier way :) <br>
        -->
</template>
<script>
export default {
    name: 'webfooter'
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
}
.footer .fIcon {
    transform: scale(1.2);
    margin-top: -5px;
    margin-bottom: 20px;
}
.fIcon {
    width: 180px;
    text-align: center;
    margin: auto;
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
  .fgrid {
    grid-template-columns: 100px 100px 100px 100px;
  }
}
@media screen and (max-width: 420px) {
  .fgrid {
      grid-template-columns: 75px 75px 75px 75px;
  }
}
</style>

