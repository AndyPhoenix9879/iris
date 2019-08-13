<template>
<div>

    <div class="mainContainer">

        <div class="searchContainer">
            <i class="el-icon-search"></i>
            <input v-model="search" placeholder="Search" class="traySearch">

            <div class="traylist" v-if="viewType==true">
                <el-tooltip class="item" effect="dark" content="List view" placement="bottom-start" open-delay="450" hide-after="1650">
                    <i class="el-icon-notebook-2" @click="viewClick()"></i>
                </el-tooltip>
            </div>
            <div class="traylist" v-else>
                <el-tooltip class="item" effect="dark" content="Block view" placement="bottom-start" open-delay="450" hide-after="1650">
                    <i class="el-icon-menu" @click="viewClick()"></i>
                </el-tooltip>
            </div>
                
        </div>
        <hr style="margin: 5px 0 20px 0;">
        <div class="tray">
            <div class="notFound" v-if="filteredSearch==''">
                <h1><br><br><br>Nothing... :(</h1>
            </div>
        </div>
            <span v-if="viewType==true" class="tray">
            <div class="Card" v-for="(value, index) in filteredSearch" v-bind:key="value.index">
                <!--<el-button type="danger" circle icon="el-icon-minus" id="min" @click="remove(index)"></el-button>--> 
                
                <div class="CardContent">

                    <a :href=value.url style="outline:none;" target="_blank">
                        <div class="TypeBox" v-if="value.type==='pic'">
                            <img :src="value.url">
                        </div>
                        <div class="TypeBox" v-else>
                            {{value.type.toUpperCase()}}
                        </div>
                    
                        <div class="Title">
                            {{value.name}}
                        </div>
                    </a>

                </div>
                
                
            </div>
            </span>
            <span v-else class="tray_list">
                <div class="Card_list" v-for="(value, index) in filteredSearch" v-bind:key="value.index">
                <!--<el-button type="danger" circle icon="el-icon-minus" id="min" @click="remove(index)"></el-button>--> 
                <a :href=value.url style="outline:none;" target="_blank">
                    <div class="CardContent_list">

                        
                            <div class="TypeBox_list">
                                {{value.type.toUpperCase()}}
                            </div>
                            <div class="Title_list">
                                {{value.name}}
                            </div>
                        

                    </div>
                </a>    
                    
                </div>
            </span>
            <!--<el-button type="success" circle icon="el-icon-plus" id="add" @click="addList"></el-button>-->
    </div>
    <webfooter/>

</div>
</template>
<script>
import { db } from '@/main.js'
import webfooter from './footer'
export default {
    components: {
        webfooter
    },
    data() {
        return {
            someStuff: [],
            search: '',
            viewType: true,
        };
    },
    methods: {
        /*addList() { //Adding something into the database
            db.collection('Names').add({name:"tempDATA"}).then(() => {
                var name = "tempData";
                console.log("Added");
                this.$notify({
                    title: 'Success',
                    message:`"${name}" has been added successfully`,
                    type: 'success'
                });
            })
        },*/
        /*remove(index) { //Removing something from the database 
            db.collection('Names').doc(this.someStuff[index].id).delete().then(() =>{
                console.log("Deleted");
                this.$notify({
                    title: 'Success',
                    message:`Item has been removed successfully`,
                    type: 'success'
                });
            })
        }*/
        viewClick() {
            this.viewType = !this.viewType;
        }
    },
    created() { //when webpage loads, not under method btw
        db.collection('Names').onSnapshot(res => { //snapshot is just a preview or something of the stuff inside the collection
            const gotChange = res.docChanges(); //when something changes
            gotChange.forEach(change => { //for each of the changes (with the variable or something as change)
                if (change.type === 'added'){
                    this.someStuff.push({
                        ...change.doc.data(),
                        id: change.doc.id //get the id of the document of the collection and put it inside someStuff
                    })
                } else if (change.type === 'removed'){
                    for (var i = 0; i < this.someStuff.length; i++) {
                        if (this.someStuff[i].name === change.doc.data().name) { //I am super proud of this hack hahahahaha
                            this.someStuff.splice(i, 1);
                            break;
                        }
                    }
                } else if (change.type === 'modified'){
                    for (var i = 0; i < this.someStuff.length; i++) {
                        if (this.someStuff[i].id === change.doc.id) { 
                            //console.log("Changing", this.someStuff[i].name, "to", change.doc.data().name);
                            this.someStuff[i].name = change.doc.data().name;
                            this.someStuff[i].url = change.doc.data().url;
                            this.someStuff[i].type = change.doc.data().type;
                            break;
                        }
                    }
                }
            })
        })
    },
    computed: {
        filteredSearch: function() {
            return this.someStuff.filter((data) => {
                return data.name.toLowerCase().match(this.search.toLowerCase()) || data.type.toLowerCase().match(this.search.toLowerCase())
            });
        }
    }
}
</script>
<style scoped>
.mainContainer {
    min-height: 630px;
    max-height: 630px;
    overflow: scroll;
    position:relative;
}
.searchContainer {
    display: flex;
    height: auto;
    width: 100%;    
    padding-top: 25px;
    padding-bottom: 15px;
    position: sticky;
    background-color: white;
    top: 0px;
    z-index: 9;
}
.searchContainer i {
    position: absolute;
    margin: auto;
    padding: 13px;
}
.notFound {
    color: #909399;
    padding-top: 40px;
    padding-bottom: 25px;
}
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
    outline: none;
    font-size: 5px;
    padding: 5px;
    float: right;
}
#blk {
    text-align: center;
}
.tray {
    text-align: center;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    background-color: white;
    padding-right: 10px;
    padding-left: 10px;
}
.tray_list {
    text-align: center;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    background-color: white;
    border-bottom: 1px solid #F2F6FC;
}
.traySearch {
    width: 90%;
    border-radius: 20px;
    outline:none;
    border:none; 
    margin-bottom: 0; 
    padding: 10px 15px 10px;
    padding-left: 45px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    transition: linear 0.1s;
    display: inline-block;
}
.traylist i {
    font-size: 30px;
    padding: 0;
    margin-top: 12px;
    margin-left: 38px;
    outline:none;
    border:none; 
    transition: linear 0.1s;
}
.traylist i:active {
    color: #67C23A;
    transform: scale(1.5);
}

.traySearch:focus {
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    transition: linear 0.1s;
}
.Card {
    border-radius: 10px;
    min-width: 50px;
    margin-top: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 25px;
    /*padding: 20px;*/
    padding:0;
    width: 170px;
    height: 170px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    transition: linear 0.2s;
    position: relative;
    overflow: hidden;
}
.Card_list {
    border-radius: 0;
    /*padding: 20px;*/
    border: 1px solid #F2F6FC;
    border-bottom: none;
    padding: 5px;
    width: 100%;
    transition: linear 0.35s;
    text-align: left;
}
.Card_list a {
    text-decoration: none;
    color: inherit;
}
.Card:hover {
    box-shadow: 0 6px 13px 0 rgba(0, 0, 0, 0.2);
    transition: linear 0.25s;
}
.Card:active {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
    transition: linear 0.08s;
}
.Card_list:hover {
    box-shadow: 0 3px 12px -8px rgba(0, 0, 0, 0.6);
    transition: linear 0.15s;
}
.Card_list:active {
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.12);
    transition: linear 0.08s;
}
.CardContent a {
    text-decoration: none;
    color: inherit;
}
.CardContent a:hover {
    color:#F2F6FC;
}
.CardContent_list {
    display: grid;
    grid-template-columns: 90px auto;
    white-space: nowrap;
    overflow: scroll;
}
.Card_list a:hover {
    color: #409EFF;
}
.Card_list a:active {
    color: #F56C6C;
}
.TypeBox {
    font-size: 40px;
    font-weight: bolder;
    color: #DCDFE6;
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 125px;
}
.TypeBox img {
    width: 100%;
    margin: auto; /*To vertically align*/
    top: 0;
    bottom: 0;
    position: absolute;
}
.TypeBox_list {
    /*width: 60px;
    display: inline-block;
    font-weight: bolder;
    color: #DCDFE6;*/
    color: #DCDFE6;
    font-weight: bolder;
    padding: 3px 5px;
}
.Title {
    overflow: hidden;
    font-size: 14px;
    padding: 0 10px 0 10px;
    background-color: #409EFF;
    color: white;
    height: 45px;
    line-height: 45px;
    width: 100%;
    bottom: 0;
    position: absolute;
}
.Title_list {
    font-size: 14px;
    padding: 5px 10px;
    /*width: 100%;
    overflow: hidden;
    display: inline-block;
    font-size: 14px;
    padding: 5px 10px 5px 100px;
    background-color: white;
    color: inherit;
    bottom: 0;
    border-radius: 10px;*/
}

@media screen and (min-height: 1000px) {
  .mainContainer {
    min-height: 700px;
    max-height: 700px;
  }
}
@media screen and (min-height: 1300px) {
  .mainContainer {
    min-height: 1000px;
    max-height: 1000px;
  }
}
</style>

