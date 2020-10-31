<template>
  <span class="badge" :class="'badge-' + type">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: String,
    btnNotification: Boolean
  }
})
export default class BadgeComponent extends Vue {}
</script>
