<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ui-compone />
    <ui-comptwo />
    <AlertComponent type="success"></AlertComponent>
    <AlertComponent type="danger"></AlertComponent>
    <AlertComponent type="warning"></AlertComponent>
    <AlertComponent type="info"></AlertComponent>
    <AlertComponent type="light"></AlertComponent>
    <AlertComponent type="dark"></AlertComponent>
    <AlertComponent type="success" href="href"></AlertComponent>
    <AlertComponent
      type="success"
      aditionalContent="aditionalContent"
    ></AlertComponent>
    <AlertComponent type="warning" dismissing></AlertComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import AlertComponent from "./components/AlertComponent.vue";

@Component({
  components: {
    HelloWorld,
    AlertComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
