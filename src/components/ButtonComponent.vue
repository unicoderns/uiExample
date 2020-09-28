<template>
  <div class="hello">
    <hr />
    <h2>Buttons</h2>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
    <hr />
    <h3>Button Tags</h3>
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input" />
    <input class="btn btn-primary" type="submit" value="Submit" />
    <input class="btn btn-primary" type="reset" value="Reset" />
    <hr />
    <h3>Outline Buttons</h3>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
    <hr />
    <h3>Sizes</h3>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
    <button type="button" class="btn btn-secondary btn-sm">Small button</button>
    <hr />
    <button type="button" class="btn btn-primary btn-lg btn-block">
      Block level button
    </button>
    <hr />
    <button type="button" class="btn btn-secondary btn-lg btn-block">
      Block level button
    </button>
    <hr />
    <h3>Active State</h3>
    <a
      href="#"
      class="btn btn-primary btn-lg active"
      role="button"
      aria-pressed="true"
      >Primary link</a
    >
    <a
      href="#"
      class="btn btn-secondary btn-lg active"
      role="button"
      aria-pressed="true"
      >Link</a
    >
    <hr />
    <h3>Disactive State</h3>
    <button type="button" class="btn btn-lg btn-primary" disabled>
      Primary button
    </button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>
      Button
    </button>
    <hr />
    <h2>Button Plugin</h2>
    <hr />
    <h3>Toggle States</h3>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="button"
      aria-pressed="false"
    >
      Single toggle
    </button>
    <hr />
    <h3>Checbox and radio buttons</h3>
    <div class="btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="checkbox" checked /> Checked
      </label>
    </div>
    <hr />
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1" checked /> Active
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2" /> Radio
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option3" /> Radio
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
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
</style>
