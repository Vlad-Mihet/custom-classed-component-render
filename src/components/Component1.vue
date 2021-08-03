<template>
  <div v-bind:class="className">
    <h2>This is the first component</h2>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    className: Object,
  },
}
</script>

<style scoped>

</style>