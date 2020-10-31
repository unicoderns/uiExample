<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ui-compone />
    <ui-comptwo />
    <h3>Alerts</h3>
    <AlertComponent type="warning">Hello</AlertComponent>
    <AlertComponent type="info">Hello</AlertComponent>
    <AlertComponent type="light">Hello</AlertComponent>
    <AlertComponent type="dark">Hello</AlertComponent>
    <AlertComponent type="success">
      Hello
      <a href="www.google.com" class="alert-link">with link</a>
    </AlertComponent>
    <AlertComponent type="danger" dismissing>Hello</AlertComponent>
    <AlertComponent type="success">
      <h4 class="alert-heading">This is the title</h4>
      <p>This is the content</p>
      <hr />
      <p class="mb-0">Here we have more content</p>
    </AlertComponent>
    <h3>Badges</h3>
    <BadgeComponent main type="secondary">Simple Badge</BadgeComponent>
    <br />
    <button type="button" class="btn btn-primary">
      Notifications
      <BadgeComponent btnNotification type="light">5</BadgeComponent>
    </button>
    <br />
    <BadgeComponent main type="success">Simple Badge</BadgeComponent>
    <br />
    <BadgeComponent main type="pill badge-dark">Simple Badge</BadgeComponent>
    <br />
    <BadgeComponent main type="pill badge-warning">Simple Badge</BadgeComponent>
    <h3>Breadcrumbs</h3>
    <BreadcrumbComponent></BreadcrumbComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import AlertComponent from "./components/AlertComponent.vue";
import BadgeComponent from "./components/BadgeComponent.vue";
import BreadcrumbComponent from "./components/BreadcrumbComponent.vue";

@Component({
  components: {
    HelloWorld,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent
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
