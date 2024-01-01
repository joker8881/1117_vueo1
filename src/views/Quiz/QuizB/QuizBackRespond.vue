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
        currentBoxPage:1,
        itemsBoxPerPage:3,
        contaionQuestion:[""],
        packageA:{},
        nextmessage:"",
        quizIndex:0,
        fillobject:[],
        writerList:[],
        answers:[],
        selectedAnswers:{},
        dataLoaded:false,
        // ===================
        writername:"",
        writerphone:"",
        writerage:"",
        writermail:"",
        pageC:"",
        //====================
        caculateAll:{}
        }
    },
    components: {
        RouterLink,
        Popper,
    },
    computed: {
    //計算總頁數
      totalPages() {
        return Math.ceil(this.writerList.length / this.itemsPerPage);
      },
      totalBoxPages(){
        return Math.ceil(this.fillobject.questions.length / this.itemsBoxPerPage);
      },
    },
    methods:{
        sendpackage(){
            // this.packageA.push(this.name,this.introduce,this.startdate,this.enddate)
            // console.log(this.packageA)
        },
        getData(){
            fetch(('http://localhost:8080/quiz/getWriterInfo'+ '?' + "quizIndex=" + this.quizIndex), {
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
                // this.fillobject = data
                this.writerList = data.writerList
                console.log(this.writerList)
                this.writerList = data.writerList.map(item => ({
                    ...item,
                    writeDateTime: this.formatWriteDateTime(item.writeDateTime),
                    answers:JSON.parse(item.answers)
                }));
                // this.answers = JSON.parse(this.writerList[0].answers)
                console.log(this.writerList)
                // console.log(this.answers)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        formatWriteDateTime(dateTime) {
            const originalDate = new Date(dateTime);
            const year = originalDate.getFullYear();
            const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
            const day = originalDate.getDate().toString().padStart(2, '0');
            const hours = originalDate.getHours().toString().padStart(2, '0');
            const minutes = originalDate.getMinutes().toString().padStart(2, '0');
            const seconds = originalDate.getSeconds().toString().padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },
        getQuiz(){
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
                console.log(this.writerList)
                // console.log(this.writerList.answers)
                // this.selectedAnswers = this.writerList.answers
                // console.log(this.selectedAnswers)
                this.dataLoaded = true
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        getWriterInfo(x){
            this.writername = this.writerList[x].name
            this.writerphone = this.writerList[x].phone
            this.writermail = this.writerList[x].email
            this.writerage = this.writerList[x].age
            this.selectedAnswers = this.writerList[x].answers
            console.log(this.selectedAnswers)
        },
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
        changeBoxPage(newPage) {
            this.pageC = ""
            this.currentIndexToDelete = 0
            if (newPage >= 1 && newPage <= this.totalBoxPages) {
                this.currentBoxPage = newPage;
            } else if(newPage > this.totalBoxPages) {
                this.pageC = "資料沒有那麼多"
            } else if(this.currentBoxPage == 1) {
                this.pageC = "你已經到第一頁了"
            } 
        },
        draw(){
            this.caculateAll = {
                startdate: this.startdate,
                enddate: this.enddate,
                name: this.name,
                question: this.fillobject.questions,
                questionAnswers: this.writerList
            }
            localStorage.setItem("quizStatic",JSON.stringify(this.caculateAll))
            this.$router.push("/quizBackStatic")
        }
    },
    mounted(){
        this.quizIndex = JSON.parse(localStorage.getItem("quizRespondIndex"))
        console.log(this.quizIndex)
        this.getData()
        setTimeout(() => {
            this.getQuiz()
        }, 500);
    },
}
</script>

<template>
    <div class="box">
        <div class="createB">
            <div class="label">
                <p class="labelT">問卷</p>
                <p class="labelT">題目</p>
                <p class="labelS">問卷回饋</p>
                <p class="labelT">統計</p>
            </div>
            <div class="writebox">
                <div class="tablebox">
                    <div class="columT">
                        <p class="font number">編號</p>
                        <p class="font name">姓名</p>
                        <p class="font state">填寫時間</p>
                        <p class="font start">觀看回覆</p>
                    </div>
                    <div class="columBox">
                    <div class="colum" v-if="this.writerList" v-for="(item, index) in this.writerList.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
                        <p class="font number">{{ item.index }}</p>
                        <p class="font name">{{ item.name }}</p>
                        <p class="font state">{{ item.writeDateTime }}</p>
                        <button type="button" class="font start" @click="getWriterInfo(index)" data-bs-toggle="modal" data-bs-target="#del">查看</button>
                    </div> 
                </div>
                <div class="modal fade" id="del" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title a" id="exampleModalLabel">撰寫者： {{ this.writername}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body mbl">
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
                                        <p class="font">姓名： {{ this.writername}}</p>
                                    </div>
                                    <div class="kk" style="display: flex;">
                                        <p class="font">手機：{{ this.writerphone }}</p>
                                    </div>
                                    <div class="kk" style="display: flex;">
                                        <p class="font">E-mail：{{ this.writermail }}</p>
                                    </div>
                                    <div class="kk" style="display: flex;">
                                        <p class="font">年齡：{{ this.writerage }}</p>
                                    </div>
                                    <div class="columBox" v-if="dataLoaded && fillobject != null">
                                    <!-- 第一個問題是questionIndex，第一個答案是optionIndex -->
                                        <div class="colum" v-for="(question, questionIndex) in this.fillobject.questions.slice((this.currentBoxPage - 1) * this.itemsBoxPerPage, this.currentBoxPage * this.itemsBoxPerPage)" :key="questionIndex">
                                            <p class="font questionName">{{ question.title }}</p>
                                            <textarea v-model="selectedAnswers[this.currentBoxPage][questionIndex].answers" name="" id="" cols="30" rows="10" style="resize: none;height: 150px; margin-bottom: 10px;" v-if="question.options === ''" disabled></textarea>
                                            <div class="selection" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                                                <input type="radio" v-model="selectedAnswers[this.currentBoxPage][questionIndex].answers" :value="optionIndex" :name="'A' + questionIndex + optionIndex" value="" style="margin-right: 5px;" v-if="question.type === '單選題'" disabled>
                                                <input type="checkbox" v-model="selectedAnswers[this.currentBoxPage][questionIndex].answers" :value="optionIndex" name="" id="" style="margin-right: 5px;" v-if="question.type === '多選題'" disabled>
                                                <p class="font questionSlection" >{{ (optionIndex+1) + ". " + option }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage - 1)"><a class="page-link" href="#">上一頁</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(page)" ><a class="page-link" href="#" disabled="!isInputValid">{{this.currentBoxPage}}</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage+1)"><a class="page-link" href="#">{{this.currentBoxPage+1}}</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage+2)"><a class="page-link" href="#">{{this.currentBoxPage+2}}</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage+3)"><a class="page-link" href="#">{{this.currentBoxPage+3}}</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage+4)"><a class="page-link" href="#">{{this.currentBoxPage+4}}</a></li>
                            </Popper>
                            <Popper arrow placement="top" class="root" :content="this.pageC">
                                <li class="page-item" @click="changeBoxPage(this.currentBoxPage + 1)"><a class="page-link" href="#">上一頁</a></li>
                            </Popper>
                        </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
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
                <button type="button" class="font" style="height: 25%; border: 1px solid black; border-radius: 4px; margin-right: 5%;"><RouterLink to="/quizBackShow">返回</RouterLink></button>
                <Popper  arrow placement="top" class="root" :content="this.nextmessage">
                    <button type="button" class="font" @click="draw()" style="width: 120px; height: 25%; border: 1px solid black; border-radius: 4px;margin-right: 5%;">統計圖表</button>
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
                        margin-left: 76%;
                    }
                }
            }
        }
    }

    .tablebox{
            padding-top: 3%;
            .columT{
            display: flex;
            width: 100%;
            background-color:grey;
            .number{
                width: 15%;
            }
            .name{
                width: 25%;
                text-align: start;
            }
            .state{
                width: 45%;
            }
            .start{
                width: 15%;
            }
            }
        }
        .columBox{
  height: 60%;
  width: 80%;
  margin: 0 auto;
  .colum{
    height: 15%;
    width: 100%;
    display: flex;
    // border: 5px solid slategray;
    .number{
      width: 15%;
      border: 1px solid slategray;
    }
    .name{
      width: 25%;
      text-align: start;
      border: 1px solid slategray;
    }
    .state{
      width: 45%;
      border: 1px solid slategray;
    }
    .start{
      width: 15%;
      border: 1px solid slategray;
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
    .quizList{
        background-color: white;
        .columBox{
            .colum{
                display: flex;
                flex-direction: column;
                .questionName{
                    width: 100%;
                    text-align: start;
                    margin: 0 auto;
                }
                .questionSlection{
                    width: 85%;
                    text-align: start;
                }
                .selection{
                    width: 85%;
                    display: flex;
                    margin: 0 auto;
                }
            }
        }
    }
</style>