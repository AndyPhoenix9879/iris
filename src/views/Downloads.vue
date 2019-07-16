<template>
    <div class="mainContainer">
        <img src="https://lh3.googleusercontent.com/PPLEBPbQjUrMRleHOiDUnuvfLK_6XRKeUbMohSMGpk-NYaZnxvSUTM8awSJFmqvzt9gAZwt0xSE1XkqEzYrH9ZG3gyWMIbYpPCXP_Xx_BxMoPGWPK_CmTSSvYPPeynB99jf8W9RT2_yXkKRN55T_F_9BAGyadi42q4zS5fRmLUJyU9g_pRLGXaqr32B3qETItxLynw7LxafPB2sV6w4fG4AA61R2pGFALVuTyk4cjTTEDMFQw4HM-edtnGW7FzDmeaUU0MOzAMSnJbPDR_-JJfALKcLbzDw_59yCIYNpsQIeMAqXbuVMv8nmjd7oITono7_3_ijOZa9R3D_W2UOE2jviopBncNvv0xBlThng2Ki9yfAfHOc2FcsKSiB0HhMJA1QnFdznxyB3Wk8wXO52OkY5ABpofmP4Ka1AfDcGXfUQjkirkUDWu0QsFfUCwN3o5IvBPdQ4AD0Q6N0MmPyoZpsdVcoBjpRu7rRnPyo1WG0ldhdsHXGe6bzClggVpj_SSJpT1PdAUhRCBONmPUSiZKPl2HWF6Fuq_hbJXMyV9-jenxJ7CeH-7IcTAMxeTJxEYvaOB9OLBQUfMcRt6CdRAGUKqXFpepro6U0o_DyvaeeyHI_c--yROCaOAnjG2fUE_iaVj8StPPIvDQxM7xNJApFWuaOoxCYh=w3166-h1780-no"
        style="width:100%; height:100%; position:fixed; z-index:-9999; top:0; min-width: 1000px;">
        
        <div class="Card" v-for="(value,index) in someStuff" v-bind:key="value.index">
            <div class="CardContent">
                {{index+1}}. {{value.name}}
            </div>
            <el-button type="danger" circle icon="el-icon-minus" id="min" @click="remove(index)"></el-button>
        </div>

        <el-button type="success" circle icon="el-icon-plus" id="add" @click="addList"></el-button>
    </div>
</template>
<script>
import { db } from '@/main.js'
export default {
    data() {
        return {
            someStuff: []
        };
    },
    methods: {
        addList() {
            db.collection('Names').add({name:"tempDATA"}).then(() => {
                console.log("Added");
            })
        },
        remove(index) {
            db.collection('Names').doc(this.someStuff[index].id).delete().then(() =>{
                console.log("Deleted");
            })
        }
    },
    created() {
        db.collection('Names').onSnapshot(res => {
            const gotChange = res.docChanges();
            gotChange.forEach(change => {
                if (change.type === 'added'){
                    this.someStuff.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                } else if (change.type === 'removed'){
                    for (var i = 0; i < this.someStuff.length; i++) {
                        if (this.someStuff[i].name === change.doc.data().name) {
                            this.someStuff.splice(i, 1);
                            break;
                        }
                    }
                }
            })
        })
    }
}
</script>
<style scoped>
#add {
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.15);
    outline: none;
    margin: 20px;
    padding: 15px;
    font-size: 20px;
}
#add:active {
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.35);
}
#min {
    font-size: 5px;
    padding: 5px;
}
.mainContainer {
    margin-top: 65px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
}

.Card {
    width: 50px;
    min-width: 50px;
    margin-left: 10px;
    margin-right: 10px;
    width: 260px;
    height: 130px;
}
 
</style>

