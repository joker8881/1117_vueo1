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
        //搜尋用
        localDate:"",
        //本地時間
        currentPage:1,
        itemsPerPage:10,
        packageB:[],
        quizName:"AAA",
        showSerch:false,
        whatever:{},
        // =================================
        // 問卷修改所需要的所有參數
        changeQuizIndex:"",//傳資料時需要序列
        changeQuizName:"", //修改題目
        changeDescription:"", //修改說明
        changeStartDate:"", //修改開始日期
        changeEndDate:"", //修改結束日期
        changeSelection:"", //修改問題
        // changePublished:false, //發布與否
        catchShow:false,
        // 新增問題
        selectionO:"",
        selection:[],
        selectionT:"",
        // =================================
        questionT:"",
        type:"",
        necessary:"",
        upIndex:"",
        changeA:["單選題","多選題","簡答題"],
        //==================================
        //刪除方法
        deleteIndex:"",
        arrayIndex:"",
        //==================================
        //修改問卷內用的參數
        currentBoxPage:1,
        itemsBoxPerPage:5,
        pageC:"",
        //==================================
        //傳出
        sendout:{},
        }
    },
    components: {
      RouterLink,
      Popper,
    },
    computed: {
    //計算總頁數
      totalPages() {
        return Math.ceil(this.whatever.length / this.itemsPerPage);
      },
      totalBoxPages(){
        return Math.ceil(this.changeSelection.length / this.itemsPerPage);
      },
      textareaDisabled(){
            console.log(this.type)
            return this.type == 2
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
                    quizName:this.searchText,
                    startDate:this.searchStart,
                    endDate:this.searchEnd,
                    login: true,
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
        changeBoxPage(newPage) {
                this.pageC = ""
                this.currentIndexToDelete = 0
                if (newPage >= 1 && newPage <= this.totalBoxPages) {
                    this.currentPage = newPage;
                } else if(newPage > this.totalBoxPages) {
                    this.pageC = "資料沒有那麼多"
                } else if(this.currentBoxPage == 1) {
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
        updateCatch(index){
          this.catchShow = true
          let x = this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
          this.changeQuizIndex = x[index].index
          this.changeQuizName = x[index].name
          this.changeDescription = x[index].description
          this.changeStartDate = x[index].startDate
          this.changeEndDate = x[index].endDate
          this.changeSelection = x[index].questions
          console.log(this.changeQuizIndex)
          let y = this.changeSelection
          if(this.changeSelection != null){
            this.changeSelection.forEach(element => {
              if(!element.options == ""){
                  element.options = element.options.split(', ');
              }
            })
          }
          this.upIndex = index
            // for(let i=0 ; i < y.options.length ; i++){
            //   this.changeSelection[x].options[i] = y[x].options[i].split(', ')
            // }
          console.log(this.changeSelection)
          console.log(this.upIndex)
          console.log(this.whatever)
        },
        updateComfirmDp(){
          let x = this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
          this.changeSelection.forEach(element => {
              if(!element.options == ""){
                  element.options = element.options.join(', ')
              }
            })
          console.log(this.changeSelection)
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].name = this.changeQuizName
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].description = this.changeDescription
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].startDate = this.changeStartDate
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].endDate = this.changeEndDate
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions = this.changeSelection
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].published = false
          console.log(this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex])
            // 所以會長 http://localhost:8080/quiz/delete?quizIndexList=刪除序號
            fetch(('http://localhost:8080/quiz/update'+ '?' + "index=" + this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].index), {
            method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                  name:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].name,
                  description:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].description,
                  startDate:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].startDate,
                  endDate:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].endDate,
                  questionList:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions,
                  inPublished:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].published,
                })
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
          this.changeQuizIndex = ""
          this.changeQuizName = ""
          this.changeDescription = ""
          this.changeStartDate = ""
          this.changeEndDate = ""
          this.changeSelection = ""
          this.catchShow = false
        },
        updateComfirmP(){
          let x = this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
          this.changeSelection.forEach(element => {
              if(!element.options == ""){
                  element.options = element.options.join(', ')
              }
            })
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].name = this.changeQuizName
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].description = this.changeDescription
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].startDate = this.changeStartDate
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].endDate = this.changeEndDate
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions = this.changeSelection
          this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].published = true
          console.log(this.whatever)
          console.log(this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex])
            // 所以會長 http://localhost:8080/quiz/delete?quizIndexList=刪除序號
            fetch(('http://localhost:8080/quiz/update'+ '?' + "index=" + this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].index), {
            method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                  name:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].name,
                  description:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].description,
                  startDate:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].startDate,
                  endDate:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].endDate,
                  questionList:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions,
                  inPublished:this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].published,
                })
            })
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
          this.changeQuizIndex = ""
          this.changeQuizName = ""
          this.changeDescription = ""
          this.changeStartDate = ""
          this.changeEndDate = ""
          this.changeSelection = ""
          this.catchShow = false
        },
        deleteQuiz(YYY){
          let x = this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
          this.deleteIndex = x[YYY].index
          this.arrayIndex = ((this.currentPage - 1) * this.itemsPerPage) + YYY
          console.log(this.deleteIndex)
          console.log(this.arrayIndex)
        },
        comfirmDeleteQuiz(){
          // fetch 刪除方法 使用@RequestParam(value = "quizIndexList")
          // 所以會長 http://localhost:8080/quiz/delete?quizIndexList=刪除序號
          console.log(('http://localhost:8080/quiz/delete' + '?' + "quizIndexList=" + this.deleteIndex))
          fetch(('http://localhost:8080/quiz/delete' + '?' + "quizIndexList=" + this.deleteIndex), {
            method: 'POST', // 這裡使用POST方法，因為後端是@PostMapping
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(data => {
            // 處理返回的數據
                console.log(data)
                this.whatever.splice(this.arrayIndex, 1)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        questionDeleteInBox(x){
          this.changeSelection.splice(x,1)
          console.log(this.changeSelection)
        },
        newSlection(){
            this.selection.push(this.selectionO)
            console.log(this.selection)
            this.selectionO = ''
        },
        deleteSlection(index){
            this.selection.splice(index, 1);
        },
        newW(){
            this.selectionT= []
            // this.selection = this.selection
            console.log(this.selection)
            this.selectionT = {
                index: (this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions.length+1),
                title: this.questionT,
                type: this.changeA[this.type],
                necessary: this.necessary,
                options: this.selection,
            }
            this.whatever[((this.currentPage - 1) * this.itemsPerPage) + this.upIndex].questions.push(this.selectionT)
            console.log(this.selectionT)
            this.questionT = ""
            this.type = 0
            this.necessary = ""
            this.selection = []
            // localStorage.setItem("savemyquiz",JSON.stringify(this.packageA))
        },
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
                <button type="button" class="searchB" style="width: 100px;"><RouterLink to="/quizBackNewQuiz" class="font" style="color: black;text-decoration: none;font-size: 1em;">新增問卷</RouterLink></button>
            </div>
        </div>
        <div class="tablebox">
            <div class="columT">
                <p class="font number">編號</p>
                <p class="font name">名稱</p>
                <p class="font state">狀態</p>
                <p class="font start">開始時間</p>
                <p class="font end">結束時間</p>
                <p class="font pabulish">發布</p>
                <P class="font result">結果</P>
                <P class="font delete">刪除</P>
            </div>
            <div class="columBox">
              <div class="colum" v-if="this.showSerch" v-for="(item, index) in this.whatever.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
                    <p class="font number">{{ item.index }}</p>
                    <p class="font name">{{ item.name }}</p>
                    <p class="font state" v-if="item.startDate > this.localDate" style="background-color:#B19693">尚未開始</p>
                    <p class="font state" v-if="item.startDate <= this.localDate && this.localDate <= item.endDate" style="background-color: #86C166">開始填寫</p>
                    <p class="font state" v-if="item.endDate < this.localDate" style="background-color: #F19483;">已結束</p>
                    <p class="font start">{{ item.startDate }}</p>
                    <p class="font end">{{ item.endDate }}</p>
                    <button type="button" class="font pabulish" v-if="item.published == false" data-bs-toggle="modal" data-bs-target="#update" @click="updateCatch(index)">未發佈</button>
                    <button type="button" class="font pabulish" v-if="item.published == true" disabled>已發佈</button>
                    <!-- <p class="font pabulish" v-if="item.published == false">未發布</p>
                    <p class="font pabulish" v-if="item.published == true">已發布</p> -->
                    <button type="button" class="font result" @click="searchForRespond" v-if="item.startDate > this.localDate" disabled>查看</button>
                    <button type="button" class="font result" @click="searchForRespond" v-if="(item.startDate <= this.localDate && this.localDate <= item.endDate) || item.endDate < this.localDate">查看</button>
                    <!-- <div class="font delete"></div> -->
                    <button type="button" class="font delete" @click="deleteQuiz(index)" data-bs-toggle="modal" data-bs-target="#delete"><i class="fa-solid fa-trash-can"></i></button>
                    <!-- <p class="font result" @click="searchForRespond">查看</p> -->
              </div> 
            </div>
          <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title a" id="exampleModalLabel">確認是否要刪除問卷</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer" style="justify-content: space-around;">
                    <button type="button" class="btn btn-primary font" data-bs-dismiss="modal" style="border: none; background-color: green;">取消</button>
                    <button type="button" class="btn btn-primary font" data-bs-dismiss="modal" style="border: none; background-color: red" @click="comfirmDeleteQuiz">刪除</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title a" id="exampleModalLabel">請輸入修改</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mbl" v-if="this.catchShow">
                  <p class="boxT font">問卷名稱</p>
                  <input type="text" class="font" style="width: 80%;" name="" id="" v-model="this.changeQuizName">
                  <p class="boxT font">問卷說明</p>
                  <textarea name="" id="" cols="30" rows="10" class="font interduceinput" v-model="this.changeDescription"></textarea>
                  <div class="timeBox" style="display: flex; justify-content:space-evenly;"><p class="boxT font">開始時間</p><p class="boxT font">結束時間</p></div>
                  <div class="timeBox" style="display: flex; justify-content:space-evenly;">
                    <input type="date" name="" id="" class="timeinput" v-model="this.changeStartDate">
                    <input type="date" name="" id="" class="timeinput" v-model="this.changeEndDate">
                  </div>
                  <p class="boxT font" v-if="this.changeStartDate <= this.localDate" style="color: red;">修改後的開始時間不能比今天更早！</p>
                  <div class="writebox">
                    <div class="namebox">
                      <div class="questionBoxInBox" style="width: 80%;display: flex;margin: 10px auto;">
                        <p class="font name">新增問題：</p>
                        <input type="text" name="" id="" class="nameinput" v-model="this.questionT">
                      </div>
                        <select class="form-select selection" aria-label="Default select example" v-model="this.type">
                          <option value="0">單選題</option>
                          <option value="1">多選題</option>
                          <option value="2">簡答題</option>
                        </select>
                        <div class="questionBoxInBox" style="width: 30%;display: flex;margin: 10px auto;">
                          <input type="checkbox" name="" id="" style="margin: 0 20px;" v-model="this.necessary">
                          <p class="font name" style="line-height: 200%;">必填</p>
                        </div>
                    </div>
                    <div class="interducebox" >
                      <p class="font name">選項：</p>
                      <textarea name="" id="" cols="30" rows="10" v-model="this.selectionO" :disabled="textareaDisabled" style="height: 5%; resize: none;"></textarea>
                    </div>
                    <div class="seletionBox" v-for="(item, index) in this.selection" :key="index" style="display: flex;">
                      <p  style="margin: 0 0 0 18%; text-align: start;">{{ (index+1)+ "　" + item }}</p>
                      <i class="fa-solid fa-trash-can" @click="deleteSlection(index)" style="margin-left: 5px;margin-top: 2px;"></i>
                    </div>
                    <button type="button" class="font" @click="newSlection" style="height: 5%; border: 1px solid black; border-radius: 4px; margin: 20px 60% 20px 0;" :disabled="textareaDisabled">新增選項</button>
                    <button type="button" class="font" @click="newW()" style="height: 5%; border: 1px solid black; border-radius: 4px; margin: 20px 60% 20px 0;">新增問題</button>
                  </div>
                  <!-- <div class="colum" v-for="(item, index) in this.changeSelection.slice((this.currentBoxPage - 1) * this.itemsBoxPerPage, this.currentBoxPage * this.itemsBoxPerPage)" :key="index"> -->
                  <div class="colum" v-for="(item, index) in this.changeSelection" :key="index">
                    <div class="deleteBoxI font" style="display: flex;">
                      <p class="font questionName">{{ (index+1)+ ". " +  item.title }}</p>
                      <button type="button" class="font delete" @click="questionDeleteInBox(index)" style="border: none;background-color: white;"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" disabled style="resize: none;height: 30px; margin-bottom: 10px;" v-if="this.changeSelection[index].options === ''">簡答題</textarea>
                    <!-- <div class="selection" v-for="(item, x) in this.changeSelection[index].options.slice((this.currentBoxPage - 1) * this.itemsBoxPerPage, this.currentBoxPage * this.itemsBoxPerPage)" :key="x"> -->
                    <div class="selection" v-for="(item, x) in this.changeSelection[index].options" :key="x">
                      <input type="radio" name="1" style="margin-right: 5px;" v-if="this.changeSelection[index].type === '單選題'">
                      <input type="checkbox" name="" id="" style="margin-right: 5px;" v-if="this.changeSelection[index].type === '多選題'">
                      <p class="font questionSlection" >{{ (x+1) + ". " + this.changeSelection[index].options[x] }}</p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer" style="justify-content: space-around;">
                    <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: green;border: none;">取消</button>
                    <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: red;border: none;" @click="updateComfirmDp" :disabled="(this.changeStartDate <= this.localDate)">修改選項不發布</button>
                    <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: red;border: none;" @click="updateComfirmP" :disabled="(this.changeStartDate <= this.localDate)">修改選項並發布</button>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation" style="margin-top: 20px;">
            <ul class="pagination justify-content-center">
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage - 1)"><a class="page-link" href="#">上一頁</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(page)" ><a class="page-link" href="#" disabled="!isInputValid">{{this.currentBoxPage}}</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage+1)"><a class="page-link" href="#">{{this.currentBoxPage+1}}</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage+2)"><a class="page-link" href="#">{{this.currentBoxPage+2}}</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage+3)"><a class="page-link" href="#">{{this.currentBoxPage+3}}</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage+4)"><a class="page-link" href="#">{{this.currentBoxPage+4}}</a></li>
              </Popper>
              <Popper arrow placement="top" class="root" :content="this.pageC">
                <li class="page-item" @click="changePage(this.currentBoxPage + 1)"><a class="page-link" href="#">上一頁</a></li>
              </Popper>
            </ul>
          </nav>
        </div>
        <button type="button" class="searchB" style="width: 100px;"><RouterLink to="/quiz" class="font" style="color: black;text-decoration: none;font-size: 1em;">登出</RouterLink></button>
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
                    margin-left: 40px;
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
                    margin-left: 40px;
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
                width: 13%;
            }
            .end{
                width: 13%;
            }
            .pabulish{
                width: 10%;
            }
            .result{
                width: 10%;
            }
            .delete{
              width: 9%;
            }
            }
        }
        .searchB{
                    width: 80px;
                    margin-left: 40px;
                    font-size: 1.2em;
                    font-family: "jf-openhuninn-2.0";
                    border: none;
                    border-radius: 5px;
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
      width: 13%;
      border: 1px solid slategray;
    }
    .end{
      width: 13%;
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
    .delete{
      width: 9%;
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
    .interduceinput{
      text-align: start;
      // margin-left: 2%;
      margin-top: 0.5%;
      width: 80%;
      height: 15%;
      resize: none;
    }
    .interduceinputX{
      text-align: start;
      // margin-left: 2%;
      margin-top: 0.5%;
      width: 80%;
      height: 5%;
      resize: none;
    }
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
</style>