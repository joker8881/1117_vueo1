<script>
import { mapState,mapActions } from 'pinia'
import Popper from "vue3-popper";
import { RouterLink, RouterView } from "vue-router";
export default{
    data(){
        return{
        searchText:"",
        searchStart:"",
        searchEnd:"",
        localDate:"",
        currentPage:1,
        itemsPerPage:10,
        searchResult:[
                {
                    number:1,
                    name: "如果你說你愛我",
                    state:"開始",
                    start:"2023-12-22",
                    end:"2024-1-22",
                    result:"前往"
                },
                {
                    number:2,
                    name: "愛我別走",
                    state:"開始",
                    start:"2023-12-22",
                    end:"2024-1-22",
                    result:"前往"
                },
            ],
        packageB:[],
        quizName:"AAA",
        showSerch:false,
        whatever:{},
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
        search() {
            fetch('http://localhost:8080/quiz/search', {
                method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quizName:"",
                    startDate:"",
                    endDate:"",
                    login: true,
                })
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
                this.whatever = data.quizList
                console.log(this.whatever)
                this.showSerch = true
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
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
    getLocalDate() {
      const now = new Date();
      // 获取西元年-月-日格式
      this.localDate = now.toLocaleDateString('en-US'); // 根据需要设置不同的语言环境
      console.log(this.localDate)
    }
    },
    mounted(){
      this.getLocalDate()
    },
}
</script>

<template>
    <div class="box">
        <div class="upbox">
            <div class="searchName">
                <p class="a" >問卷名稱</p>
                <input class="searchInput" type="text" v-model="searchText">
            </div>
            <div class="searchDay">
                <p class="a" >統計時間</p>
                <input type="date" class="searchDayD" name="" id="" v-model="searchStart">
                <p class="b" >到</p>
                <input type="date" class="searchDayD" name="" id="" v-model="searchEnd">
                <button type="button" class="searchB" @click="search">搜尋</button>
            </div>
        </div>
        <div class="tablebox">
            <div class="columT">
                <p class="font number">編號</p>
                <p class="font name">名稱</p>
                <p class="font state">狀態</p>
                <p class="font start">開始時間</p>
                <p class="font end">結束時間</p>
                <P class="font result">結果</P>
            </div>
            <div class="columBox">
              <div class="colum" v-for="(item, index) in this.searchResult.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
                    <p class="font number">{{ this.searchResult[index].number }}</p>
                    <p class="font name">{{ this.searchResult[index].name }}</p>
                    <p class="font state">{{ this.searchResult[index].state }}</p>
                    <p class="font start">{{ this.searchResult[index].start }}</p>
                    <p class="font end">{{ this.searchResult[index].end }}</p>
                    <p class="font result">{{ this.searchResult[index].result }}</p>
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
          <RouterLink to="/quizBackNewQuiz">create</RouterLink>
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
        .upbox{
            height: 35%;
            width: 100%;
            padding-top: 10%;
            // background-color: burlywood;
            .searchName{
                padding-top: 20px;
                background-color: burlywood;
                display: flex;
                justify-content: start;
                .a{
                    margin: 0 30px 0 60px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                }
                .b{
                    margin: 0 30px 0 30px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                }
                .searchInput{
                    width: 70%;
                }
                .searchDayD{
                    width: 20%;
                }
                .searchB{
                    width: 80px;
                    margin-left: 60px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                    border: none;
                    border-radius: 5px;
                }
            }
            .searchDay{
                background-color: burlywood;
                display: flex;
                justify-content: start;
                padding: 30px 0 20px 0;
                .a{
                    margin: 0 30px 0 60px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                }
                .b{
                    margin: 0 30px 0 30px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                }
                .searchDayD{
                    width: 20%;
                }
                .searchB{
                    width: 80px;
                    margin-left: 60px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                    border: none;
                    border-radius: 5px;
                }
            }
        }
        .tablebox{
            margin-top: 3%;
            .columT{
            display: flex;
            width: 100%;
            background-color:grey;
            .number{
                width: 10%;
            }
            .name{
                width: 25%;
                text-align: start;
            }
            .state{
                width: 15%;
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
        }
    }
    .columBox{
  height: 60%;
  width: 100%;
  margin: 0 auto;
  .colum{
    height: 15%;
    width: 100%;
    display: flex;
    // border: 5px solid slategray;
    .number{
      width: 10%;
      border: 1px solid slategray;
    }
    .name{
      width: 25%;
      text-align: start;
      border: 1px solid slategray;
    }
    .state{
      width: 15%;
      border: 1px solid slategray;
    }
    .start{
      width: 20%;
      border: 1px solid slategray;
    }
    .end{
      width: 20%;
      border: 1px solid slategray;
    }
    .result{
      width: 10%;
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
</style>