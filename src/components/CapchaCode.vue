<style scoped>
.captcha-canvas {
  background: #f1eded;
}
</style>

<template>
  <div class="capcha-code-wrapper">
    <canvas :id="id" class="captcha-canvas" :width="width" :height="height" @click="changeCode"></canvas>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
import random from 'random'
export default {
  props: {
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 40
    },
    captcha: {
      type: String,
      validator: function (value) {
        return value.length === 4
      },
      default: '0000'
    },
    enableClick: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: '20'
    },
    fontWeight: {
      type: String,
      default: 'normal'
    },
    fontFace: {
      type: String,
      default: 'serif'
    },
    fontStyle: {
      type: String,
      default: 'normal'
    },
    textFillColor: {
      type: String,
      default: '#ff0000'
    }
  },
  data () {
    return {
      id: '',
      code: '',
      context: null
    }
  },
  mounted () {
    this.id = uuidv4()
    this.$nextTick(() => {
      let theCanvas = document.getElementById(this.id)
      this.context = theCanvas.getContext('2d')
      if (this.captcha !== '0000') {
        this.code = this.captcha
      } else {
        this.generateCode()
      }
      this.renderCode()
    })
  },
  methods: {
    getCode () {
      return this.code
    },
    changeCode () {
      if (this.enableClick) {
        this.generateCode()
        this.renderCode()
      }
    },
    generateCode () {
      this.code = random.int(1111, 9999)
    },
    renderCode () {
      this.context.clearRect(0, 0, this.width, this.height)
      this.context.textAlign = 'center'
      this.context.textBaseline = 'middle'
      this.context.font = this.fontWeight + ' ' + this.fontStyle + ' ' + this.fontSize + 'px ' + this.fontFace
      this.context.strokeStyle = this.textFillColor
      this.context.fillStyle = this.textFillColor
      let xPosition = (this.width / 2)
      let yPosition = (this.height / 2)
      this.context.fillText(this.code, xPosition, yPosition)
    }
  }
}
</script>
