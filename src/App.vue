<template>
  <div id="app">
    <h1>Vue Tree Browser</h1>
    <TreeItem @onClick="nodeWasClicked" :node="root" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TreeItem from '@/components/TreeItem.vue'

const store = useStore()

const root = computed(() => {
  return store.getters.data
})

</script>


<style lang="scss">
body {
  background-color: #333;
  color: white;

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
}
</style>