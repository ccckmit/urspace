import Vue from 'vue'
import service from '@/lib/service'
import {ccckmit, urspace} from '@/lib/dbDataSetup'
import someMessages from './someMessages.json'
// import domainOp from '@/lib/domainOp'

const db = service.db

async function saveCheck(table, key, record) {
  expect.assertions(1)
  // console.log('domainOp=', domainOp)
  db.setRecord(table, key, record)
  let obj = await db.getRecord(table, key)
  record.time = obj.time
  return expect(obj).toEqual(record)
}

async function addMessages(messages) {
  let midList = []
  for (let message of messages) {
    midList.push(await db.addMessage(message))
  }
  return midList
}

describe('Firebase', () => {
  afterAll(() => { service.stop() })
  beforeAll(async () => {
    service.init('admin')
    
    // console.log('beforeAll:domainOp=', domainOp)
  })
  it('db.clear()', async () => {
    let result = await db.clear()
    expect(result).toBe(undefined)
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
  it('addMessages(someMessages)', async () => {
    expect.assertions(1)
    let midList = await addMessages(someMessages)
    console.log('midList=', midList)
    expect(midList.length).toBe(someMessages.length)
  })
  it('db.queryRecord(message order by time desc)', async () => {
    expect.assertions(1)
    let q = { orderBy: 'time', limit: 5, sort: 'desc'}
    const list = await db.queryMessage(q)
    // console.log('query: list=', JSON.stringify(list, null, 2))
    expect(list.length).toBe(q.limit)
  })
  it('db.queryRecord(code message order by time desc)', async () => {
    expect.assertions(1)
    let q = { domain:'code', orderBy: 'time', limit: 5, sort: 'desc'}
    const list = await db.queryMessage(q)
    // console.log('query: list=', JSON.stringify(list, null, 2))
    expect(list.length).toBe(3)
  })
  it('get(/ccckmit/', async () => {
    expect.assertions(1)
    var obj = await db.getByPath('-L3aP5oJIwvxbnSX3wB5')
    console.log('obj=',obj)
    expect(obj).toBe(null)
  })
})