<template>
<div>
  <div class="mainContainer">
    <!--<img src="https://lh3.googleusercontent.com/NCc9IaUzUjeSFdmojUDTpTT1AqIAgrd5Ofur2pOq_A0FaERD9AntjMkh5Ij_LyRCulqr1hWffsmMH2Xx83IuE8njJow8yI_NHVIrCCUdgMSU5TyU8vVu1mFEFdLX5wree-xAnY7NKi6r14Ll66mUSpGxyrVV14fwuxzO-G36OwGrqz3J3DiQfYn1e99GJxPiv5jZRVXs_D2hGF48iOXRdkWWyngSCsujIckMndQSmap9SUmWfeI7HylrmQJWh-OE-4DSbPPlxMwEMaL-KnhhME-J2n7iFSHRo044JmHxHO9qov07rw_w6PHL6IN6DfntTB9uVwWbRTft0rSsHNQ0FAAioJ8UTDIREEfWUjW4xcWqWHVSA4FNoZnQym87KSC9jSgphfeJbNPgm-vnsRKQp_ZA6eQ5SeoEwVI1RLNNVRIhL00HZmavdOsFYgEXmtxv8LW-2YgHXtMSsoWxMiFbJ_kLX1kFU7-v_dCjzhF7z5JyoZSn2YMI_LPiKsE9MLrj4jZVFzQEhYQMhrO-EyI0P02r8cWFqLY1OCOFuaIdpHm5_8XaLHwJMaS2YwTHlj5kpTzuuFE5-0cUHhWhyIE5lPttc5-vmIN5NqdLn69h7ecPRcwDx4DEII29JikXjkFd6efh4v03vBCTujnpqHpcpgy7Ijdkd33-=w3342-h1878-no"
    style="width:100%; height:100%; position:fixed; z-index:-9999; top:0; min-width: 1000px;">-->
    <div class="Derp">
      <br>
      <span id="head"><b>Derpy Web</b></span><br>
      because there will always be a fun side to everything<br><br>


    </div>

  </div>
  <webfooter/>
</div>
</template>

<script>
import webfooter from './footer'
export default {
  name: 'home',
  components: {
    webfooter
  }
}
</script>

<style scoped>
.mainContainer {
  padding-top: 50px;
  padding-bottom: 90px;
  display: block;
  position: relative;
  text-align: left;
}
.webfooter {
  position: fixed;
  bottom: 0;
}
.Derp {
  font-size: 50px;
}
#head {
  font-size: 100px;
}
</style>

