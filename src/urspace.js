import infiniteScroll from './infinite-scroll'
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

var sidenav = document.getElementById('sidenav')

export function menuToggle() {
  sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
  sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
}

var menuToggleNode = document.getElementById('menuToggle')

menuToggleNode.addEventListener("click", menuToggle)

var ya = {}

ya.menu = {
  items: [
    {title: '程式', link: 'coding'},
    {title: '課程', link: 'course'},
    {title: '書籍', link: 'book'},
    {title: 'Node.js', link: 'nodejs'},
  ]
}

ya.menuList = function (menu) {
  let list = []
  for (let item of menu.items) {
    list.push(`<li class="pure-menu-item"><a href="#${item.link}" class="pure-menu-link">${item.title}</a></li>`)
  }
  return list.join('\n')
}

ya.html2dom = function (html) {
  var wrapper= document.createElement('div')
  wrapper.innerHTML= html
  return wrapper.firstChild;
}

ya.messageHtml = function (message) {
  return `<div class="message" id="${message.id}">
  <div class="header"><a href="#">${message.by}</a></div>
  <div class="content">${marked(message.content)}</div>
  <div class="footer"><button class="btn info">回覆</button>&nbsp;<button class="btn info">編輯</button></div>
  </div>`
}
/*
   <div><button class="btn">回覆</button><button class="btn">修改</button></div>
*/
ya.messageList = function (messages) {
  let list = []
  for (let message of messages) {
    list.push(ya.messageHtml(message))
  }
  return list.join('\n')
}

var messageSubmitButton = document.getElementById('messageSubmit')
var messageClearButton = document.getElementById('messageClear')
var messageNewContent  = document.getElementById('messageNewContent')

messageSubmitButton.addEventListener('click', function() {
  db.save(messageNewContent.innerText)
})

messageClearButton.addEventListener('click', function() {
  messageNewContent.innerHTML = ''
})

document.addEventListener("DOMContentLoaded", function() {
//  document.querySelector('#menuList').innerHTML = ya.menuList(ya.menu)
  document.querySelector('#message').innerHTML = ya.messageList(ya.messages)
  infiniteScroll(ya.messageScrollOptions)
  // ============== Initialize ====================
//  purecssLoad(window, window.document)
//  hljs.initHighlightingOnLoad()
})

// ============== messages ======================

ya.messages = [
  { id:0, by:'曹齊平', content: '# 電子製冷與溫差發電更好的方法？\n工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:1, by:'中國時報', content: '# 台灣高教面臨改革關頭\n 曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:2, by:'Google', content: '# RSS reader\nAll you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:3, by:'ccc', content: '# 科學計算課程\n想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
  { id:4, by:'曹齊平', content: '# 電子製冷與溫差發電更好的方法？\n工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:5, by:'中國時報', content: '# 台灣高教面臨改革關頭\n 曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:6, by:'Google', content: '# RSS reader\nAll you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:7, by:'ccc', content: '# 科學計算課程\n想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
  { id:8, by:'曹齊平', content: '# 電子製冷與溫差發電更好的方法？\n工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:9, by:'中國時報', content: '# 台灣高教面臨改革關頭\n 曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:10, by:'Google', content: '# RSS reader\nAll you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:11, by:'ccc', content: '# 科學計算課程\n想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
]

ya.messageNode = document.getElementById('message')
ya.messageScrollOptions = {
  distance: 50,
  step:20,
  callback: function(done) {
    for (let i=0; i<this.step; i++) {
      let id = ya.messages.length
      let message = { id:id, by:ya.messages[id%12].by, content:ya.messages[id%12].content }
      ya.messages.push(message)
      let node = ya.html2dom(ya.messageHtml(message))
      ya.messageNode.appendChild(node)
    }
    done();
  }
}
