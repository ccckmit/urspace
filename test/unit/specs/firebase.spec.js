import Vue from 'vue'
import {init, db, stop} from '@/lib/fireService'

init('admin')
/*
var urspaceDictionary = [

]

var urspaceDomain = [
  people: ['family', 'friends', 'followBy'],
  object: ['sale', 'buy'],
  article: ['news', 'rss'],
  image: ['scene', 'portrait', 'family'],
  video: ['movie', 'tv', 'youtube', 'sport'],
  music: ['MTV', 'voice'],
  book: ['science', 'math', 'novel', 'classic'],
  place: ['near', 'asia', 'europe', 'america', 'africa']  
]
*/
// import HelloWorld from '@/components/HelloWorld'

describe('Firebase', () => {
  afterAll(() => { stop() })
  it('db.query(messages)', async () => {
    expect.assertions(1)
    let q = { table: 'messages', orderBy: 'time', limit: 10, sort: 'desc'}
    // console.log('q=', q)
    const list = await db.query(q)
    expect(list.length).toBe(10)
  })
  it('db.get(user)', done => {
    db.get('/user/ccckmit').then(function (user) {
      // console.log('user=', user)
      expect(user.name).toBe('陳鍾誠')
      done()
    })
  })
  it('db.set(domain) && db.get(domain)', done => {
    var myChildText = '課程 en:course\n書籍\n程式'
    db.set('/domain/ccckmit/child/', myChildText)
    db.get('/domain/ccckmit/child/').then(function (text) {
      // console.log('text=', text)
      expect(text).toBe(myChildText)
      done()
    })
  })
})
