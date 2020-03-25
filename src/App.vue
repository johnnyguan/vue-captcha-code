<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <capcha-code :enableClick="true" ref="code" :width="300" :height="100" captcha="rtst" fontSize="60" fontWeight="bold" fontStyle="italic" textFillColor="#00ff00"></capcha-code>
    <button @click="getCode">获取code</button>
    <capcha-code></capcha-code>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getCode () {
      alert(this.$refs.code.getCode())
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
