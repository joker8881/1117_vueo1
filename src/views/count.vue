<script>
import { applyStyles } from "@popperjs/core";
import { RouterLink, RouterView } from "vue-router";
import Popper from "vue3-popper";
import * as echarts from "echarts"
import { setTransitionHooks } from "vue";
export default {
  data() {
    return{
      logaccount:"", //設定帳號名稱顯示在左邊
      balence:"", //計算整體盈餘
      allarr:[], //匯入匯出所有資料的陣列
      date:"", //輸入彈跳視窗，日期。
      type:["收入","早餐","午餐","晚餐","飲料","交通","購物","娛樂","日用品","房租","醫療","社交","其他"], //選擇種類
      typeP:["表格細項"], //選擇圖例
      typeC: false,
      cost:"", //輸入彈跳視窗使用，金額
      ins:"", //輸入彈跳視窗使用，說明
      index:"", //選擇種類時，篩選選擇的項目是序列第幾個，假如選到午餐就是2。
      income:0,  //收入方法使用
      outcome:0, //支出方法使用
      currentPage: 1, //當前頁數
      itemsPerPage: 5, //每頁顯示物件數量
      pageC:"", //換頁標籤抓頁數
      selectedType: "", //在日期與選擇種類的方法使用
      selectedChart:0, //選擇圓餅圖
      currentIndexToDelete: 0, //在當前頁面上的物件是序列0~4的哪一個
      chartPie:null,
      // =========表格使用===========
      incomeT:[], //收入
      breakfirstT:[], //早餐
      lunchT:[], //午餐
      dinnerT:[], //晚餐
      drinkT:[], //飲料
      transportationT:[], //交通
      shoppingT:[], //購物
      entermainT:[], //娛樂
      dayilyT:[], //日用品
      rentT:[], //房租
      medicT:[], //醫療
      socialT:[], //社交
      elseT:[], //其他
      aT:0,
      bT:0,
      cT:0,
      dT:0,
      eT:0,
      fT:0,
      gT:0,
      hT:0,
      iT:0,
      jT:0,
      kT:0,
      lT:0,
      mT:0,
    }
  },
  components: {
    RouterLink,
    Popper,
  },
  watch:{
    //監測整體金額，如果有income與outcome發生變化，整體盈餘this.balence會發生變化且改變style顏色
    outcome:function(){
      console.log(this.outcome)
      this.balence = this.income - this.outcome
      if(this.balence < 0){
        let a = document.getElementById("balence")
        a.style="color: red;"
      } else{
        let a = document.getElementById("balence")
        a.style="color: black;"
      }
    },
    income:function(){
      console.log(this.income)
      this.balence = this.income - this.outcome
      if(this.balence < 0){
        let a = document.getElementById("balence")
        a.style="color: red;"
      } else{
        let a = document.getElementById("balence")
        a.style="color: black;"
      }
    },
    index:function(){
      if( this.index == 0){
        this.typeC = true
      }
      this.typeC = false
    },
    selectedChart:function(){
      console.log(this.selectedChart)
      if (this.chartPie && this.selectedChart == 1) {
        this.chartPie.dispose();
        const chartDiv = document.querySelector('div[style*="height"]')
        if (chartDiv) {
          chartDiv.style.height = '0'
        } else {
          console.log("抓不到")
        }
      }
      if(this.selectedChart == 1){
        const chartContainer = this.$refs.chartPie
        chartContainer.innerHTML = '';  // 清空目標 DOM 元素
        this.chartPie = echarts.init(chartContainer, "macarons");
      } else{
        this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
        this.drawPieChart()
      }
    }
  },
  computed: {
    //計算總頁數
    totalPages() {
      return Math.ceil(this.allarr.length / this.itemsPerPage);
    },
    //監聽是否都有數入數據，否則不給使用按鈕
    isInputValid() {
      return this.date && this.type && this.cost;
    },
    incomeisIncome(){
      return this.date && this.type && this.cost && this.index == 0 
    }
  },
  methods:{
    //新增收入資料
    earnM(){
      // 觸發彈出視窗，開始輸入元素。(序號自行排列)，數值一定要先進來，所以彈出視窗一定是優先。
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      if(this.allarr == null){
        this.allarr = []
        this.allarr.push({number:0 ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins,category:"收入"})
      } else{
        this.allarr.push({number:this.allarr.length ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins,category:"收入"})
        }
      localStorage.setItem(this.logaccount,JSON.stringify(this.allarr))
      this.calculateTotal()
    },
    // 新增支出資料
    spentM() {
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount));
      if (this.allarr == null) {
        this.allarr = [];
        this.allarr.push({number: 0,date: this.date,type: this.type[this.index],cost: this.cost,introduce: this.ins,category: "支出",});
        console.log(this.allarr);
        console.log(this.allarr.length);
      } else {
        this.allarr.push({number: this.allarr.length,date: this.date,type: this.type[this.index],cost: this.cost,introduce: this.ins,category: "支出",});
      }
      localStorage.setItem(this.logaccount, JSON.stringify(this.allarr));
      console.log(JSON.stringify(this.allarr));
      console.log(this.allarr);
      this.calculateTotal();
    },
    // 計算總收入與總支出，每次新增完數據後都會執行一次來更新資料。
    calculateTotal() {
      let moneyIncome = 0;
      let moneyOutcome = 0;
      this.income = 0;
      this.outcome = 0;
      for (let i = 0; i < this.allarr.length; i++) {
        if (this.allarr[i].cost !== undefined) {
          if(this.allarr[i].category == "收入"){
            moneyIncome += parseInt(this.allarr[i].cost);
            this.income = moneyIncome
          } else{
            moneyOutcome += parseInt(this.allarr[i].cost);
            this.outcome = moneyOutcome
          }
        }
      }
      this.income = moneyIncome
      this.outcome = moneyOutcome
      this.drawPieChart()
    },
    //依照日期排列，圖示將頁碼重製。
    setbyDay(){
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      if(this.selectedType != ""){
        this.allarr = this.allarr.filter(item => item.type === this.selectedType);
      }
      this.allarr.sort((a, b) => new Date(a.date) - new Date(b.date))
      this.changePage(1)
    },
    // 依照預設順序排列
    setbyIndex(){
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      this.changePage(1)
    },
    // 依照種類排序
    changeType(){
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      this.allarr = this.allarr.filter(item => item.type === this.selectedType);
      this.changePage(1)
      console.log(this.selectedType)
      console.log(this.allarr)
      if(this.selectedType == ""){
        this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      }
    },
    // 依照月份排序
    setM(){
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      if (this.selectedMonth) {
      // 使用 filter 方法篩選資料
        this.allarr = this.allarr.filter(item => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() + 1 === this.selectedMonth;
        });
      } 
    },
    //讓刪除按鈕抓取序列值
    setCurrentIndexToDelete(index) {
      this.currentIndexToDelete = index;
      console.log("刪除該頁面的第" + this.currentIndexToDelete)
    },
    // 刪除資料，將刪除按鈕的序列值綁在彈出視窗的按鈕上賦予值，因為只有0~4所以很好控制。隨後透過頁數+序號值就得出我要刪除哪一頁哪一個序列號碼的值了。
    del() {
      const pageofindex = (this.currentPage - 1) * this.itemsPerPage +  this.currentIndexToDelete;

      if (pageofindex >= 0 && pageofindex < this.allarr.length) {
        this.allarr.splice(pageofindex, 1);
        this.calculateTotal();
        localStorage.setItem(this.logaccount, JSON.stringify(this.allarr));
      }
    },
    // 將上次的資料讀入，且根據帳號不同而變化，待設計。
    setAll(){
      this.allarr = JSON.parse(localStorage.getItem(this.logaccount))
      let moneytotal = 0
      if(this.allarr != null){
        for(let i = 0; i < this.allarr.length; i++){
          if (this.allarr[i].cost !== undefined && this.allarr[i].category == "收入") {
            moneytotal += parseInt(this.allarr[i].cost)
            this.income = moneytotal
          }
        }
      }
      if(this.allarr != null){
      moneytotal = 0
      console.log(this.allarr)
        for(let i = 0; i < this.allarr.length; i++){
          if (this.allarr[i].cost !== undefined && this.allarr[i].category == "支出") {
            moneytotal += parseInt(this.allarr[i].cost)
            this.outcome = moneytotal
          }
        }
      }
    this.balence = this.income - this.outcome
    this.getIncomeAndOutcome()
    this.drawPieChart()
    // =====================================
  },
    // 切換顯示的頁面
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
      this.getIncomeAndOutcome()
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
              { value: 2, name: "收入" },
              { value: 2, name: "早餐" },
              { value: 3, name: "午餐" },
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
    getIncomeAndOutcome(){
      if(this.allarr != null){
        this.incomeT = this.allarr.filter((item) => { return item.type == "收入" && item.category == "收入"})
        this.breakfirstT = this.allarr.filter((item) => { return item.type == "早餐" && item.category == "支出"}), //早餐
        this.lunchT = this.allarr.filter((item) => { return item.type == "午餐" && item.category == "支出"}), //午餐
        this.dinnerT = this.allarr.filter((item) => { return item.type == "晚餐" && item.category == "支出"}), //晚餐
        this.drinkT = this.allarr.filter((item) => { return item.type == "飲料" && item.category == "支出"}), //飲料
        this.transportationT = this.allarr.filter((item) => { return item.type == "交通" && item.category == "支出"}), //交通
        this.shoppingT = this.allarr.filter((item) => { return item.type == "購物" && item.category == "支出"}), //購物
        this.entermainT = this.allarr.filter((item) => { return item.type == "娛樂" && item.category == "支出"}), //娛樂
        this.dayilyT = this.allarr.filter((item) => { return item.type == "日用品" && item.category == "支出"}), //日用品
        this.rentT = this.allarr.filter((item) => { return item.type == "房租" && item.category == "支出"}), //房租
        this.medicT = this.allarr.filter((item) => { return item.type == "醫療" && item.category == "支出"}), //醫療
        this.socialT = this.allarr.filter((item) => { return item.type == "社交" && item.category == "支出"}), //社交
        this.elseT = this.allarr.filter((item) => { return item.type == "其他" && item.category == "支出"}), //其他
      console.log(this.incomeT)
        for (let i = 0; i < this.incomeT.length; i++) {this.aT += this.incomeT[i].cost;}
        for (let i = 0; i < this.breakfirstT.length; i++) {this.bT += this.breakfirstT[i].cost;}
        for (let i = 0; i < this.lunchT.length; i++) {this.cT += this.lunchT[i].cost;}
        for (let i = 0; i < this.dinnerT.length; i++) {this.dT += this.dinnerT[i].cost;}
        for (let i = 0; i < this.drinkT.length; i++) {this.eT += this.drinkT[i].cost;}
        for (let i = 0; i < this.transportationT.length; i++) {this.fT += this.transportationT[i].cost;}
        for (let i = 0; i < this.shoppingT.length; i++) {this.gT += this.shoppingT[i].cost;}
        for (let i = 0; i < this.entermainT.length; i++) {this.hT += this.entermainT[i].cost;}
        for (let i = 0; i < this.dayilyT.length; i++) {this.iT += this.dayilyT[i].cost;}
        for (let i = 0; i < this.rentT.length; i++) {this.jT += this.rentT[i].cost;}
        for (let i = 0; i < this.medicT.length; i++) {this.kT += this.medicT[i].cost;}
        for (let i = 0; i < this.socialT.length; i++) {this.lT += this.socialT[i].cost;}
        for (let i = 0; i < this.elseT.length; i++) {this.mT += this.elseT[i].cost;}
      }
  },
  },
  mounted(){
    this.logaccount =localStorage.getItem("logacc")
    this.allarr = localStorage.getItem(this.logaccount)
    if(this.allarr == null){
      this.allarr =[]
    }
    this.setAll()
  },
};
// 收支表預計內容與變數
// 1.取得帳號顯示在畫面上。完成。
// 2.取得本地資料庫的數據顯示在收支盈餘上，物件生成方式搞定。完成
// 3.建立圖表收支，設置收支項目(如醫療、早午晚餐、交通)，建立日期可以設置每七天或是每月開支折線圖，物件設置方式搞定。
// 收支圖表可以用父子層切換，就可以讓畫面不更動的情況下只更動部分元素，或許該採用此設計，因為表格無法刪除
// 4.刪除按鈕，必須要抓出資料把資料刪掉，物件生成方式搞定，搞定
// 5.必須要使用物件來抓取資料，否則陣列會無法篩選收支項目，搞定。

// 待解決問題
// 資料超過一定數量超出畫面範圍時，該如何呈現資料，搞定。
// 方法一，bootstrap的換頁，但需要考量多少筆資料換一次頁
// 方法二，尋找類似overflow的方法，讓多餘的顯示可以用...呈現，可以與方法一結合，分頁可以設置成每一日一個分頁。
// 跳出視窗的呈現，應該可以找到bootstrap的方法

// 刪除用彈出視窗，https://bootstrap5.hexschool.com/docs/5.1/components/modal/
</script>

<template>
    <div class="box">
        <div class="left">
            <p class="a1">收支紀錄表</p>
            <P class="a2">{{this.logaccount}}</P>
            <p class="a3">你的收支盈餘</p>
            <p id="balence" class="a4">$ {{this.balence}}</p>
            <div class="logoutB">
              <button type="button" class="btn btn-primary bc1" @click=""><RouterLink to="/login" class="bc">登出</RouterLink></button>
            </div>
        </div>
        <div class="right">
          <div class="incomeBox">
            <div class="earn">
              <p class="titleR">收入</p>
              <p class="titleR" id="income" >$ {{ this.income }}</p>
            </div>
            <div class="spent">
              <p class="titleL">支出</p>
              <p class="titleL" id="outcome" >$ {{ this.outcome }}</p>
            </div>
          </div>
          <div class="messageBox">
            <button type="button" class="btn btn-primary btmC" @click="setbyIndex" v-if="this.selectedChart == 1">預設</button>
            <select v-model="this.selectedType" @change="changeType" class="btn btn-primary btmC" v-if="this.selectedChart == 1">
              <option value="">篩選類型：不篩選種類</option>
              <option :value="item" v-for="item in type">篩選類型： {{ item }}</option>
            </select>
            <button type="button" class="btn btn-primary btmC" @click="setbyDay" v-if="this.selectedChart == 1">依日期排列</button>
            <div class="btn btn-primary btmC" v-if="this.selectedChart == 1">
              <label for="month">選擇月份：</label>
              <select v-model="selectedMonth" @change="setM">
                <option v-for="month in 12" :key="month" :value="month">{{ month }}月</option>
              </select>
            </div>
            <button type="button" class="btn btn-primary btmC" data-bs-toggle="modal" data-bs-target="#additem">增加項目</button>
          </div>
          <div class="messageBox" style="margin-top: 2%;">
            <select v-model="this.selectedChart" @change="drawPieChart(index)" class="btn btn-primary btmC">
              <option value="0">消費圓餅圖</option>
              <option :value="index+1" v-for="(chart,index) in typeP">{{ chart }}</option>
            </select>
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
                  <p class="boxT">日期</p>
                  <input type="date" name="" id="" v-model="this.date" class="select2">
                  <p class="boxT">種類</p>
                  <select v-model="this.index" class="select2">
                    <option value="">請選擇</option>
                    <option :value="index" v-for="(item, index) in type">{{ item }}</option>
                  </select>
                  <p class="boxT">金額</p>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control tb" id="floatingInput" placeholder="" v-model="this.cost" oninput = "value=value.replace(/[^\d]/g,'')">
                    <label class="tbc" for="floatingInput">在這裡輸入金額</label>
                  </div>
                  <p class="boxT">說明</p>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control tb" id="floatingInput" placeholder="" v-model="this.ins">
                    <label class="tbc" for="floatingInput">在這裡輸入說明</label>
                  </div>
                </div>
                <div class="modal-footer" style="justify-content: space-around;">
                    <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: red;border: none;" @click="spentM" :disabled="!isInputValid ^ incomeisIncome">支出</button>
                    <button type="button" class="btn btn-primary a" data-bs-dismiss="modal" style="background-color: green;border: none;" @click="earnM" :disabled="!incomeisIncome">收入</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 使用父子層，只要改變子層的內容就好了 -->
          <div class="columBox" v-if="this.selectedChart == 1">
            <div class="colum" v-for="(item, index) in this.allarr.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)" :key="index">
              <div class="left1">
                <p class="leftText1" >{{ item.type }}</p>
                <p style="margin: 12% 0 0 2%; font-size: 1.2em;">日期 {{ item.date }}</p>
              </div>
              <div class="right1">
                <p class="pT" :class="{ 'green-text': item.category === '收入', 'red-text': item.category === '支出' }">$ {{ item.cost }}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#delete" style="margin-right: 3%;width: 20%;" @click="setCurrentIndexToDelete(index)">刪除</button>
                <!-- The Modal -->
                <div class="modal fade" id="delete">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content cv">
                      <!-- Modal body -->
                      <div class="modal-body cvc">
                        <i class="fa-solid fa-xmark cvcx" data-bs-dismiss="modal" style="color: #99aeb5;"></i>
                        <p class="cvcT">你確定要刪除嗎？</p>
                        <button class="del" @click="this.del()" data-bs-dismiss="modal">刪除</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <nav aria-label="Page navigation" v-if="this.selectedChart == 1">
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
          <div></div>
          <div id="chartPie" ref="chartPie" class="pie-wrap" :class="{'disp': selectedChart == 1}" v-if="this.selectedType == 0"></div>
        </div>
      </div>
</template>

<style scoped lang="scss">
.box{
    height: 150%;
    width: 100%;
    display: flex;
    .left{
        height: 100%;
        width: 30%;
        background-color: burlywood;
        .a1{
          font-size: 3em;
          margin-top: 30%;
        }
        .a2{
          font-size: 3em;
          margin-top: 30%;
        }
        .a3{
          font-size: 1.5em;
          margin-top: 10%;
        }
        .a4{
          font-size: 2em;
        }
      .logoutB{
        width: 100%;
        .bc1{
        margin-top: 35%;
        width: 30%;
        height: 20%;
        border-radius: 5%;
        background-color: bisque;
        border: none;
        }
        .bc{
        text-decoration: none;
        color: black;
        font-size: 1em;
        height: 20%;
      }
      }
    }
    .right{
        height: 100%;
        width: 70%;
        align-items: center;
        .incomeBox{
            margin: 2% auto 0 auto;
            display: flex;
            justify-content: space-around;
            .titleR{
              font-size: 3em;
              color:green;
            }
            .titleL{
              font-size: 3em;
              color: crimson;
            }
        }
    }
    .a{
      font-family:bold 100% 'Microsoft JhengHei';
      font-size:1.4em;
    }
}
.mbl{
  align-self: start;
  .boxT{
  margin-top: 3%;
  margin-left: 12%;
  font-size: 1.5em;
  text-align: start;
}
}
.columBox{
  height: 60%;
  width: 60%;
  margin: 0 auto;
  .colum{
    margin-top: 3%;
    height: 15%;
    width: 100%;
    display: flex;
    border: 5px solid slategray;
    border-radius: 5px;
    .left1{
      width: 50%;
      display: flex;
      .leftText1{
        margin: 0 0 0 5%;
        text-align: left;
        margin-top: 5%;
        font-size: 2em;
      }
    }
    .right1{
      width: 50%;
      display: flex;
      align-items:center;
      justify-content:flex-end;
      .green-text {
        color: green;
      }
      .red-text {
        color: red;
      }
      .pT{
        // text-align: center;
        margin: auto 5% auto 0;
        font-size: 2em;
      }
    }
  }
}

.tb{
    width: 140%;
    margin-left: 10%;
    // margin: 0 auto;
}
.tbc{
    margin-left: 10%;
  }
.select2{
  align-self: start;
  height: 8%;
  width: 80%;
  margin-left: 5%;
}

.cv{
  height: 25vh;
  .cvc{
  height: 130%;
  .cvcx{
    margin: 0 0 0 95%;
    font-size: 2em;
  }
  .cvcT{
    margin: 0 auto;
    font-size: 2em;
  }
  .del{
        border: none;
        color: white;
        background-color: red;
        height: 30%;
        width: 40%;
        border-radius: 5px;
        margin:2% auto 0 auto;
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
  }
.messageBox{
  display: flex;
  justify-content: space-around;
  .btmC{
    background-color: bisque;
    color: black;
    border: none;
    font-size: 1em;
  }
}
.pie-wrap {
  width: 100%;
  height: 55%;
  margin-top: 50px

}
.disp{
  width: 100%;
  height: 0%;
  margin: 0;
}
</style>