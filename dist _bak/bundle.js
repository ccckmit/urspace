/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__urspace__ = __webpack_require__(1);

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infinite_scroll__ = __webpack_require__(2);


var sidenav = document.getElementById('sidenav')

function menuToggle() {
  sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
  sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
}

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
  <div class="content">${message.content}</div>
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

document.addEventListener("DOMContentLoaded", function() {
//  document.querySelector('#menuList').innerHTML = ya.menuList(ya.menu)
  document.querySelector('#message').innerHTML = ya.messageList(ya.messages)
  Object(__WEBPACK_IMPORTED_MODULE_0__infinite_scroll__["a" /* default */])(ya.messageScrollOptions)
  // ============== Initialize ====================
//  purecssLoad(window, window.document)
//  hljs.initHighlightingOnLoad()
})

// ============== messages ======================

ya.messages = [
  { id:0, by:'曹齊平', content: '工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:1, by:'中國時報', content: '台灣高教面臨改革關頭，曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:2, by:'Google', content: 'All you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:3, by:'ccc', content: '想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
  { id:4, by:'曹齊平', content: '工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:5, by:'中國時報', content: '台灣高教面臨改革關頭，曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:6, by:'Google', content: 'All you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:7, by:'ccc', content: '想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
  { id:8, by:'曹齊平', content: '工作室半年前製作的"電子製冷與溫差發電"教學展示架，雖然可以成功做實驗，但是一直覺得應該有更好的方法。\n是否可簡化製作程序? 如何讓機構簡單又牢固?\n今晚要好好想個更好的製作方法。'},
  { id:9, by:'中國時報', content: '台灣高教面臨改革關頭，曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！'},
  { id:10, by:'Google', content: 'All you need to do is choose an RSS reader that best fits your style and use it to subscribe to the RSS feeds of the sites you love reading. '},
  { id:11, by:'ccc', content: '想把之前的 《機率統計、微積分、工程數學、 線性代數、離散數學、數值分析》 全部整合到《科學計算》這門課裏面， 一門課 搞定所有可以計算的數學。'},
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = infiniteScroll;
var isIE = /msie/gi.test(navigator.userAgent); // http://pipwerks.com/2011/05/18/sniffing-internet-explorer-via-javascript/

function infiniteScroll (options) {
  var defaults = {
    callback: function() {},
    distance: 50
  }
  // Populate defaults
  for (var key in defaults) {
    if(typeof options[key] == 'undefined') options[key] = defaults[key];
  }  
  
  var scroller = {
    options: options,
    updateInitiated: false
  }
  
  window.onscroll = function(event) {
    handleScroll(scroller, event);
  }
  // For touch devices, try to detect scrolling by touching
  document.ontouchmove = function(event) {
    handleScroll(scroller, event);
  }
}

function getScrollPos() {
  // Handle scroll position in case of IE differently
  if (isIE) {
    return document.documentElement.scrollTop;
  } else {
    return window.pageYOffset;
  }
}

var prevScrollPos = getScrollPos();

// Respond to scroll events
function handleScroll(scroller, event) {
  if (scroller.updateInitiated) {
    return;
  }   
  var scrollPos = getScrollPos();
  if (scrollPos == prevScrollPos) {
    return; // nothing to do
  }
  
  // Find the pageHeight and clientHeight(the no. of pixels to scroll to make the scrollbar reach max pos)
  var pageHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  
  // Check if scroll bar position is just 50px above the max, if yes, initiate an update
  if (pageHeight - (scrollPos + clientHeight) < scroller.options.distance) {
    scroller.updateInitiated = true;

    scroller.options.callback(function() {
      scroller.updateInitiated = false;
    });
  }
  
  prevScrollPos = scrollPos;  
}

/***/ })
/******/ ]);