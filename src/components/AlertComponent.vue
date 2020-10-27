<template>
  <div>
    <div class="alert" :class="'alert-' + type" role="alert">
      This is a test
    </div>
    <div v-if="href" class="alert" :class="'alert-' + type" role="alert">
      This is test
      <a href="#" class="alert-link">with link</a>
    </div>
    <div
      v-if="aditionalContent"
      class="alert"
      :class="'alert-' + type"
      role="alert"
    >
      <div>
        <h4 class="alert-heading">Title</h4>
        <p>This is more content</p>
        <hr />
        <p class="mb-0">And more content.</p>
      </div>
    </div>
    <div v-if="dismissing" class="alert" :class="'alert-' + type" role="alert">
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
    href: Boolean,
    aditionalContent: Boolean,
    dismissing: Boolean
  }
})
export default class AlertComponent extends Vue {}
</script>
