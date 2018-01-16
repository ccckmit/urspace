# Yappy 開發者筆記

## 沒有 server 時可用 live-server 

```
$ npm install -g live-server            # Install live-server if you haven't already
$ live-server                           # Run live-server and open it in your browser
```

## CORS 問題

* 當使用 RSS feed 功能時，邏輯不能放在前端，因為網站通常不允許 CORS ，所以會造成失敗，出現如下列訊息。



test.html:1 Failed to load https://www.reddit.com/.rss: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.