<template>
  <div>
    <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="message in messages" :key="message.id" class="message" id="{message.id}">
        <div class="messageHeader"><a href="#">{{message.by}}</a></div>
        <div class="messageContent" v-html="md2html(message.content)"></div>
        <div class="messageFooter"><button class="btn info">回覆</button>&nbsp;<button class="btn info">編輯</button></div>
      </div>
    </div>
    <div class="center">載入新資料中，請等候 ...</div>
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
  name: 'MessageList',
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

<style>

/* ================= message ==============*/
.message {
  margin:10px;
  padding:10px;
  min-height:100px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  background-color: white;
}

.message .messageContent {
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  display: inline-block;
  width: 100%;
}

.message div {
  padding: 10px;
}

.message h1 { font-size:150%; font-weight:bold; }
.message h2 { font-size:125%; font-weight:bold; }
.message h3 { font-size:100%; font-weight:bold; }
.message h4 { font-size:100%; font-weight:bold; }
.message h5 { font-size:100%; font-weight:bold; }
.message h6 { font-size:100%; font-weight:bold; }

</style>
