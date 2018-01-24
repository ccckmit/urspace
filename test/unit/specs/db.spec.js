import Vue from 'vue'
import service from '@/lib/service'
import {ccckmit, urspace} from '@/lib/dbDataSetup'
import someMessages from './someMessages.json'
// import domainOp from '@/lib/domainOp'

const db = service.db
service.init('admin')

async function saveCheck(table, key, record) {
  expect.assertions(1)
  // console.log('domainOp=', domainOp)
  db.setRecord(table, key, record)
  let obj = await db.getRecord(table, key)
  record.time = obj.time
  return expect(obj).toEqual(record)
}

function addMessages(messages) {
  for (let message of messages) {
    db.addMessage(message)
  }
}

describe('Firebase', () => {
  afterAll(() => { service.stop() })
  beforeAll(() => {
    // console.log('beforeAll:domainOp=', domainOp)
  })
  it('db.setup(ccckmit)', async () => {
    await saveCheck('user', ccckmit.uid, ccckmit)
  })
  it('db.setup(ccckmit):link', async () => {
    let link = {linkto: 'user:' + ccckmit.uid}
    await saveCheck('link', 'ccckmit', link)
  })
  it('db.setup(urspace)', async () => {
    await saveCheck('user', urspace.uid, urspace)
  })
  it('db.setup(urspace):link', async () => {
    let link = {linkto: 'user:' + urspace.uid}
    await saveCheck('link', 'urspace', link)
  })
  it('addMessages(someMessages) and db.queryRecord(message order by time desc)', async () => {
    expect.assertions(1)
    addMessages(someMessages)
    let q = { orderBy: 'time', limit: 5, sort: 'desc'}
    const list = await db.queryRecord('message', q)
    expect(list.length).toBe(q.limit)
  })
  it('get(/ccckmit/', async () => {
    expect.assertions(1)
    var obj = await db.getByPath('-L3aP5oJIwvxbnSX3wB5')
    console.log('obj=',obj)
    expect(obj).toBe(null)
  })
})
