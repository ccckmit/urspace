<template>
  <div class="messageNew">
    <div class="message">
      <div class="messageHeader"><a href="#">user</a></div>
      <div class="messageContent" contenteditable id="messageNewContent"></div>
      <div class="messageFooter"><button class="btn info">發佈</button>&nbsp;<button class="btn info">清除</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageNew',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
