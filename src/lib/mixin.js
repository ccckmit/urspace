import shared from './shared'
import MT from './mt'

const mixin = {
  props: ['domain', 'op'],
  data () {
    return {
      shared: shared
    }
  },
  created: function () {
    /*
    this.page = this.$route.params.page
    this.domain = this.$route.params.domain
    this.op = this.$route.params.op
    console.log('this.$route.params=', this.$route.params)
    */
  },
  methods: {
    mt (e) {
      return MT.mt(e, shared.language)
    },
    domainLink (domain) {
      // return '/sms/' + domain
      return '/sms/' + domain
    }
  }
}

export default mixin
