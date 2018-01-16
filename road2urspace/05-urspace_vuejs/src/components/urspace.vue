<template>
<div id="urspace">
  <div id="headbar">
    <a id="menuToggle" href="#" v-on:click="menuToggle">&#9776;</a> &nbsp;
    <a href="#home">Home</a>
    <!--  <div class="dropdown">&nbsp;</div> -->
    <div class="dropdown">
      <button class="dropbtn">繁體中文</button>
      <div class="dropdown-content">
        <a href="#en">English</a>
        <a href="#zh-tw">繁體中文</a>
        <a href="#zh-cn">简体中文</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">User</button>
      <div class="dropdown-content">
        <a href="#login">登入</a>
        <a href="#logout">登出</a>
        <a href="#signin">註冊</a>
        <a href="#setting">設定</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">最新</button>
      <div class="dropdown-content">
        <a href="#new">最新</a>
        <a href="#tracking">追蹤</a>
        <a href="#near">鄰近</a>
        <a href="#radnom">隨機</a>
      </div>
    </div>
  </div>
  <div id="bodypart">
    <div id="sidenav">
      <div id="sidebar">
        <a href="#people">人員</a>
        <a href="#object">物品</a>
        <a href="#article">文章</a>
        <a href="#image">圖像</a>
        <a href="#video">影音</a>
      </div>
    </div>
    <div id="content">
      <div id="main">
        <div id="messageNew">
          <div class="message">
            <div class="header"><a href="#">user</a></div>
            <div class="content" contenteditable id="messageNewContent"></div>
            <div class="footer"><button id="messageSubmit" class="btn info">發佈</button>&nbsp;<button id="messageClear" class="btn info">清除</button></div>
          </div>
        </div>

        <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <div v-for="message in messages" :key="message.id" class="message" id="{message.id}">
            <div class="header"><a href="#">{{message.by}}</a></div>
            <div class="content" v-html="md2html(message.content)"></div>
            <div class="footer"><button class="btn info">回覆</button>&nbsp;<button class="btn info">編輯</button></div>
          </div>
        </div>

        <div id="footer">載入新資料中，請等候 ...</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import marked from 'marked'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  name: 'urspace',
  data () {
    return {
      messages: [
        { id: 0, by: '曹齊平', content: '# 電子製冷與溫差發電更好的方法？\n工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。' },
        { id: 1, by: '中國時報', content: '# 台灣高教面臨改革關頭\n 曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！' },
        { id: 2, by: 'Google', content: '# RSS reader\nAll you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading.' },
        { id: 3, by: 'ccc', content: '# 科學計算課程\n想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。' }
      ],
      busyLoadMore: false
    }
  },
  methods: {
    menuToggle: function (event) {
      var sidenav = document.getElementById('sidenav')
      var sidebar = document.getElementById('sidebar')
      sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
      sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
    },
    md2html: function (md) {
      return marked(md)
    },
    loadMore: function () {
      let step = 10
      this.busyLoadMore = true
      setTimeout(() => {
        for (let i = 0; i < step; i++) {
          let id = this.messages.length
          this.messages.push({ id: id, by: this.messages[id % 4].by, content: this.messages[id % 4].content })
        }
        this.busyLoadMore = false
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
