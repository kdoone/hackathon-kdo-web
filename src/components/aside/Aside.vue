<template>
  <div class="aside">
    <router-view />
    <Categories />
  </div>
</template>

<script>
import Categories from "../categories/Categories.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    Categories
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