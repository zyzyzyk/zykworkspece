<template>
  <div id="app">
   clicked {{$store.state.count}} times, count is {evenOrOdd}
   <button @click="increment">+</button>
   <button @click="decrement">-</button>
   <button @click="incrementIfOdd">increment if odd</button>
   <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
// 借
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: 
  mapGetters([
      'evenOrOdd'
    ])
  }
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
</script>

<style>
  
</style>
