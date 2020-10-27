<template>
  <div>
    <span class="badge" :class="'badge-' + type" role="badge" v-if="main"
      >Common Badge</span
    >
    <button v-if="buttonNotification" type="button" class="btn btn-primary">
      Notification with Badge
      <span class="badge badge-light">4</span>
    </button>
    <span
      class="badge"
      :class="'badge-' + pillType + ' badge-' + type"
      v-if="pill"
      >Pill Badge</span
    >
    <a v-if="link" href="#" class="badge" :class="'badge-' + type" role="badge"
      >Badge with a link</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: String,
    main: Boolean,
    buttonNotification: Boolean,
    pill: Boolean,
    pillType: String,
    link: Boolean
  }
})
export default class BadgeComponent extends Vue {}
</script>
