<script>
import Popper from "vue3-popper";
export default{
    data(){
        return{
        dataLoaded:false,
        // ====================
        name:"",
        introduce:"",
        startdate:"",
        enddate:"",
        // quiz借來的值
        // ====================
        questionList:[],
        packageCheck:[],
        currentPage:1,
        itemsPerPage:3,
        sendout:{},
        showform:[],
        quizIndex:0,
        fillobject:{},
        answerO:0,
        answerM:[],
        selectedAnswers: {},
        sendAnswers:[],
        writername:"",
        writerphone:"",
        writermail:"",
        writerage:"",
        nextmessage:"",
        check:{},
        question:[]
        }
    },
    components: {
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
        getData(){
            fetch(('http://localhost:8080/quiz/get'+ '?' + "index=" + this.quizIndex), {
            method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify()
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
                this.fillobject = data.quizList
                this.fillobject = this.fillobject[0]
                this.fillobject.questions = JSON.parse(this.fillobject.questions)
                this.fillobject.questions.forEach(element => {
                    if(!element.options == ""){
                        element.options = element.options.split(', ')
                    }
                })
                console.log(this.fillobject)
                this.startdate = this.fillobject.startDate
                this.enddate = this.fillobject.endDate
                this.name = this.fillobject.name
                this.introduce = this.fillobject.description
                this.dataLoaded = true
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        innitial(){
            for (let page = 1; page <= this.totalPages; page++) {
                this.selectedAnswers[page] = Array.from({ length: this.fillobject.questions.slice((page - 1) * this.itemsPerPage, page * this.itemsPerPage).length }, () => ({
                    answers: [],
                }))
        }
        // this.selectedAnswers = Array.from({ length: this.fillobject.questions.length }, () => ({
        //             answers: [],
        //         }))
                // 1. 1 , 2. CCC , 3. [1,3] ,
                // {1.},{2.},{3.}
    },
        test(){
            if(this.quizIndex > 0 && this.writername != "" && this.writerphone != "" && this.writermail != "" 
            && this.writerage > 0 && this.selectedAnswers != ""){
                this.nextmessage = ""
                this.sendAnswers = JSON.stringify(this.selectedAnswers)
                // this.sendAnswers = this.selectedAnswers
                console.log(this.sendAnswers)
                this.sendout= {}
                this.sendout = {
                    quizIndex: this.quizIndex,
                    name: this.writername,
                    phone: this.writerphone,
                    email: this.writermail,
                    age: this.writerage,
                    answers:this.sendAnswers,
                }
                fetch('http://localhost:8080/quiz/write', {
                method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
                headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify(this.sendout)
                })
                .then(response => response.json())
                .then(data => {
                // 處理返回的數據
                    console.log(data)
                    this.$router.push("/quiz")
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            }
        },
    },
    mounted(){
        this.check = JSON.parse(localStorage.getItem("quizAnswerCheck"))
            this.quizIndex =  this.check.quizIndex
            this.writername= this.check.name,
            this.writerphone= this.check.phone
            this.writermail= this.check.email
            this.writerage= this.check.age
            this.sendAnswers= this.check.answers
            this.name = this.check.quizName
            this.introduce = this.check.introduce
            this.startdate = this.check.startdate
            this.enddate = this.check.endDate
            this.question = this.check.questions
            this.selectedAnswers = this.check.answers
        console.log(this.check)
        console.log(this.question)
        // this.getData()
        // setTimeout(() => {
        //     this.innitial()
        // }, 500);
    }
}
</script>

<template>
    <div class="box">
        <div class="createB">
            <div class="label">
                <p class="labelS">填寫</p>
                <p class="labelT">確認</p>
            </div>
            <div class="writebox">
                <div class="font date">
                    <p class="dateT">{{ this.startdate }} ～ {{ this.enddate }}</p>
                </div>
                <div class="font quiz">
                    <p class="font" style="font-size: 1.8em;">{{ this.name }}</p>
                </div>
                <div class="font quizDes">
                    <p class="fontDes">{{ this.introduce }}</p>
                </div>
                <div class="font quizList">
                    <div class="kk" style="display: flex;">
                        <p class="font">姓名：</p>
                        <input class="inputinfo" type="text" name="" id="" v-model="this.writername" style="margin-left: 30px;" disabled>
                    </div>
                    <div class="kk" style="display: flex;">
                        <p class="font">手機：</p>
                        <input class="inputinfo" type="text" name="" id="" v-model="this.writerphone" style="margin-left: 30px;" onkeyup="value=value.replace(/[^\d]/g,'') " disabled>
                    </div>
                    <div class="kk" style="display: flex;">
                        <p class="font">E-mail：</p>
                        <input class="inputinfo" type="text" name="" id="" v-model="this.writermail" style="margin-left: 9px;" disabled>
                    </div>
                    <div class="kk" style="display: flex;">
                        <p class="font">年齡：</p>
                        <input class="inputinfo" type="text" name="" id="" v-model="this.writerage" style="margin-left: 30px;" onkeyup="value=value.replace(/[^\d]/g,'') " disabled>
                    </div>
                    <div class="columBox" v-if="question != null">
                        <!-- 第一個問題是questionIndex，第一個答案是optionIndex -->
                        <div class="colum" v-for="(question, questionIndex) in this.question.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="questionIndex">
                            <p class="font questionName">{{ question.title }}</p>
                            <textarea v-model="selectedAnswers[this.currentPage][questionIndex].answers" name="" id="" cols="30" rows="10" style="resize: none;height: 150px; margin-bottom: 10px;" v-if="question.options === ''" disabled></textarea>
                            <div class="selection" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                                <!-- <p>{{ question }}</p> -->
                                <input type="radio" v-model="selectedAnswers[this.currentPage][questionIndex].answers" :value="optionIndex" :name="'A' + questionIndex + optionIndex" value="" style="margin-right: 5px;" v-if="question.type === '單選題'" disabled>
                                <input type="checkbox" v-model="selectedAnswers[this.currentPage][questionIndex].answers" :value="optionIndex" name="" id="" style="margin-right: 5px;" v-if="question.type === '多選題'" disabled>
                                <p class="font questionSlection" >{{ (optionIndex+1) + ". " + option }}</p>
                            </div>
                        </div> 
                    </div>
                    <nav aria-label="Page navigation">
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
                    <button type="button" class="font" style="height: 25%; border: 1px solid black; border-radius: 4px; margin-right: 5%;"><RouterLink to="/quizAnswer">取消</RouterLink></button>
                    <Popper  arrow placement="top" class="root" :content="this.nextmessage">
                        <button type="button" class="font" @click="test()" style="width: 120px; height: 25%; border: 1px solid black; border-radius: 4px;margin-right: 5%;">確認傳送</button>
                    </Popper>
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
        height: 200%;
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
                height: 5%;
                width: 100%;
                .labelT{
                    width: 15%;
                    margin: 0;
                    font-size: 1.2em;
                    line-height: 290%;
                    font-family: "jf-openhuninn-2.0";
                }
                .labelS{
                    width: 15%;
                    margin: 0;
                    font-size: 1.2em;
                    line-height: 290%;
                    font-family: "jf-openhuninn-2.0";
                    background-color: white;    
                    border-radius: 3px;
                }
            }
            .writebox{
                height: 99%;
                width: 100%;
                background-color: white;
                // border-radius: 3px;
                .date{
                    .dateT{
                        text-align: end;
                        margin-right: 2%;
                    }
                }
                .quiz{
                    font-size: 2em;
                }
                .quizDes{
                    width: 70%;
                    margin: 0 auto;
                    .fontDes{
                        margin-bottom: 30px;
                        font-size: 1em;
                        font-family: "jf-openhuninn-2.0";
                    }
                }
                .quizList{
                    background-color: white;
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
    .kk{
        width: 70%;
        margin: 0 auto 20px auto;
        .inputinfo{
            width: 80%;
        }
    }
</style>