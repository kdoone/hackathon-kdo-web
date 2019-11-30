<template>
    <div class="layout">
      <Sidebar />
      <Aside />
    </div>
</template>

<script>
import Aside from "../aside/Aside.vue";
import Sidebar from "../sidebar/Sidebar.vue";

export default {
  components: {
    Aside,
    Sidebar
  }
}
</script>

<style lang="scss">
    .layout {
        width: 100%;
        // height: 100%;
        height: 100vh;
        display: flex;

    }
</style>