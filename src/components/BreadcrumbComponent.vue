<template>
  <div>
    <nav v-if="main" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li :class="'breadcrumb-item' + ' ' + type" aria-current="page">
          Home
        </li>
      </ol>
    </nav>
    <nav v-if="href" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li :class="'breadcrumb-item' + ' ' + type" aria-current="page">
          Pages
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: String,
    href: Boolean,
    main: Boolean
  }
})
export default class BreadcrumbComponent extends Vue {}
</script>
