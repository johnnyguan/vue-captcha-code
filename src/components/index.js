import Vue from 'vue'
import CaptchaCode from './CaptchaCode'

const Components = {
  CaptchaCode
}
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
