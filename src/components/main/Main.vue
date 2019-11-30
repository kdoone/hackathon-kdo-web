<template>
  <div >
    <div class="main inverse">
      <a href=""><img src="@/assets/img/zhssb.svg" alt=""></a>
      <h2 class="main__quantity">47 241</h2>
      <div class="main__text">Столько счастливых семей уже приобрели жилье</div>
      <router-link to="" class="button">Приобрести</router-link>
      <router-link to="" class="inverse">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .main {
    background-image: url("../../assets/img/main-back.jpg");
    background-position: center center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    &__quantity {
      font-size: 144px;
      font-weight: bold;
    }
  }
</style>