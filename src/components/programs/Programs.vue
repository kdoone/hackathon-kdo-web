<template>
  <div>
    <router-link to="/client-data">
      <div class="program">
        <div class="program__block">
          <h2 class="program__title">Бақытты отбасы</h2>
          <div class="program__text">Ставка по займу: </div>
          <div class="program__text">Срок займа: 19 лет</div>
          <div class="program__text">Минимальный первоначальный взнос: от 10 % </div>
        </div>
        <div class="program__img"><img src="../../assets/img/program-1.png" alt=""></div>
      </div>
    </router-link>
    <router-link to="/client-data">
      <div class="program">
        <div class="program__block">
          <h2 class="program__title">Нұрлы жер</h2>
          <div class="program__text">Ставка по займу: 5%</div>
          <div class="program__text">Срок займа: 23 лет</div>
          <div class="program__text">Минимальный первоначальный взнос: от 20 % </div>
        </div>
        <div class="program__img"><img src="../../assets/img/program-2.png" alt=""></div>
      </div>
    </router-link>
    <router-link to="/client-data">
      <div class="program">
        <div class="program__block">
          <h2 class="program__title">Свой дом</h2>
          <div class="program__text">Ставка по займу: 7%</div>
          <div class="program__text">Срок займа: 19 лет</div>
          <div class="program__text">Минимальный первоначальный взнос: от 20 % </div>
        </div>
        <div class="program__img"><img src="../../assets/img/program-3.png" alt=""></div>
      </div>
    </router-link>
    <router-link to="/client-data">
      <div class="program">
        <div class="program__block">
          <h2 class="program__title">Военная ипотека</h2>
          <div class="program__text">Ставка по займу: 8%</div>
          <div class="program__text">Срок займа: 23 лет</div>
          <div class="program__text">Минимальный первоначальный взнос: от 15 % </div>
        </div>
        <div class="program__img"><img src="../../assets/img/program-4.png" alt=""></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .program {
    max-width: 400px;
    width: 100%;
    background-image: url("../../assets/img/program-back.jpg");
    background-size: cover;
    color: #fff;
    display: flex;
    padding: 20px 25px;

    &__title {
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
    }
  }
</style>