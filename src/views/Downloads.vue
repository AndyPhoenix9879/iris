<template>
<div>

    <div class="mainContainer">

        <div class="searchContainer">
            <i class="el-icon-search"></i>
            <input v-model="search" placeholder="Search" class="traySearch" type="text" name="search bar">

            <div class="traylist" v-if="viewType==true">
                <el-tooltip class="item" effect="dark" content="List view" placement="bottom-start" open-delay=450 hide-after=1650>
                    <i class="el-icon-notebook-2" @click="viewClick()"></i>
                </el-tooltip>
            </div>
            <div class="traylist" v-else>
                <el-tooltip class="item" effect="dark" content="Block view" placement="bottom-start" open-delay=450 hide-after=1650>
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

                    <a :href=value.url style="outline:none;" target="_blank" rel="noreferrer">
                        <div class="TypeBox" v-if="value.type==='pic'">
                            <img alt="a pic should be here" :src="value.url">
                        </div>
                        <div class="TypeBox" v-else>
                            {{value.type.toUpperCase()}}
                        </div>
                    
                        <div class="Title" id="red" v-if="value.type.toLowerCase()==='pdf'">
                            {{value.name}}
                        </div>

                        <div class="Title" id="blue" v-else-if="value.type.toLowerCase()==='web'">
                            {{value.name}}
                        </div>

                        <div class="Title" id="yellow" v-else-if="value.type.toLowerCase()==='tor'">
                            {{value.name}}
                        </div>

                        <div class="Title" v-else>
                            {{value.name}}
                        </div>
                    </a>

                </div>
                
                
            </div>
            </span>
            <span v-else class="tray_list">
                <div class="Card_list" v-for="(value, index) in filteredSearch" v-bind:key="value.index">
                <!--<el-button type="danger" circle icon="el-icon-minus" id="min" @click="remove(index)"></el-button>--> 
                
                    <div class="CardContent_list">
                        <a :href=value.url style="outline:none;" target="_blank" rel="noreferrer">
                            <div class="TypeBox_list">
                                {{value.type.toUpperCase()}}
                            </div>
                        </a>
                        <a :href=value.url style="outline:none;" target="_blank" rel="noreferrer">
                            <div class="Title_list">
                                {{value.name}}
                            </div>
                        </a>  
                    </div>
                  
                    
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
#red {
    background-color: #F56C6C;
}
#green {
    background-color: #67C23A;
}
#blue {
    background-color: #409EFF;
}
#yellow {
    background-color: #FFCB2B;
}
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
    margin-top: 10px;
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
    box-shadow: 0 1px 5px 0 rgba(186,188,217, 0.5);
    transition: linear 0.2s;
    position: relative;
    overflow: hidden;
}
.Card_list {
    border-radius: 0;
    /*padding: 20px;*/
    background-color: white;
    border: 1px solid #F2F6FC;
    border-bottom: none;
    width: 100%;
    transition: linear 0.20s;
    text-align: left;
}
.Card_list a {
    text-decoration: none;
    color: inherit;
}
.Card:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 11px 0 rgba(186,188,217, 0.85);
    transition: linear 0.32s;
}
.Card:active {
    box-shadow: 0 0 2px 0 rgba(186,188,217, 0.5);
    transition: linear 0.08s;
}
.Card_list:hover {
    z-index: 999;
    transform: scale(1.03);
    box-shadow: 0 1px 5px 0 rgba(186,188,217, 0.17);
    transition: linear 0.20s;
}
.Card_list:active {
    transform: scale(1);
    box-shadow: 0 0 0px 0 rgba(186,188,217, 0.12);
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
    margin: 8px 10px;
}
.Title {
    overflow: hidden;
    font-size: 14px;
    padding: 0 10px 0 10px;
    color: white;
    background-color: #67C23A;
    height: 45px;
    line-height: 45px;
    width: 100%;
    bottom: 0;
    position: absolute;
}
.Title_list {
    font-size: 14px;
    margin: 8px 10px;
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

