<script>
import { mapState,mapActions } from 'pinia'
import counter from '../../stores/counter'
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
        whatever:{},
        showSerch:false,
        show:false,
        //登入
        account:"",
        password:""
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
        ...mapActions(counter,["getLocation","setLocation"]),
        search() {
            fetch('http://localhost:8080/quiz/search', {
                method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quizName:this.searchText,
                    startDate:this.searchStart,
                    endDate:this.searchEnd,
                    login: false,
                })
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
                this.whatever = data.quizList
                console.log(this.whatever)
                for(let i = 0 ; i <this.whatever.length ; i++){
                  if(this.whatever[i].questions != null || this.whatever[i].questions !=""){
                    this.whatever[i].questions = JSON.parse(this.whatever[i].questions)
                  }
                }
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
          // 西元年-月-日格式
          this.localDate = now.toLocaleDateString('en-US'); 
          let dateObject = new Date(this.localDate)
          this.localDate = dateObject.getFullYear() + '-' + (dateObject.getMonth() + 1).toString().padStart(2, '0') + '-' + (dateObject.getDate()).toString().padStart(2, '0');
          console.log(this.localDate)
        },
        clickC(){
      let e = document.getElementsByName("eye")
      let acc = document.getElementById("acc")
      if(e.class == "fa-solid fa-eye fa-lg eye"){
        e.class="fa-solid fa-eye-slash fa-lg eye"
        acc.type="text"
        this.show = 1
      } else{
        e.class="fa-solid fa-eye fa-lg eye"
        acc.type="password"
        this.show = 0
      }
    },
    login(){
      fetch('http://localhost:8080/quiz/login', {
                method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  account:this.account,
                  password:this.password,
                })
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
                this.$router.push("/quizBackShow")
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    writeRespond(x){
      localStorage.setItem("quizIndex",JSON.stringify(x))
      this.$router.push("/quizAnswer")
    }
    },
    mounted(){
      this.setLocation(17)
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
                <button type="button" class="searchB" style="width: 100px;" data-bs-toggle="modal" data-bs-target="#login">登入</button>
            </div>
        </div>
        <div class="tablebox">
            <div class="columT">
                <p class="font number">編號</p>
                <p class="font name">名稱</p>
                <p class="font state">狀態</p>
                <p class="font start">開始時間</p>
                <p class="font end">結束時間</p>
                <p class="font pabulish">填寫</p>
                <P class="font result">結果</P>
            </div>
            <div class="columBox">
              <div class="colum" v-if="this.showSerch" v-for="(item, x) in this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="x">
                    <p class="font number">{{ item.index }}</p>
                    <p class="font name">{{ item.name }}</p>
                    <p class="font state" v-if="item.startDate > this.localDate" style="background-color:#B19693">尚未開始</p>
                    <p class="font state" v-if="item.startDate <= this.localDate && this.localDate <= item.endDate" style="background-color: #86C166">開始填寫</p>
                    <p class="font state" v-if="item.endDate < this.localDate" style="background-color: #F19483;">已結束</p>
                    <p class="font start">{{ item.startDate }}</p>
                    <p class="font end">{{ item.endDate }}</p>
                    <!-- <p class="font pabulish" v-if="item.published == false">未發布</p>
                    <p class="font pabulish" v-if="item.published == true">已發布</p> -->
                    <button type="button" class="font pabulish" @click="" v-if="item.startDate > this.localDate || item.endDate < this.localDate" disabled>填寫</button>
                    <button type="button" class="font pabulish" @click="writeRespond(item.index)" v-if="(item.startDate <= this.localDate && this.localDate <= item.endDate)">填寫</button>
                    <!-- <div class="font delete"></div> -->
                    <button type="button" class="font result" @click="" data-bs-toggle="modal" data-bs-target="#delete">前往</button>
                    <!-- <p class="font result" @click="searchForRespond">查看</p> -->
              </div> 
            </div>
            <!-- 登入的地方 -->
            <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title font" id="exampleModalLabel">請輸入帳號密碼來登入</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body mbl">
                    <div class="form-floating mb-3">
                      <div class="interduceboxX">
                        <p class="font">帳號</p>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control tb" id="floatingInput" placeholder="name@example.com" v-model="this.account">
                          <label class="tbc font" for="floatingInput">請在這裡輸入帳號</label>
                        </div>
                      </div>
                      <p class="font">密碼</p>
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control tbp" id="acc" placeholder="" v-model="this.password">
                        <i v-if="this.show == 0" class="fa-solid fa-eye fa-lg eye" @click="this.clickC()" name="eye"></i>
                        <i v-if="this.show == 1" class="fa-solid fa-eye-slash fa-lg eye" @click="this.clickC()" name="eye"></i>
                        <label class="tbc font" for="floatingInput">請在這裡輸入密碼</label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer" style="justify-content: space-around;">
                    <button type="button" class="btn btn-primary font" data-bs-dismiss="modal" style="background-color: red;border: none;" >取消</button>
                    <button type="button" class="btn btn-primary font" data-bs-dismiss="modal" style="border: none; background-color: green;" @click="login">登入</button>
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
                    margin-left: 30px;
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
                width: 15%;
            }
            .end{
                width: 15%;
            }
            .pabulish{
              width: 10%;
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
      width: 15%;
      border: 1px solid slategray;
    }
    .end{
      width: 15%;
      border: 1px solid slategray;
    }
    .pabulish{
      width: 10%;
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
    .tb{
    width: 80%;
    margin: 0 auto;
  }
    .tbp{
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .tbc{
    margin-left: 10%;
  }
  .eye{
    position: absolute;
    bottom: 50%;
    right: 14%;
    transition: 0.3s;
    &:hover{
      color: rgb(255, 173, 65);
    }
  }
</style>