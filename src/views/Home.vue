<template>
<div class="bg">

  <div class="mainContainer">

    <div class="Card">
      <h1>Hey there!</h1>
      <img src="https://lh3.googleusercontent.com/KC2YBg-D6PDUkgx3qQqrlxWYYthSkpgOJgpqHIky_jj_8Y8Up-gMFMlluaCYoKemZ37VmUiNH6ZOGf0LBwtsaoTDrqYr820SjZMV1wb1KnIG8eGe5ZJYZkBbKJTnTR47N5R3XX36DxglZaOoyUoVHdad5EngvyqCzrAZN_QuzALqW3gYgtj8WJh8wnaJtH-08fFX9SJZjJg1UuBU2EAp5dxWOqyuJRlsxj40V64xJKkX_wpqMZB20mAfnmYgqe820Hrmfp3aFr3qaUm-m91QG_SZo-HlgKErTPONu2lQQzdU0B7qPvNoItBqmlm7rMf-fQdiwJYfYR_BleQac_BNAG6b-xwZn3a1N6ilE_s_xFJjzBGgNa3FjxgoVluizMtixvfkLcOZ0-LZJJFCqN5eiqAQC1TNwiCLTCuxas2WmSNd69YjZF8iP7RYs5l1W9qG6JRStXj2pRMfRPPK_jhIGvKQI--t-Cg4JKyl2svM5boGFyd2IxTav6bNdcT6_AZg6polBPHauGIO_5yIL3gLtyXCS8rRWUEfZxkBIeW5G7EHs_xErEDQxzC58sY_JtxP5qcIeVaPbW9qcsiUP3b5_0CL9kS5apgpZs6hV9YocWF8sFQLMiEwtV0aJ2EVHTdcvRW8GLPsrJFmDRi8Mo2eU4vfX9e-Bd7s3flu84WWZ7VWaMTxzbE6AVnT1tNFCPo1fQ5q7FcSkFEMZ60B1ik7HpEZ-w=w1964-h1878-no"
      alt="image" style="border-radius:50%; width:500px;"><br><br>
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
  position: absolute;
  z-index: -99999;
  width: 100%;
  height: 100%;
  background-color: #F2F6FC;
}
.mainContainer {
  padding: 20px 20% 20px 20%;
  text-align: center;
  width: auto;
}
.Card {
  padding: 50px 100px 50px 100px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  vertical-align: middle;
}

</style>

