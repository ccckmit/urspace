import Vue from 'vue'
import {init, db} from '@/lib/fireService'

init('admin')

// import HelloWorld from '@/components/HelloWorld'

describe('Firebase', () => {
  it('db.query(messages)', done => {
    let q = { table: 'messages', orderBy: 'time', limit: 10, sort: 'desc'}
    console.debug('q=', q)
    db.query(q).then(function (list) {
      console.debug('list=%j', list)
      expect(list.length).toBe(10)
      done()
    })
  })
  it('db.get(user)', done => {
    db.get('/user/ccckmit').then(function (user) {
      console.debug('user=%j', user)
      expect(user.name).toBe('陳鍾誠')
      done()
    })
  })
})
