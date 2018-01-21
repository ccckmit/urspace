import shared from './shared'
import MT from './mt'

const mixin = {
  data () {
    return {
      shared: shared
    }
  },
  methods: {
    mt (e) {
      return MT.mt(e, shared.language)
    }
  }
}

export default mixin
