<template>
  <div>
    <component
      :is="type === 'regular' ? 'span' : 'a'"
      class="badge"
      :class="'badge-' + variant"
      :type="type"
      :href="href"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    variant: String,
    type: String,
    href: String
  }
})
export default class BadgeComponent extends Vue {}
</script>
