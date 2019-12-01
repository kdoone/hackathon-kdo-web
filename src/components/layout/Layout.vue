<template>
    <div class="layout">
      <Sidebar />
      <Main />
    </div>
</template>

<script>
import Main from "../main/Main.vue";
import Sidebar from "../sidebar/Sidebar.vue";

export default {
  components: {
    Main,
    Sidebar
  }
}
</script>

<style lang="scss">
    .layout {
        width: 100%;
        min-height: 100vh;
        display: flex;

    }
</style>