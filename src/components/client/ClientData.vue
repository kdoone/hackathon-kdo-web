<template>
  <div>
    <div class="client">
      <div class="client__img"><img src="@/assets/img/client.png" alt=""></div>
      <h3 class="client__data">Данные клиента</h3>
    </div>
    <IdentityCard>

    </IdentityCard>
  </div>
</template>

<script>
import IdentityCard from "../client/IdentityCard.vue";
export default {
  components: {
    IdentityCard
  }
}
</script>

<style lang="scss">
  .client {
    text-align: center;
    &__data {
      font-size: 20px;
      font-weight: 500;
      color: #008B8A;
    }
  }
</style>