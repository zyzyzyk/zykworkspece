<template>
  <div>
    <h3>动态渲染.vue 文件的组件--display</h3>
    <display :code="code"></display>
  </div>
</template>

<script>
import display from '@/components/com/display'
import defaultCode from './default-code.js'
export default {
  components: {display},
  data() {
    return {
      code: defaultCode
    }
  },
}
</script>

<style>

</style>
