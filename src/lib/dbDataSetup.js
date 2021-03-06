export const urspace = {
  type: 'user',
  uid: 'yRK5q5iZ14V2OJRW47dotv9FjTA3',
  name: 'UrSpace',
  reader: 'all',
  writer: 'editor',
  text: `# UrSpace`
}

urspace.dictionaryText = JSON.stringify({
  all: {tw: '全部'},
  people: {tw: '人群'},
  object: {tw: '物品'},
  article: {tw: '文章'},
  image: {tw: '圖像'},
  video: {tw: '影片'},
  music: {tw: '音樂'},
  book: {tw: '書籍'},
  place: {tw: '地點'},
  login: {tw: '登入'},
  logout: {tw: '登出'},
  signup: {tw: '註冊'},
  setting: {tw: '設定'},
  new: {tw: '最新'},
  hot: {tw: '人氣'},
  near: {tw: '鄰近'},
  my: {tw: '我的'},
  follow: {tw: '追蹤'},
  read: {tw: '已讀'},
  random: {tw: '隨機'},
  friends: {tw: '朋友'},
  family: {tw: '家人'},
  followby: {en: 'followBy', tw: '跟隨者'},
  sale: {tw: '想買'},
  buy: {tw: '想賣'},
  news: {tw: '新聞'},
  scene: {tw: '景物'},
  portrait: {tw: '人像'},
  movie: {tw: '電影'},
  tv: {tw: '電視'},
  sport: {tw: '運動'},
  mtv: {tw: '音樂節目'},
  voice: {tw: '語音'},
  science: {tw: '科學'},
  math: {tw: '數學'},
  novel: {tw: '小說'},
  classic: {tw: '經典'},
  asia: {tw: '亞洲'},
  europe: {tw: '歐洲'},
  america: {tw: '美洲'},
  africa: {tw: '非洲'},
  home: {tw: '首頁'},
  help: {tw: '說明'},
  rss: {en: 'RSS'},
  publish: {tw: '發佈'},
  clear: {tw: '清除'},
  reply: {tw: '回覆'},
  delete: {tw: '刪除'},
  view: {tw: '檢視'},
  edit: {tw: '編輯'},
  en: {en: 'English', tw: '英文'},
  tw: {tw: '繁體中文'},
  cn: {tw: '簡體中文'},
  wait_for_load: {en: 'waiting for data loading...', tw: '載入新資料中，請等候 ...'},
  end_of_data: {en: 'end of data, load complete!', tw: '資料全部載入完畢，已到結尾！'},
  skill: {tw: '技能'},
  coding: {tw: '程式設計'},
  maker: {tw: '創客自造'},
  painting: {tw: '繪畫'},
  music_play: {tw: '音樂演奏'},
  carpenter: {tw: '木工'},
  farming: {tw: '農業園藝'},
  knowledge: {tw: '知識'},
  mathematics: {tw: '數學'},
  physics: {tw: '物理'},
  chemistry: {tw: '化學'},
  biology: {tw: '生物'},
  language: {tw: '語言'},
  history: {tw: '歷史'},
  geography: {tw: '地理'},
  society: {tw: '社會'},
  course: {tw: '課程'}
})

urspace.childDomainText = JSON.stringify({
  all: ['skill', 'course', 'people', 'object', 'article', 'image', 'video', 'music', 'book', 'place'],
  skill: ['coding', 'maker', 'painting', 'music_play', 'carpenter', 'farming'],
  course: ['mathematics', 'physics', 'chemistry', 'biology', 'language', 'history', 'geography', 'society'],
  people: ['family', 'friends', 'followBy'],
  object: ['sale', 'buy'],
  article: ['news', 'rss'],
  image: ['scene', 'portrait', 'family'],
  video: ['movie', 'tv', 'youtube', 'sport'],
  music: ['MTV', 'voice'],
  book: ['science', 'math', 'novel', 'classic'],
  place: ['near', 'asia', 'europe', 'america', 'africa']
})

export const ccckmit = {
  type: 'user',
  uid: 'AuSf7PuZpKcrJBcp8nH3RKcuvTi1',
  name: '陳鍾誠',
  reader: 'all',
  writer: 'editor',
  text: `# 陳鍾誠`
}

ccckmit.dictionaryText = JSON.stringify({
  web_programming: {tw: '網頁設計'},
  computer_organization: {tw: '計算機結構'},
  window_programming: {tw: '視窗程式設計'},
  system_programming: {tw: '系統程式設計'},
  artificial_intelligence: {tw: '人工智慧'},
  statistics: {tw: '統計學'},
  c_progrmaming: {tw: 'C 語言程式設計'},
  kinmen: {tw: '金門'},
  taipei: {tw: '台北'}
})

ccckmit.childDomainText = JSON.stringify({
  all: ['course', 'book', 'place'],
  course: ['web_programming', 'computer_organization', 'window_programming', 'system_programming', 'artificial_intelligence'],
  book: ['statistics', 'c_progrmaming'],
  place: ['kinmen', 'taipei']
})

function getChildDomain (user) {
  return JSON.parse(user.childDomainText)
}

function getDictionary (user) {
  return JSON.parse(user.dictionaryText)
}

export function userSetup (user) {
  user.childDomain = getChildDomain(user)
  user.dictionary = getDictionary(user)
  return user
}
/*
  course: ['網頁設計', '計算機結構', '視窗程式', '系統程式', '人工智慧'],
  book: ['機率統計', '高等 C 語言'],
  place: ['金門', '金門大學']
*/

export default { urspace, ccckmit, userSetup }

/*
urspace.dictionary = [
  {en:'all', tw: '全部'},
  {en:'people', tw: '人群'},
  {en:'object', tw: '物品'},
  {en:'article', tw: '文章'},
  {en:'image', tw: '圖像'},
  {en:'video', tw: '影片'},
  {en:'music', tw: '音樂'},
  {en:'book', tw: '書籍'},
  {en:'place', tw: '地點'},
  {en:'login', tw: '登入'},
  {en:'logout', tw: '登出'},
  {en:'signup', tw: '註冊'},
  {en:'setting', tw: '設定'},
  {en:'new', tw: '最新'},
  {en:'hot', tw: '人氣'},
  {en:'near', tw: '鄰近'},
  {en:'my', tw: '我的'},
  {en:'follow', tw: '追蹤'},
  {en:'read', tw: '已讀'},
  {en:'random', tw: '隨機'},
  {en:'friends', tw: '朋友'},
  {en:'family', tw: '家人'},
  {en:'followby', en: 'followBy', tw: '跟隨者'},
  {en:'sale', tw: '想買'},
  {en:'buy', tw: '想賣'},
  {en:'news', tw: '新聞'},
  {en:'scene', tw: '景物'},
  {en:'portrait', tw: '人像'},
  {en:'movie', tw: '電影'},
  {en:'tv', tw: '電視'},
  {en:'sport', tw: '運動'},
  {en:'mtv', tw: '音樂節目'},
  {en:'voice', tw: '語音'},
  {en:'science', tw: '科學'},
  {en:'math', tw: '數學'},
  {en:'novel', tw: '小說'},
  {en:'classic', tw: '經典'},
  {en:'asia', tw: '亞洲'},
  {en:'europe', tw: '歐洲'},
  {en:'america', tw: '美洲'},
  {en:'africa', tw: '非洲'},
  {en:'home', tw: '首頁'},
  {en:'help', tw: '說明'},
  {en:'rss', en: 'RSS'},
  {en:'publish', tw: '發佈'},
  {en:'clear', tw: '清除'},
  {en:'reply', tw: '回覆'},
  {en:'edit', tw: '編輯'},
  {en: 'English', tw: '英文'},
  {en: 'Chinese', tw: '中文'},
  {en:'en', tw: '英文'},
  {en:'tw', tw: '繁體中文'},
  {en:'cn', tw: '簡體中文'},
  {en:'Waiting for data loading...', tw: '載入新資料中，請等候 ...'},
  {en:'End of data, load complete!', tw: '資料全部載入完畢，已到結尾！'}
]
*/
