<script>
import Popper from "vue3-popper";
import { RouterLink, RouterView } from "vue-router";
export default{
    data(){
        return{
        name:"",
        introduce:"",
        startdate:"",
        enddate:"",
        currentPage:1,
        itemsPerPage:10,
        searchResult:[
                {
                    number:1,
                    content: "如果你說你愛我",
                    type:"單選",
                    necessary:"是",
                    result:"前往"
                },
                {
                    number:2,
                    content: "如果你說你愛我",
                    type:"複選",
                    necessary:"否",
                    result:"前往"
                },
            ],
        packageA:{},
        nextmessage:"",
        }
    },
    components: {
        RouterLink,
        Popper,
    },
    methods:{
        sendpackage(){
            // this.packageA.push(this.name,this.introduce,this.startdate,this.enddate)
            // console.log(this.packageA)
        },
        register(){
            if(this.acc != "" && this.introduce != "" && this.startdate != "" && this.enddate != "" 
            && this.enddate.replace("=","") > this.startdate.replace("=","")){
                this.packageA = []
                this.packageA.push(this.name,this.introduce,this.startdate,this.enddate)
                console.log(this.packageA)
                this.$router.push("/quizBackNewQuestion")
                localStorage.setItem("newquiz",JSON.stringify(this.packageA))
                // this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
                
            //     fetch('http://localhost:8080/quiz/create', {
            //     method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name:this.name,
            //         description:this.introduce,
            //         startDate:this.startdate,
            //         endDate:this.enddate,
            //         questionList:"",
            //         inPublished:true,
            //     })
            // })
            // .then(response => response.json())
            // .then(data => {
            // // 處理返回的數據
            //     console.log(data)
            //     // this.$router.push("/quizBackNewQuestion")
            // })
            // .catch(error => {
            //     console.error('Error fetching data:', error);
            //     this.$router.push("/quizBackNewQuestion")
            // });
            } else if(this.name == ""){
                this.nextmessage = "請輸入問卷名稱"
            } else if(this.introduce == ""){
                this.nextmessage = "請輸入問卷介紹"
            } else if(this.startdate == ""){
                this.nextmessage = "請輸入開始時間"
            } else if(this.enddate == ""){
                this.nextmessage = "請輸入結束時間"
            } else if(this.enddate.replace("=","") <this.startdate.replace("=","")){
                this.nextmessage = "開始時間要在結束時間之前"
            }
        },
    },
    mounted(){
        this.packageA = JSON.parse(localStorage.getItem("newquiz"))
        if (this.packageA != null) {
            this.name=this.packageA[0]
            this.introduce=this.packageA[1]
            this.startdate=this.packageA[2]
            this.enddate=this.packageA[3]
        }
        console.log(this.packageA)
        console.log(this.name)
    },
}
</script>

<template>
    <div class="box">
        <div class="createB">
            <div class="label">
                <p class="labelS">問卷</p>
                <p class="labelT">題目</p>
                <p class="labelT">問卷回饋</p>
                <p class="labelT">統計</p>
            </div>
            <div class="writebox">
                <div class="columT">
                    <div class="namebox">
                        <p class="font name">問卷名稱：</p>
                        <input type="text" name="" id="" class="nameinput" v-model="this.name">
                    </div>
                    <div class="interducebox">
                        <p class="font name">問卷說明：</p>
                        <textarea name="" id="" cols="30" rows="10" class="interduceinput" v-model="this.introduce"></textarea>
                    </div>
                    <div class="timebox">
                        <p class="font name">開始時間：</p>
                        <input type="date" name="" id="" class="timeinput" v-model="this.startdate">
                    </div>
                    <div class="timebox">
                        <p class="font name">結束時間：</p>
                        <input type="date" name="" id="" class="timeinput" v-model="this.enddate">
                    </div>
                    <div class="rightD">
                        <button type="button"><RouterLink to="/quizBackShow">取消</RouterLink></button>
                        <Popper  arrow placement="top" class="root" :content="this.nextmessage">
                            <button type="button" @click="register">下一頁</button>
                        </Popper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .font{
        margin: 0;
        font-size: 1.2em;
        font-family: "jf-openhuninn-2.0";
    }
    .box{
        height: 100%;
        width: 80%;
        margin: 0 auto ;
        background-color: bisque;
        .createB{
            height: 95%;
            width: 96%;
            padding-top: 15%;
            margin-left: 2%;
            margin-right: 2%;
            .label{
                display: flex;
                height: 10%;
                width: 100%;
                .labelT{
                    width: 15%;
                    margin: 0;
                    font-size: 1.2em;
                    line-height: 250%;
                    font-family: "jf-openhuninn-2.0";
                }
                .labelS{
                    width: 15%;
                    margin: 0;
                    font-size: 1.2em;
                    line-height: 250%;
                    font-family: "jf-openhuninn-2.0";
                    background-color: white;    
                    border-radius: 3px;
                }
            }
            .writebox{
                height: 90%;
                width: 100%;
                background-color: white;
                // border-radius: 3px;
                .quiz{
                    margin: 0;
                    display: flex;
                }
                .selectionbox{
                    margin: 0;
                    display: flex;
                }
                .columT{
                    // display: flex;
                    margin: 0 auto;
                    width: 80%;
                    height: 100%;
                    // background-color:grey;
                    .namebox{
                        width: 100%;
                        display: flex;
                        padding: 2% 0;
                        .name{
                            text-align: start;
                        }
                        .nameinput{
                            margin-left: 2%;
                            margin-top: 0.5%;
                            width: 80%;
                        }
                    }
                    .interducebox{
                        width: 100%;
                        display: flex;
                        padding: 2% 0;
                        height: 40%;
                        .name{
                            text-align: start;
                            height: 20%;
                        }
                        .interduceinput{
                            text-align: start;
                            margin-left: 2%;
                            margin-top: 0.5%;
                            width: 80%;
                            height: 100%;
                            resize: none;
                        }
                    }
                    .timebox{
                        width: 100%;
                        display: flex;
                        padding: 2% 0;
                        .name{
                            text-align: start;
                        }
                        .timeinput{
                            margin-left: 2%;
                            margin-top: 0.5%;
                            width: 26%;
                        }
                    }
                    .rightD{
                        display: flex;
                        margin-left: 80%;
                    }
                }
            }
        }
    }
    .root {
    --popper-theme-background-color: #333333;
    --popper-theme-background-color-hover: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
    font-family: "jf-openhuninn-2.0";
    }
</style>