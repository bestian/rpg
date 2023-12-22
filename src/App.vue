<template>
  <div id="q-app">
    <router-view :userName="userName"/>
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
}
</script>
