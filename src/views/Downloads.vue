<template>
<div>

    <div class="mainContainer" style="position:relative;">

        <div class="searchContainer">
            <i class="el-icon-search" style="position:absolute;"></i>
            <input v-model="search" placeholder="Search stuffs" class="traySearch">
        </div>

        <div class="tray">

            <div class="notFound" v-if="filteredSearch==''">
                <h1>Nothing.. :(</h1>
            </div>

            <div class="Card" v-for="(value, index) in filteredSearch" v-bind:key="value.index">
                <!--<el-button type="danger" circle icon="el-icon-minus" id="min" @click="remove(index)"></el-button>--> 
                <div class="CardContent">
                    <a :href=value.url style="outline:none;" target="_blank">
                        <div class="TypeBox" v-if="value.type==='pic'">
                            <img :src="value.url">
                        </div>
                        <div class="TypeBox" v-else>
                            {{value.type}}
                        </div>
                    
                        <div class="Title">
                            {{value.name}}
                        </div>
                    </a>

                </div>
               
                
            </div>
            
            <!--<el-button type="success" circle icon="el-icon-plus" id="add" @click="addList"></el-button>-->
        </div>
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
            search: ''
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
    text-align: center;
}
.searchContainer {
    height: auto;
    width: 100%;
    margin-top: 20px;
}
.searchContainer i {
    position: absolute;
    margin: auto;
    padding: 13px;
    padding-left: 20px;
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
.tray {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    min-width: 600px;
    padding-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
}
.traySearch {
    width: 100%;
    border-radius: 20px;
    outline:none;
    border:none; 
    margin-bottom: 0; 
    padding:10px; 
    padding-left: 45px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    transition: linear 0.1s;
}
.traySearch:focus {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: linear 0.1s;
}
.Card {
    border-radius: 10px;
    width: 50px;
    min-width: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0px;
    /*padding: 20px;*/
    padding:0;
    width: 170px;
    height: 170px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: linear 0.2s;
    position: relative;
    overflow: hidden;
}

.Card:hover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
    transition: linear 0.2s;
}
.Card:active {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
    transition: linear 0.08s;
}
.CardContent a {
    text-decoration: none;
    color: inherit;
}
.CardContent a:hover {
    color:#F2F6FC;
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

</style>

