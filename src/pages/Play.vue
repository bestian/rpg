<template lang = "pug">
q-page.flex.flex-center
  h1 {{userName}} 歡迎來到遊戲頁面
</template>

<script>
export default {
  name: 'PageIndex',
  props: ['userName'],
  created () {
    if (!this.userName) {
      this.$emit('changeName', '無名氏')
    }
  }
}
</script>
