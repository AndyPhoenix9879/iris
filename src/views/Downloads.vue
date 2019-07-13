<template>
    <div class="mainContainer">
        <img src="https://lh3.googleusercontent.com/PPLEBPbQjUrMRleHOiDUnuvfLK_6XRKeUbMohSMGpk-NYaZnxvSUTM8awSJFmqvzt9gAZwt0xSE1XkqEzYrH9ZG3gyWMIbYpPCXP_Xx_BxMoPGWPK_CmTSSvYPPeynB99jf8W9RT2_yXkKRN55T_F_9BAGyadi42q4zS5fRmLUJyU9g_pRLGXaqr32B3qETItxLynw7LxafPB2sV6w4fG4AA61R2pGFALVuTyk4cjTTEDMFQw4HM-edtnGW7FzDmeaUU0MOzAMSnJbPDR_-JJfALKcLbzDw_59yCIYNpsQIeMAqXbuVMv8nmjd7oITono7_3_ijOZa9R3D_W2UOE2jviopBncNvv0xBlThng2Ki9yfAfHOc2FcsKSiB0HhMJA1QnFdznxyB3Wk8wXO52OkY5ABpofmP4Ka1AfDcGXfUQjkirkUDWu0QsFfUCwN3o5IvBPdQ4AD0Q6N0MmPyoZpsdVcoBjpRu7rRnPyo1WG0ldhdsHXGe6bzClggVpj_SSJpT1PdAUhRCBONmPUSiZKPl2HWF6Fuq_hbJXMyV9-jenxJ7CeH-7IcTAMxeTJxEYvaOB9OLBQUfMcRt6CdRAGUKqXFpepro6U0o_DyvaeeyHI_c--yROCaOAnjG2fUE_iaVj8StPPIvDQxM7xNJApFWuaOoxCYh=w3166-h1780-no"
        style="width:100%; height:100%; position:fixed; z-index:-9999; top:0; min-width: 1000px;">
        
        <div class="Card">
            <button @click="downloadStuff"><a href="" id="lol">Download</a></button>
        </div>
    </div>
</template>
<script>
import { storage, db } from '../main.js'

export default {
    data() {
        return {
            someStuff: {}
        };
    },
    methods: {
        downloadStuff() {
            var theStuff = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/project-1-f0278.appspot.com/o/lol%2FCV.docx?alt=media&token=056b1bc9-f71b-45ac-ad2f-f4845d9a3c69');
            // Get the download URL
            var theURL = "";
            theStuff.getDownloadURL().then(function(url) {
                theURL = url;
                console.log(theURL);
                document.getElementById('lol').href = theURL;
            }).catch(function(error) {
                console.log(error);
            });

        }
    }
}
</script>
<style scoped>

</style>

