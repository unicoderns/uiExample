<template>
  <div id="app">
    <AlertComponent msg="Welcome to Unicoderns Interface Component" />
    <BadgeComponent />
    <BreadcrumbComponent />
    <ButtonComponent />
    <ButtonGroupComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlertComponent from "./components/AlertComponent.vue";
import BadgeComponent from "./components/BadgeComponent.vue";
import BreadcrumbComponent from "./components/BreadcrumbComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import ButtonGroupComponent from "./components/ButtonGroupComponent.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

@Component({
  components: {
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    ButtonGroupComponent
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
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: 80px;
  margin-right: 80px;
}
</style>
