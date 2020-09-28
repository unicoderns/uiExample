<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <h2>Alerts</h2>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert—check it out!
    </div>
    <div class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
    <div class="alert alert-warning" role="alert">
      A simple warning alert—check it out!
    </div>
    <div class="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
    <div class="alert alert-light" role="alert">
      A simple light alert—check it out!
    </div>
    <div class="alert alert-dark" role="alert">
      A simple dark alert—check it out!
    </div>
    <hr />
    <h3>Alerts with link color</h3>
    <div class="alert alert-primary" role="alert">
      A simple primary alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-success" role="alert">
      A simple success alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-danger" role="alert">
      A simple danger alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-warning" role="alert">
      A simple warning alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-info" role="alert">
      A simple info alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-light" role="alert">
      A simple light alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <div class="alert alert-dark" role="alert">
      A simple dark alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you
      like.
    </div>
    <hr />
    <h3>Alerts with aditional content</h3>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </div>
    <hr />
    <h3>Alert Dismissing</h3>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Alert extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
