<template>
<div>
  <div class="mainContainer">
    <img src="https://lh3.googleusercontent.com/MHK2iH8xPP9mmlA4EPxdEYj-6N8VZ6zEsB9mqQ6ab33uM7T6ZMHXFk9ZiLx-DE3BV5n6XXF3cnn5MAIBgWES9VJxTgqwMeN3S6rYa_zhPUMpPScV7CvfxCdTRaFBVSQ7iShp7uEd86buWi8cOeX9yBNdY2wBLtiUj2cEpZb2XjoDFY9ES_MliAzDGPMqkoHti1jUi31bjrorE1V4sk_oBp9svUrW-1HNXRzq5ZcbnxzfxeMrE9Y9-Tg2g7E63_1XKPm7BLmTa5AUYkcLjjs50RgcEZ7eAN9qjrRgaquAT52tEhfJ505ZVFCkVgx0eSKdt2bf7aa3xpmG59o8s3PMilOQJPQbIj1gJGreDkvQw7TYT2U8dOPKVR8JVFIZX0LTplKbJtEYbZVh7C3VLGxgHhY95VdkcdZRUhE-sJSSGgoIWrZyQLktlY0O1llzI1Mex9j8jvy_Pavpci4qmh1l9Chb0_tIDV_lLDTNG85ns3obXitvl4aAvdMHSHBLbT-4e1H4qp8yvPKuN3HkE4v857MRIeVZxG-qlQQbYBJTagfWL4Eii0HSwzGZ8USMESRGjlnhyt3A2wOwOcsflxAaP1o1lUVyodHR1otvG-ZRIRVtGKbaZHQBUVJ-cow_-47Fq5Z9YxpY92ZPKeeCgtwMJ3NJEjd7dFZ-=w3342-h1878-no"
    style="width:100%; height:100%; position:fixed; z-index:-9999; top:0; min-width: 1000px;">
    <div class="Card">
      <h1>Hey there!</h1><br>
      <img src="https://lh3.googleusercontent.com/KC2YBg-D6PDUkgx3qQqrlxWYYthSkpgOJgpqHIky_jj_8Y8Up-gMFMlluaCYoKemZ37VmUiNH6ZOGf0LBwtsaoTDrqYr820SjZMV1wb1KnIG8eGe5ZJYZkBbKJTnTR47N5R3XX36DxglZaOoyUoVHdad5EngvyqCzrAZN_QuzALqW3gYgtj8WJh8wnaJtH-08fFX9SJZjJg1UuBU2EAp5dxWOqyuJRlsxj40V64xJKkX_wpqMZB20mAfnmYgqe820Hrmfp3aFr3qaUm-m91QG_SZo-HlgKErTPONu2lQQzdU0B7qPvNoItBqmlm7rMf-fQdiwJYfYR_BleQac_BNAG6b-xwZn3a1N6ilE_s_xFJjzBGgNa3FjxgoVluizMtixvfkLcOZ0-LZJJFCqN5eiqAQC1TNwiCLTCuxas2WmSNd69YjZF8iP7RYs5l1W9qG6JRStXj2pRMfRPPK_jhIGvKQI--t-Cg4JKyl2svM5boGFyd2IxTav6bNdcT6_AZg6polBPHauGIO_5yIL3gLtyXCS8rRWUEfZxkBIeW5G7EHs_xErEDQxzC58sY_JtxP5qcIeVaPbW9qcsiUP3b5_0CL9kS5apgpZs6hV9YocWF8sFQLMiEwtV0aJ2EVHTdcvRW8GLPsrJFmDRi8Mo2eU4vfX9e-Bd7s3flu84WWZ7VWaMTxzbE6AVnT1tNFCPo1fQ5q7FcSkFEMZ60B1ik7HpEZ-w=w1964-h1878-no"
      alt="image" style="border-radius:50%; width:50%;"><el-divider></el-divider>
      <p>Welcome to my webpage! <br> Some information about myself, my name is Lai Jian Shin, I'm an international undergraduate student at the Chinese University of Hong Kong pursuing
        a degree in Computer Science.</p>
    </div>
    
    <div class="Card">
      <h1>About this website</h1> 
      <p>
        
        <el-divider></el-divider>
        This website is the culmination of everything I have learnt in Vue.JS, web development and UI design (as well as some abstract digital drawing). This website can be 
        regarded as my playground project where I play with whatever there is to play around with in Web Development. 
        Other than that, I will use this as my platform to share stuffs I think is either helpful
        or cool around the web as well as a CV profile tab just for the sake of it. Enjoy! 
        <el-divider></el-divider>
        
      </p>
    </div>
    
  </div>

  <webfooter/>

</div>
</template>

<script>
import webfooter from './footer'
export default {
  components: {
    webfooter
    }
}
</script>

<style scoped>
.mainContainer {
  position: relative;

}
</style>
