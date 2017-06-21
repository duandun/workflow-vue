<template lang="html">
  <div class="test-container">
      <canvas id="myCanvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
        const myCanvas = document.querySelector('#myCanvas');
        const ctx = myCanvas.getContext('2d');
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(0, 0, 150, 75);
    }
}
</script>

<style lang="sass">
    .test-container {
        width: 400px;
        margin: 50px auto;
    }
</style>
