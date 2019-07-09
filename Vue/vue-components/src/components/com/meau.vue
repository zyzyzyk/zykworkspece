<template>
  <div class="meau">
    {{msg}}
    <!-- {{name.name}} -->
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/Bus/bus.js'
export default {
inject: ['app'],
data() {
  return {
    msg: '我是兄弟组件'
  }
},
created() {
  let self = this
  bus.$on('todo', (val) =>{
    console.log(val)
  })
},
}
</script>

<style>

</style>
