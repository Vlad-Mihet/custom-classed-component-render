<template>
  <div id="main">
    <!-- v-bind:is binds a '<component />' template to an actual component's data -->
    <render-component :index="index" />
  </div>
</template>

<script>
import { ref } from 'vue';
import RenderComponent from "./components/RenderComponent.vue";

export default {
  name: 'App',
  components: {
    RenderComponent,
  },
  setup() {
    const index = ref(0);

    return {
      index,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
