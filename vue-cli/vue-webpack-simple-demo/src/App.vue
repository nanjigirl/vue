<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="button" value="点击改变" @click="change">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
    methods:{
      change(){
          this.msg = this.msg.split('').reverse().join('');
        }
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
