var snapshot={
  "-L3grQsMxCe4hD5dX0nO": {
    "by": "陳鍾誠",
    "content": "# 台灣高教面臨改革關頭\n 曾志朗認為，台大新校長必須擁有整合人才與募款的能力，不要再依賴教育部的有限資源，才能走出困境邁向國際。真的！",
    "domain": "coding",
    "key": "-L3grQsMxCe4hD5dX0nO",
    "time": 1516876185423,
    "uid": "AuSf7PuZpKcrJBcp8nH3RKcuvTi1"
  },
  "-L3grR6_R5voDXknoUxP": {
    "by": "UrSpace",
    "content": "# Learn how to build simple Node & Express servers to work with React\n",
    "domain": "coding",
    "key": "-L3grR6_R5voDXknoUxP",
    "time": 1516876186332,
    "uid": "yRK5q5iZ14V2OJRW47dotv9FjTA3"
  },
  "-L3grRA3mqTQIqeem-tF": {
    "by": "陳鍾誠",
    "content": "# UrSpace 專案\n一個類似 facebook 的社群訊息管理系統，預計上線網址為 http://urspace.com ，敬請期待！",
    "domain": "coding",
    "key": "-L3grRA3mqTQIqeem-tF",
    "time": 1516876186537,
    "uid": "AuSf7PuZpKcrJBcp8nH3RKcuvTi1"
  }
}

function recursiveAddRecord (obj, recordList, recordChecker) {
  // console.log('obj=%j typeof=%s', obj, typeof obj)
  if (obj == null || typeof obj !== 'object') return
  // console.log('recordChecker.type=', typeof recordChecker)
  if (recordChecker(obj)) {
    recordList.push(obj)
  } else {
    let childList = Object.values(obj)
    for (let child of childList) {
      recursiveAddRecord(child, recordList, recordChecker)
    }
  }
}

let recordList = []
recursiveAddRecord(snapshot, recordList, (o)=> o.content != null)
console.log('recordList=', recordList)
