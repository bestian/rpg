<template>
  <div id="q-app">
    <router-view :userName="userName" @changeName="changeName"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      userName: '無名氏'
    }
  },
  mounted () {
    if (this.$route.params.userName) {
      this.userName = this.$route.params.userName
    } else {
      var name = prompt('勇者，請輸入您的名字')
      if (name) {
        this.userName = name
      } else {
        this.userName = '無名氏'
      }
    }
  },
  created () {
    this.userName = this.$route.params.userName
  },
  methods: {
    changeName (name) {
      this.userName = name
    }
  }
}
</script>
