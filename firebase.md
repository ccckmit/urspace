# firebase

https://howtofirebase.com/firebase-security-rules-88d94606ce4a

## 基本觀念

ref('/a/b/c/d/') 只會取得該節點，但是 orderByXXX(欄位) 可以取出 所有下面各層次的節點。

orderByChild()  -- 根據 child 欄位名稱取出所有子節點排序
orderByValue()  -- 根據 child 欄位值取出所有子節點排序
orderByKey() -- 根據 key 取出所有子節點排序
orderByPriority()  -- 根據 priority 取出所有子節點排序

檢視： https://ccc-urspace.firebaseio.com/message.json?orderBy=%22time%22&print=pretty
玩玩： https://dinosaur-facts.firebaseio.com/dinosaurs.json?orderBy=%22height%22&startAt=3&print=pretty
參考： https://firebase.google.com/docs/database/rest/retrieve-data

## 存取規則

https://firebase.google.com/docs/database/security/
https://firebase.google.com/docs/database/security/user-security

```
{
  "rules": {
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid" 
      }
    }
  }
}
```

範例:

{
  user: {
     AuSf7PuZpKcrJBcp8nH3RKcuvTi1: { // "$uid === auth.uid" 代表只有 google login id (auth.id) 為 AuSf7PuZpKcrJBcp8nH3RKcuvTi1 的使用者，才能修改裡面節點的紀錄。
    }
  }
}

## 過濾查詢

https://firebase.google.com/docs/database/web/lists-of-data

* You can only use one order-by method at a time. Calling an order-by method multiple times in the same query throws an error.

## 全文檢索

* https://github.com/firebase/functions-samples/tree/master/fulltext-search

## 前端網頁存取 firebase

## 後端 node.js 存取 firebase

* https://firebase.google.com/docs/database/admin/start
  * 取得金鑰檔 : 在 firebase console 右上角齒輪按鈕的《使用者和權限》 進去後選 firebase-adminsdk 角色。
* https://litotom.com/2017/04/11/firebase-functions-nodejs/



## Vuefire
* https://github.com/vuejs/vuefire

