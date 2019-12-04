<template>
  <div class="client">
    <div class="client__header">
      <div class="client__img"><img src="@/assets/img/client.png" alt=""></div>
      <h3 class="client__data">Данные клиента</h3>
    </div>
    <CardFront />
    <CardBack />
    <InputCard>
     <select class="input input--big" placeholder="Город">
        <option value="01">Город</option>
        <option value="02">Almaty </option>
        <option value="03">Nur-Sultan</option>
        <option value="03">Kyzylorda</option>
      </select>
    </InputCard>
    <router-link to="" class="button button--blue">Далее</router-link>
  </div>
</template>

<script>
import CardFront from "../client/CardFront.vue";
import CardBack from "../client/CardBack.vue";
import InputCard from "../client/input-card/InputCard.vue"
export default {
  data() {
    return {
      formData: {
        currentCity: ""
      }
    }
  },
  components: {
    CardFront,
    CardBack,
    InputCard
  }
}
</script>

<style lang="scss">
  .client {
    padding: 50px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    &__header {
      text-align: center;
      margin-bottom: 40px;
    }
    &__data {
      font-size: 20px;
      font-weight: 500;
      color: #008B8A;
    }
  }
</style>