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
        }
    },
    components: {
        Popper,
    },
    computed: {
    //計算總頁數
        totalPages() {
            return Math.ceil(this.showform.length / this.itemsPerPage);
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
        confirmH(){
            this.sendout= {}
            this.sendout = {
                name: this.name,
                description: this.introduce,
                startDate: this.startdate,
                endDate: this.enddate,
                questionList: this.packageCheck.questionList,
                inPublished:false
            }
            fetch('http://localhost:8080/quiz/create', {
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
                localStorage.removeItem("quizoutCheck")
                localStorage.removeItem("newquiz")
                this.$router.push("/quizBackShow")
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        confirmP(){
            this.sendout= {}
            this.sendout = {
                name: this.name,
                description: this.introduce,
                startDate: this.startdate,
                endDate: this.enddate,
                questionList: this.packageCheck.questionList,
                inPublished:true
            }
            fetch('http://localhost:8080/quiz/create', {
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
                localStorage.removeItem("quizoutCheck")
                localStorage.removeItem("newquiz")
                this.$router.push("/quizBackShow")
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
    },
    mounted(){
        this.packageCheck = JSON.parse(localStorage.getItem("quizoutCheck"))
        console.log(this.packageCheck)
        this.name = this.packageCheck.name
        this.introduce = this.packageCheck.description
        this.startdate = this.packageCheck.startDate
        this.enddate = this.packageCheck.endDate
        this.questionList = this.packageCheck.questionList
        this.dataLoaded = true
        for(let i = 0 ; i < this.packageCheck.questionList.length ; i++){
            this.showform.push(this.packageCheck.questionList[i])
        }
        console.log(this.showform)
        for(let i = 0 ; i < this.showform.length ; i++){
            if(this.showform[i].options == ""){
            } else {
                this.showform[i].options = this.showform[i].options.split(', ')
            }
        }
        //這行程式碼會導致我的檔案變成陣列而不是字串，最後無法傳輸檔案
        console.log(this.showform)
        this.packageCheck = JSON.parse(localStorage.getItem("quizoutCheck"))
        console.log(this.packageCheck)
    }
}
</script>

<template>
    <div class="box">
        <div class="createB">
            <div class="label">
                <p class="labelT">問卷</p>
                <p class="labelT">題目</p>
                <p class="labelS">問卷確認</p>
                <p class="labelT">問卷回饋</p>
                <p class="labelT">統計</p>
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
                    <div class="columBox" v-if="dataLoaded">
                        <div class="colum" v-for="(question, questionIndex) in this.showform.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="questionIndex">
                            <p class="font questionName">{{ question.title }}</p>
                            <textarea  name="" id="" cols="30" rows="10" style="resize: none;height: 150px; margin-bottom: 10px;" v-if="question.options === ''"></textarea>
                            <div class="selection" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                                <!-- <p>{{ question }}</p> -->
                                <input type="radio"  :value="optionIndex" :name="questionIndex" value="" style="margin-right: 5px;" v-if="question.type === '單選題'">
                                <input type="checkbox" :value="optionIndex" name="" id="" style="margin-right: 5px;" v-if="question.type === '多選題'">
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
                    <button type="button" class="font" style="height: 25%; border: 1px solid black; border-radius: 4px; margin-right: 5%;"><RouterLink to="/quizBackNewQuestion">取消</RouterLink></button>
                    <button type="button" class="font" @click="confirmH()" style="height: 25%; border: 1px solid black; border-radius: 4px;margin-right: 5%;">確認但不發布</button>
                    <button type="button" class="font" @click="confirmP()" style="height: 25%; border: 1px solid black; border-radius: 4px;">確認並發布</button>
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
        height: 150%;
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
                    line-height: 150%;
                    font-family: "jf-openhuninn-2.0";
                }
                .labelS{
                    width: 15%;
                    margin: 0;
                    font-size: 1.2em;
                    line-height: 150%;
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
                    .fontDes{
                        margin-bottom: 30px;
                        font-size: 1em;
                        font-family: "jf-openhuninn-2.0";
                    }
                }
                .quizList{
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
</style>