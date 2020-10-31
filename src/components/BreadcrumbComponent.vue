<template>
  <li :class="'breadcrumb-' + type">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: String,
    main: Boolean
  }
})
export default class BreadcrumbComponent extends Vue {}
</script>
