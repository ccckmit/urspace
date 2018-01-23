import Vue from 'vue'
import {init, db, stop} from '@/lib/fireService'
import {ccckmit, urspace} from '@/lib/fireDataSetup'

init('admin')

async function saveAndCheck(self, path, value) {
  expect.assertions(1)
  db.set(path, value)
  let valueGet = await db.get(path)
  // console.log('valueGet=', valueGet)
  // console.log('value=', value)
  return expect(valueGet).toEqual(value)
}

describe('Firebase', () => {
  afterAll(() => { stop() })
  it('db.setup(ccckmit)', async () => {
    await saveAndCheck(this, '/domain/' + ccckmit.ownerId, ccckmit)
  })
  it('db.setup(ccckmit):link', async () => {
    await saveAndCheck(this, '/domain/ccckmit/', {type: 'link', linkto: ccckmit.ownerId})
  })
  it('db.setup(urspace)', async () => {
    await saveAndCheck(this, '/domain/' + urspace.ownerId, urspace)
  })
  it('db.setup(urspace):link', async () => {
    await saveAndCheck(this, '/domain/urspace/', {type: 'link', linkto: urspace.ownerId})
  })
  it('db.query(messages)', async () => {
    expect.assertions(1)
    let q = { table: 'messages', orderBy: 'time', limit: 10, sort: 'desc'}
    // console.log('q=', q)
    const list = await db.query(q)
    expect(list.length).toBe(10)
  })
})
