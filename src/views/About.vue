<template>
  <!-- 经典圣杯布局 -->
  <div class="layout">
    <header>header</header>
    <div class="main">
      <nav class="main-nav">nav</nav>
      <main class="main-content">main</main>
      <aside class="main-aside">aside</aside>
    </div>
    <footer>footer</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header,
footer {
  flex: 0 0 2em; //1 1 0%
  border: 1px solid red;
}
.main {
  display: flex;
  flex: 1;
  .main-nav,
  .main-aside {
    flex: 0 0 12em;
    border: 1px solid blue;
  }
  .main-content {
    flex: 1;
  }
}
</style>
