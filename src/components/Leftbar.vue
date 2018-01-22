<template>
  <div id="leftnav">
<!--    <div id="leftbar"> -->
      <router-link v-for="(sub, index) in subDomain[domain || 'all']" :key="index" :to="domainLink(sub)" class="captalize">{{mt(sub)}}</router-link>
<!--    </div> -->
  </div>
</template>
<script>
import mixin from '../lib/mixin'

export default {
  name: 'leftbar',
  props: [ 'domain' ],
  mixins: [mixin],
  data () {
    return {
      subDomain: {
        all: ['people', 'object', 'article', 'image', 'video', 'music', 'book', 'place'],
        people: ['family', 'friends', 'followBy'],
        object: ['sale', 'buy'],
        article: ['news', 'rss'],
        image: ['scene', 'portrait', 'family'],
        video: ['movie', 'tv', 'youtube', 'sport'],
        music: ['MTV', 'voice'],
        book: ['science', 'math', 'novel', 'classic'],
        place: ['near', 'asia', 'europe', 'america', 'africa']
      }
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
