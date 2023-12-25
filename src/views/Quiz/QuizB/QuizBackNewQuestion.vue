<script>
import Popper from "vue3-popper";
import { RouterLink, RouterView } from "vue-router";
export default{
    data(){
        return{
        selectT:"",
        currentPage:1,
        itemsPerPage:5,
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
        packageB:[],
        pageC:"",
        quizName:"AAA",

        }
    },
    components: {
      RouterLink,
      Popper,
    },
    computed: {
    //計算總頁數
        totalPages() {
            return Math.ceil(this.searchResult.length / this.itemsPerPage);
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
    },
}
</script>

<template>
    <div class="box">
        <div class="createB">
            
            <div class="label">
                <p class="labelT">問卷</p>
                <p class="labelS">題目</p>
                <p class="labelT">問卷回饋</p>
                <p class="labelT">統計</p>
            </div>
            <div class="writebox">
                <div class="namebox">
                    <p class="font name">問題：</p>
                    <input type="text" name="" id="" class="nameinput" v-model="this.name">
                    <select class="form-select selection" aria-label="Default select example">
                        <option value="1">單選題</option>
                        <option value="2">多選題</option>
                        <option value="3">簡答題</option>
                    </select>
                    <input type="checkbox" name="" id="" style="margin: 0 20px;">
                    <p class="font name" style="line-height: 200%;">必填</p>
                </div>
                <div class="interducebox">
                    <p class="font name">選項：</p>
                    <div class="interduceI">
                        <p class="font">多個答案請以：分隔</p>
                        <textarea name="" id="" cols="30" rows="10" class="interduceinput" v-model="this.introduce"></textarea>
                    </div>
                </div>
                <div class="columT">
                    <p class="font number"></p>
                    <p class="font name">編號</p>
                    <p class="font state">內容</p>
                    <p class="font start">問題種類</p>
                    <p class="font end">必填</p>
                    <P class="font result">編輯</P>
                </div>
                <div class="colum" v-for="(item, index) in this.searchResult.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
                    <p class="font number"><input type="checkbox" name="" id=""></p>
                    <p class="font name">{{ this.searchResult[index].number }}</p>
                    <p class="font state">{{ this.searchResult[index].content }}</p>
                    <p class="font start">{{ this.searchResult[index].type }}</p>
                    <p class="font end">{{ this.searchResult[index].necessary }}</p>
                    <p class="font result">{{ this.searchResult[index].result }}</p>
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
                        <button type="button"><RouterLink to="/QuizBackNewQuiz">取消</RouterLink></button>
                        <Popper  arrow placement="top" class="root" :content="this.nextmessage">
                            <button type="button" @click="register">下一頁</button>
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
                    height: 30%;
                    .name{
                        text-align: start;
                        height: 20%;
                    }
                    .interduceI{
                        width: 70%;
                        .interduceinput{
                        text-align: start;
                        margin-left: 2%;
                        margin-top: 0.5%;
                        width: 90%;
                        height: 80%;
                        resize: none;
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
</style>