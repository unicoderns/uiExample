<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
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
    main: Boolean,
    link: String
  }
})
export default class BreadcrumbComponent extends Vue {}
</script>
