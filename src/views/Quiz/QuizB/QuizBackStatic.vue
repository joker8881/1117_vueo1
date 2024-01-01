<script>
import Popper from "vue3-popper";
import { RouterLink, RouterView } from "vue-router";
import * as echarts from "echarts"
export default{
    data(){
        return{
        name:"",
        introduce:"",
        startdate:"",
        enddate:"",
        currentPage:1,
        itemsPerPage:3,
        contaionQuestion:[""],
        packageA:{},
        nextmessage:"",
        quizStatic:{},
        question:[],
        answers:[],
        chartPie:null,
        }
    },
    components: {
        RouterLink,
        Popper,
    },
    computed: {
    //計算總頁數
        totalPages() {
            return Math.ceil(this.question.length / this.itemsPerPage);
        },
    },
    methods:{
        changePage(newPage) {
            this.pageC = ""
            this.currentIndexToDelete = 0
            if (newPage >= 1 && newPage <= this.totalPages) {
                this.currentPage = newPage;
            } else if(newPage > this.totalPages) {
                this.pageC = "資料沒有那麼多"
            } else if(this.currentPage == 1) {
                this.pageC = "你已經到第一頁了"
            } 
        },
        drawPieChart() {
            let mytextStyle = {
                fontSize: 18,
            };
            let mylabel = {
                show: true, 
                position: "right", 
                offset: [30, 40], 
                formatter: "{b} : {c} ({d}%)", 
                textStyle:mytextStyle,
            };
            this.chartPie = echarts.init( document.getElementById("chartPie"), "macarons");
            this.chartPie.setOption({
                title: {
                    text: "消費種類比例圖",
                    subtext: "",
                    x: "center",
                },
                tooltip: { //提示框
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                legend: { //圖例
                    data: ["收入","早餐","午餐","晚餐","飲料","交通","購物","娛樂","日用品","房租","醫療","社交","其他"],
                    left:"center",                              
                    top:"bottom",                              
                    orient:"horizontal",
                    color: "#fff;"
                },
                series: [
                {
                    name: "種類",
                    type: "pie",
                    radius: ["40%", "70%"],
                    center: ["50%", "50%"],
                    data: [
                        { value: this.aT, name: "收入" },
                        { value: this.bT, name: "早餐" },
                        { value: this.cT, name: "午餐" },
                        { value: this.dT, name: "晚餐" },
                        { value: this.eT, name: "飲料" },
                        { value: this.fT, name: "交通" },
                        { value: this.gT, name: "購物" },
                        { value: this.hT, name: "娛樂" },
                        { value: this.iT, name: "日用品" },
                        { value: this.jT, name: "房租" },
                        { value: this.kT, name: "醫療" },
                        { value: this.lT, name: "社交" },
                    { value: this.mT, name: "其他" },
                    ],
                    animationEasing: "cubicInOut",
                    animationDuration: 2600,
                    label: {
                        emphasis: mylabel,
                    },
                },
                ],
            });
        },
    },
    mounted(){
        this.quizStatic = JSON.parse(localStorage.getItem("quizStatic"))
        this.startdate = this.quizStatic.startdate
        this.enddate = this.quizStatic.enddate
        this.name = this.quizStatic.name
        this.question = this.quizStatic.question
        this.answers = this.quizStatic.questionAnswers
        console.log(this.question)
        console.log(this.quizStatic)
        this.$nextTick(() => {
            this.drawPieChart();
        });
    },
}
</script>

<template>
    <div class="box">
        <div class="createB">
            <div class="label">
                <p class="labelT">問卷</p>
                <p class="labelT">題目</p>
                <p class="labelT">問卷回饋</p>
                <p class="labelS">統計</p>
            </div>
            <div class="writebox">
                <div class="font date">
                    <p class="dateT" style="text-align:end; width:95%" >{{ this.startdate }} ～ {{ this.enddate }}</p>
                </div>
                <div class="columT">
                    <div class="columBox" >
                        <!-- 第一個問題是questionIndex，第一個答案是optionIndex -->
                        <div class="colum" v-for="(question, questionIndex) in this.question.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="questionIndex">
                            <p class="font questionName">{{ question.title }}</p>
                            <div id="chartPie" ref="chartPie" class="pie-wrap" v-if="question.type !='簡答題'"></div>
                            <!-- <textarea v-model="this.answers[0].answers[this.currentPage][questionIndex].answers" name="" id="" cols="30" rows="10" style="resize: none;height: 150px; margin-bottom: 10px;" v-if="question.options === ''"></textarea>
                            <div class="selection" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                                <input type="radio" v-model="this.answers[0].answers[this.currentPage][questionIndex].answers" :value="optionIndex" :name="'A' + questionIndex + optionIndex" value="" style="margin-right: 5px;" v-if="question.type === '單選題'">
                                <input type="checkbox" v-model="this.answers[0].answers[this.currentPage][questionIndex].answers" :value="optionIndex" name="" id="" style="margin-right: 5px;" v-if="question.type === '多選題'">
                            <p class="font questionSlection" >{{ (optionIndex+1) + ". " + option }}</p>
                            </div> -->
                        </div>
                    </div>
                    <nav aria-label="Page navigation" style="margin-top: 20px;">
                    <ul class="pagination justify-content-center">
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage - 1)"><a class="page-link" href="#">上一頁</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(page)" ><a class="page-link" href="#" disabled="!isInputValid">{{this.currentPage}}</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage+1)"><a class="page-link" href="#">{{this.currentPage+1}}</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage+2)"><a class="page-link" href="#">{{this.currentPage+2}}</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage+3)"><a class="page-link" href="#">{{this.currentPage+3}}</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage+4)"><a class="page-link" href="#">{{this.currentPage+4}}</a></li>
                        </Popper>
                        <Popper arrow placement="top" class="root" :content="this.pageC">
                            <li class="page-item" @click="changePage(this.currentPage + 1)"><a class="page-link" href="#">上一頁</a></li>
                        </Popper>
                    </ul>
                </nav>
                    <div class="rightD">
                        <button class="font" type="button" style="width: 70px;border: 1px solid black; border-radius: 4px; margin-right: 20px;"><RouterLink to="/quizBackShow">返回</RouterLink></button>
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
                    .columBox{
                        .colum{
                            .questionName{
                                width: 60%;
                                text-align: start;
                                margin: 0 auto;
                            }
                            .questionSlection{
                                width: 50%;
                                text-align: start;
                            }
                            .selection{
                                width: 50%;
                                display: flex;
                                margin: 0 auto;
                            }
                        }
                    }

</style>