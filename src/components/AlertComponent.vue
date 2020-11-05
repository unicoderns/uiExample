<template>
  <div>
    <div class="alert" :class="'alert-' + variant" role="alert">
      <slot></slot>
      <button
        v-if="dismissing"
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
    variant: String,
    dismissing: Boolean
  }
})
export default class AlertComponent extends Vue {}
</script>
