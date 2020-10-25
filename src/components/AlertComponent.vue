<template>
  <div class="alert" :class="'alert-' + type" role="alert">
    This is a test
    <a v-if="href" href="#" class="alert-link">with link</a>
    <div v-if="aditionalContent">
      <h4 class="alert-heading">This is the title</h4>
      <p>This is more content</p>
      <hr />
      <p class="mb-0">And more content.</p>
    </div>
    <div
      v-if="dismissing"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      You should close this
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
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: String,
    href: String,
    aditionalContent: String,
    dismissing: Boolean
  }
})
export default class AlertComponent extends Vue {}
</script>
