<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ui-compone />
    <ui-comptwo />
    <h3>Alerts</h3>
    <AlertComponent type="success"></AlertComponent>
    <AlertComponent type="danger"></AlertComponent>
    <AlertComponent type="warning"></AlertComponent>
    <AlertComponent type="info"></AlertComponent>
    <AlertComponent type="light"></AlertComponent>
    <AlertComponent type="dark"></AlertComponent>
    <AlertComponent type="success" href></AlertComponent>
    <AlertComponent type="success" aditionalContent></AlertComponent>
    <AlertComponent type="warning" dismissing></AlertComponent>
    <h3>Badges</h3>
    <BadgeComponent type="secondary" main></BadgeComponent>
    <BadgeComponent type="primary" main></BadgeComponent>
    <BadgeComponent type="success" main></BadgeComponent>
    <BadgeComponent type="danger" main></BadgeComponent>
    <BadgeComponent type="warning" main></BadgeComponent>
    <BadgeComponent type="info" main></BadgeComponent>
    <BadgeComponent type="light" main></BadgeComponent>
    <BadgeComponent type="dark" main></BadgeComponent>
    <BadgeComponent type="light" buttonNotification></BadgeComponent>
    <BadgeComponent pillType="pill" type="secondary" pill></BadgeComponent>
    <BadgeComponent pillType="pill" type="success" pill></BadgeComponent>
    <BadgeComponent pillType="pill" type="danger" pill></BadgeComponent>
    <BadgeComponent pillType="pill" type="warning" pill></BadgeComponent>
    <BadgeComponent pillType="pill" type="info" pill></BadgeComponent>
    <BadgeComponent link type="secondary"></BadgeComponent>
    <BadgeComponent link type="success"></BadgeComponent>
    <BadgeComponent link type="warning"></BadgeComponent>
    <h3>Breadcrumbs</h3>
    <BreadcrumbComponent main type="active"></BreadcrumbComponent>
    <BreadcrumbComponent href type="active"></BreadcrumbComponent>
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
