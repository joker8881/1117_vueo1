<script>
import Popper from "vue3-popper";
import { RouterLink, RouterView } from "vue-router";
export default{
    data(){
        return{
        // =================
        questionT:"",
        type:0,
        necessary:"",
        x:[],
        selection:[],
        selectionO:[],
        // ================= 每個問題
        changeA:["單選題","多選題","簡答題"],
        // 轉換用陣列
        currentPage:1,
        itemsPerPage:5,
        searchResult:[
                {
                    number:1,
                    content: "如果你說你愛我",
                    type:"單選",
                    necessary:true,
                    result:"前往"
                },
                {
                    number:2,
                    content: "如果你說你愛我",
                    type:"複選",
                    necessary:false,
                    result:"前往"
                },
            ],
        packageB:[],
        pageC:"",
        quizName:"AAA",
        a:false,
        // ====================
        name:"",
        introduce:"",
        startdate:"",
        enddate:"",
        // quiz借來的值
        // ====================
        newQuestion:[],
        questionList:[],
        selectionT:[], //暫時存放選項的地方，為了要讓選項在下面可以列印出來
        // ====================
        currentIndexToDelete:0,
        currentIndexToChange:0,
        changeSelection:"",
        resultT:"前往",
        cc:[]
        // 刪除序
        }
    },
    components: {
      RouterLink,
      Popper,
    },
    computed: {
    //計算總頁數
        totalPages() {
            return Math.ceil(this.questionList.length / this.itemsPerPage);
        },
        textareaDisabled(){
            console.log(this.type)
            return this.type == 2
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
                this.pageC = "你沒有那麼多選項"
            } 
        },
        newSlection(){
            this.selection.push(this.selectionO)
            console.log(this.selection)
            this.selectionO = ''
        },
        deleteSlection(index){
            this.selection.splice(index, 1);
        },
        newSlectionInBox(){
            this.changeSelection.push(this.selectionO)
            console.log(this.changeSelection)
            this.selectionO = ''
        },
        deleteSlectionInBox(index){
            this.changeSelection.splice(index, 1);
        },
        newW(){
            this.selectionT= []
            this.selection = this.selection.join(', ')
            console.log(this.selection)
            this.selectionT = {
                index: (this.questionList.length+1),
                title: this.questionT,
                type: this.changeA[this.type],
                necessary: this.necessary,
                options: this.selection,
                resultT: this.resultT
            }
            this.questionList.push(this.selectionT)
            console.log(this.selectionT)
            console.log(this.questionList.length)
            console.log(this.questionList)
            this.questionT = ""
            this.type = 0
            this.necessary = ""
            this.selection = []
            // localStorage.setItem("savemyquiz",JSON.stringify(this.packageA))
        },
        confirmB(){
            this.packageB.questionList = this.questionList
            console.log(this.packageB)
            localStorage.setItem("quizoutCheck",JSON.stringify(this.packageB))
            this.$router.push("/quziBackQuizCheck")
            // localStorage.removeItem("keep")
        },
        del(index) {
            this.currentIndexToDelete = index;
            const pageofindex = (this.currentPage - 1) * this.itemsPerPage +  this.currentIndexToDelete;
            if (pageofindex >= 0 && pageofindex < this.questionList.length) {
                this.questionList.splice(pageofindex, 1);
            }
        },
        setNumberOfChage(index){
            this.currentIndexToChange = index
            const pageofindex = (this.currentPage - 1) * this.itemsPerPage +  this.currentIndexToChange;
            this.changeSelection = this.questionList[pageofindex].options.split(', ')
        },
        changeS(){
            const pageofindex = (this.currentPage - 1) * this.itemsPerPage +  this.currentIndexToChange;
            console.log(pageofindex)
            if (pageofindex >= 0 && pageofindex < this.questionList.length) {
                this.questionList[pageofindex].options = this.changeSelection.join(', ');
                console.log(this.questionList)
            }
            console.log(this.selectionT)
            this.changeSelection = ""
        }
    },
    mounted(){
        this.packageB = JSON.parse(localStorage.getItem("newquiz"))
        if (this.packageB != null) {
            this.name=this.packageB[0]
            this.introduce=this.packageB[1]
            this.startdate=this.packageB[2]
            this.enddate=this.packageB[3]
        }
        console.log(this.packageB)
    },
}
</script>

<template>
    <div class="box">
        <div class="createB">
            
            <div class="label">
                <p class="labelT">問卷</p>
                <p class="labelS">題目</p>
                <p class="labelT">問卷確認</p>
                <p class="labelT">問卷回饋</p>
                <p class="labelT">統計</p>
            </div>
            <div class="writebox">
                <div class="namebox">
                    <p class="font name">問題：</p>
                    <input type="text" name="" id="" class="nameinput" v-model="this.questionT">
                    <select class="form-select selection" aria-label="Default select example" v-model="this.type">
                        <option value="0">單選題</option>
                        <option value="1">多選題</option>
                        <option value="2">簡答題</option>
                    </select>
                    <input type="checkbox" name="" id="" style="margin: 0 20px;" v-model="this.necessary">
                    <p class="font name" style="line-height: 200%;">必填</p>
                </div>
                <div class="interducebox">
                    <p class="font name">選項：</p>
                        <textarea name="" id="" cols="30" rows="10" class="interduceinput" v-model="this.selectionO" :disabled="textareaDisabled"></textarea>
                </div>
                <div class="seletionBox" v-for="(item, index) in this.selection" :key="index">
                    <p  style="margin: 0 0 0 18%; text-align: start;">{{ (index+1)+ "　" + item }}</p>
                    <i class="fa-solid fa-trash-can" @click="deleteSlection(index)" style="margin-left: 5px;margin-top: 2px;"></i>
                </div>
                <button type="button" class="font" @click="newSlection" style="height: 5%; border: 1px solid black; border-radius: 4px; margin: 20px 60% 20px 0;" :disabled="textareaDisabled">新增選項</button>
                <button type="button" class="font" @click="newW()" style="height: 5%; border: 1px solid black; border-radius: 4px; margin: 20px 60% 20px 0;">新增問題</button>
                <div class="columT">
                    <p class="font number"></p>
                    <p class="font name">編號</p>
                    <p class="font state">內容</p>
                    <p class="font start">問題種類</p>
                    <p class="font end">必填</p>
                    <P class="font result">編輯</P>
                </div>
                <div class="colum" v-for="(item, index) in this.questionList.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
                    <div class="font number"><i class="fa-solid fa-trash-can" @click="del(index)"></i></div>
                    <!-- <p class="font number"><input type="checkbox" name="" id=""></p> -->
                    <p class="font name"># {{ (this.currentPage - 1) * this.itemsPerPage + index + 1 }}</p>
                    <p class="font state">{{ this.questionList[(this.currentPage - 1) * this.itemsPerPage + index].title }}</p>
                    <p class="font start">{{ this.questionList[(this.currentPage - 1) * this.itemsPerPage + index].type }}</p>
                    <!-- <p class="font end">{{ this.searchResult[index].necessary }}</p> -->
                    <div class="font end"><input type="checkbox" name="" id="" disabled v-model="this.questionList[(this.currentPage - 1) * this.itemsPerPage + index].necessary" style="height: 20px; width: 20px;"></div>
                    <p class="font result"><button type="button" class="btn btn-primary btmC" data-bs-toggle="modal" data-bs-target="#additem" @click="setNumberOfChage(index)" :disabled="item.type === '簡答題'">修改</button></p>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="additem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title a" id="exampleModalLabel">請輸入</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body mbl">
                                <p class="font boxT">在這裡重新輸入選項</p>
                                <div class="form-floating mb-3">
                                    <div class="interduceboxX">
                                        <p class="font name">選項：</p>
                                        <!-- <p class="font">多個答案請以：分隔</p> -->
                                        <textarea name="" id="" cols="30" rows="10" class="interduceinput" v-model="this.selectionO"></textarea>
                                    </div>
                                    <div class="seletionBoxB" v-for="(item, index) in this.changeSelection" :key="index">
                                        <p  style="margin: 0 0 0 18%; text-align: start;">{{ (index+1)+ "　" + item }}</p>
                                        <i class="fa-solid fa-trash-can" style="margin-left: 10px; margin-top: 5px;" @click="deleteSlectionInBox(index)"></i>
                                    </div>
                                    <button type="button" class="font" @click="newSlectionInBox" style="height: 5%; border: 1px solid black; border-radius: 4px; margin: 20px 60% 20px 0;">新增選項</button>
                                </div>
                            </div>
                            <div class="modal-footer" style="justify-content: space-around;">
                                <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: red;border: none;" @click="changeS()">確認修改</button>
                            </div>
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
              <div class="rightD">
                        <button type="button" class="font" style="height: 25%; border: 1px solid black; border-radius: 4px; margin-right: 5%;"><RouterLink to="/QuizBackNewQuiz">取消</RouterLink></button>
                        <Popper  arrow placement="top" class="root" :content="this.nextmessage">
                            <button type="button" class="font" @click="confirmB" style="height: 25%; border: 1px solid black; border-radius: 4px;">下一頁</button>
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
                .quiz{
                    margin: 0;
                    display: flex;
                }
                .selectionbox{
                    margin: 0;
                    display: flex;
                }
                .columT{
                    display: flex;
                    margin: 0 auto;
                    width: 80%;
                    background-color:grey;
                    .number{
                        width: 10%;
                    }
                    .name{
                        width: 10%;
                        // text-align: start;
                    }
                    .state{
                        width: 30%;
                    }
                    .start{
                        width: 20%;
                    }
                    .end{
                        width: 20%;
                    }
                    .result{
                        width: 10%;
                    }
                }
                .colum{
                    margin: 0 auto;
                    width: 80%;
                    display: flex;
                    // border: 5px solid slategray;
                    .number{
                        width: 10%;
                        border: 1px solid slategray;
                        line-height: 350%;
                    }
                    .name{
                        width: 10%;
                        border: 1px solid slategray;
                        text-align: center;
                        line-height: 350%;
                    }
                    .state{
                        width: 30%;
                        border: 1px solid slategray;
                        text-align: center;
                        line-height: 350%;
                    }
                    .start{
                        width: 20%;
                        border: 1px solid slategray;
                        text-align: center;
                        line-height: 350%;
                    }
                    .end{
                        width: 20%;
                        border: 1px solid slategray;
                        text-align: center;
                        line-height: 350%;
                    }
                    .result{
                        width: 10%;
                        border: 1px solid slategray;
                        text-align: center;
                        line-height: 350%;
                    }
                }
                .namebox{
                        width: 80%;
                        display: flex;
                        padding: 2% 0;
                        margin: 0 auto;
                        .name{
                            text-align: start;
                        }
                        .nameinput{
                            margin-left: 2%;
                            margin-top: 0.5%;
                            width: 40%;
                        }
                        .selection{
                            height: 10%;
                            width: 30%;
                            margin-left: 2%;
                            margin-top: 0.5%;
                        }
                    }
                .interducebox{
                    margin: 0 auto;
                    width: 80%;
                    display: flex;
                    padding: 2% 0;
                    height: 15%;
                    .name{
                        text-align: start;
                        height: 20%;
                    }
                        .interduceinput{
                        text-align: start;
                        margin-left: 2%;
                        margin-top: 0.5%;
                        width: 80%;
                        height: 99%;
                        resize: none;
                        }
                }
                .seletionBox{
                    display: flex;
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
    .interduceboxX{
        display: flex;
        height: 25%;
        .interduceinput{
            height: 25%;
            resize: none;
        }
    }
    .seletionBoxB{
        display: flex;
    }
</style>