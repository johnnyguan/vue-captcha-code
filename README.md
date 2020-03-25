# vue-capcha-code

## Project setup
```
npm i @johnnyguan/vue-capcha-code
```
## Description
This project is aimed to show capcha code (length: 4) by canvas. The capcha code can either be passed as a variable or be generated by default.

## Usage
main.js
```
import Vue from 'vue'
import App from './App.vue'
import VueCapchaCode from '@johnnyguan/vue-capcha-code'
Vue.use(VueCapchaCode)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
XXX.vue
```
<capcha-code ref="code"></capcha-code>
```

## Configuration
|属性名|描述|值类型|默认值|
|:-|:-:|-:|-:|
|height|canvas高度|Number|80|
|width|canvas宽度|Number|40
|captcha|captcha code|String(4)|不传则内部生成|
|enableClick|是否点击canvas更新captcha|Boolean|false
|fontSize|字体大小|String|'20'|
|fontWeight|字体粗细|String|'normal' 可选'bold','bolder', '100'等|
|fontFace|字体类型|String|'serif'|
|fontStyle|字体样式|String|'normal' 可选'italic','oblique'|
|textFillColor|字体颜色|String|'#ff0000'|

## Method
```
this.$refs.code.getCode()
```

