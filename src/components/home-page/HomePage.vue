<template>
  <div >
    <div class="home-page inverse">
      <a href="/" class="home-page__logo"><img src="@/assets/img/zhssb.svg" alt=""></a>
      <h2 class="home-page__quantity">47 241</h2>
      <div class="home-page__text">Столько счастливых семей уже приобрели жилье</div>
      <router-link to="/categories" class="button">Приобрести</router-link>
      <router-link to="/login" class="inverse">Войти</router-link>
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
  .home-page {
    background-image: url("../../assets/img/main-back.jpg");
    background-position: center center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    &__logo {
      max-width: 250px;
    }

    &__quantity {
      font-size: 94px;
      font-weight: bold;
    }

    &__text {
      margin-bottom: 50px;
    }

    .button {
      margin-bottom: 20px;
    }
  }
</style>