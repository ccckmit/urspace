import {mt} from '@/lib/mt'

describe('MT', () => {
  it('mt(video)', () => {
    expect(mt('video', 'tw')).toBe('影片')
  })
  it('mt(vixxx)', () => {
    expect(mt('vixxx', 'tw')).toBe('vixxx')
  })
})
