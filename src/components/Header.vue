<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Weather App</a>
      </div>
    </div>
    <div :class="['loading-bar', loading === 1 ? 'loading' : loading === 0 ? 'loaded' : '']"></div>
  </nav>
</template>

<script>
export default {
  name: "Header-tag",
  props: ["loading"],
}
</script>

<style scoped>
.loading-bar {
  background: #f7a824;
  width: 0%;
  height: 2px;
}
.loading {
  animation: width 1s ease forwards;
}
@keyframes width {
  0% {
    width: 0%;
  } 100% {
    width: 100%;
  }
}

/* .loaded {
  animation: widthFull 1s ease;
}
@keyframes widthFull {
  100% {
    width: 100%;
  }
} */
</style>