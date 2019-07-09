<template>
  <div ref='display'>
    22222
  </div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      html: "",
      js: "",
      css: "",
      component: null,
      id: randomStr()
    }
  },
  methods: {
    // sourse: .vue 文件代码，也就是props: code
    // type: 分割的部分，template script style
    getSourse(sourse, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = sourse.match(regex)
      if (!openingTag){
        return ""
      }else {
        openingTag = openingTag[0]
      }

      return sourse.slice(
        sourse.indexOf(openingTag) + openingTag.length,
        sourse.lastIndexOf(`</${type}>`)
      )
    },
    splitCode() {
      const script = this.getSourse(this.code, "script").replace(/export default/,"return")
      const style = this.getSourse(this.code, "style")
      const template = `<div id="app">${this.getSourse(this.code, "template")}</div>`
      this.html = template
      this.js = script
      this.css = style
    },
    renderCode() {
      this.splitCode()

      if (this.html !== "" && this.js !=="") {
        const parseStrToFunc = new Function(this.js) ()

        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()
        this.$refs.display.appendChild(this.component.$el)

        if(this.css !== "") {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    destroyCoed() {
      const $target = document.getElementById(this.id)
      if ($target) {
        $target.parentNode.removeChild($target)
      }
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destroy()
        this.component = null
      }
    },
  },
  mounted() {
    this.renderCode()
  },
  beforeDestroy() {
    this.destroyCoed()
  },
  watch: {
    code () {
      this.destroyCoed()
      this.renderCode()
    }
  },
}
</script>

<style>

</style>
