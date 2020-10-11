<template>
  <div class="alert" :class="'alert-' + type" role="alert">
    This is a test
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["type"]
})
export default class AlertComponent extends Vue {}
</script>
