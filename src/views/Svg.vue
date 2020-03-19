<template>
  <div class="svg">
    <p>svg显示</p>
    <icon-svg type="shui" :size="2" color="green"></icon-svg>
  </div>
</template>

<script>
// @ is an alias to /src
import IconSvg from "@/components/IconSvg.vue";

export default {
  name: "Home",
  components: {
    IconSvg
  }
};
</script>
