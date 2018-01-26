import shared from './shared'
import MT from './mt'

const mixin = {
  props: ['page', 'domain', 'op', 'uid'],
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
    toLink (domain, op, uid) {
      op = op || 'new'
      domain = domain || 'all'
      uid = uid || ''
      return `/sms/${domain}/${op}/${uid}`
    },
    routeParam (name) {
      return this.$route.param[name]
    },
    go (k) {
      this.$router.go(k)
    },
    domainLink (domain) {
      // return '/sms/' + domain
      return '/sms/' + domain
    }
  }
}

export default mixin
