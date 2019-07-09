<template>
  <div id="app">
    <!-- header -->
    <v-index>
      <i slot="icon" class="el-icon-time"></i>      
      <router-link to="/index"></router-link>
    </v-index>
    <v-mian></v-mian>
  </div>
</template>

<script>
import index from './components/index'
import main from './components/mian'

export default {
  name: 'App',
  components: {
    'v-index': index,
    'v-main': main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
