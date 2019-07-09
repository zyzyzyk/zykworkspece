<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import bus from '@/Bus/bus.js'
function oneOf(value, validList) {
  for(let i = 0; i < validList.length; i++) {
    if(value === validList[i]) {
      return true
    }
  }
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleClick(event) {
      bus.$emit('todo', this.msg)
      //  console.log(event)
      // this.$emit('on-click', this.msg)
    }
  },
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>
