import Vue from 'vue'
import CapchaCode from './CapchaCode'

const Components = {
  CapchaCode
}
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
