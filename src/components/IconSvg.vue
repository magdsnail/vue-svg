<template>
  <svg :class="['svg-icon']" :style="iconClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 1
    },
    color: String
  },
  computed: {
    iconName() {
      return `#icon-${this.type}`
    },
    iconClass() {
      return {
        width: `${this.size}em`,
        height: `${this.size}em`,
        color: `${this.color}`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>