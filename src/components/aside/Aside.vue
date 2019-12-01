<template>
  <div class="aside">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="scss">
  .aside {
    background-image: url("../../assets/img/client-back.jpg");
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>