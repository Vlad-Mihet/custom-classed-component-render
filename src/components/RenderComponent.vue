<template>
  <component v-bind:is="components[index]" :className="computedClassesObject" />
</template>

<script>
import Component1 from "./Component1.vue"
import Component2 from "./Component2.vue"
import Component3 from "./Component3.vue"

import { computed, shallowRef } from "vue";
import { getPositionHelper } from "../helpers/getPositionStyles.js";

export default {
  name: 'Renderer',
  props: ['index'],
  Components: {
    Component1,
    Component2,
    Component3
  },
  setup() {
    const components = shallowRef([Component1, Component2, Component3]);

    const computedClassesObject = computed(() => getPositionHelper("center", "red", "sm"));
  
    console.log(computedClassesObject);

    return {
      computedClassesObject,
      components,
    }
  },
}
</script>