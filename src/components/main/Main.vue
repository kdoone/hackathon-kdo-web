<template>
  <div class="main-layout">
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
  .main-layout {
    background-image: url("../../assets/img/client-back.jpg");
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>