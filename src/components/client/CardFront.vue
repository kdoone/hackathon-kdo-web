<template>
  <div>
    <IdentityCard>
      <div class="card__block">
        <div class="card__img"><img src="../../assets/img/card-img.png" alt=""></div>
        <div class="card__inputs">
          <InputCard>
            <input
                class="input"
                v-model="formData.email"
                type="name"
                placeholder="Фамилия"
            />
          </InputCard>
          <InputCard>
            <input
                class="input"
                v-model="formData.email"
                type="name"
                placeholder="Имя"
            />
          </InputCard>
          <InputCard>
            <input
                class="input"
                v-model="formData.email"
                type="name"
                placeholder="Отчество"
            />
          </InputCard>
        </div>
      </div>
      <InputCard>
        <input
            class="input"
            v-model="formData.email"
            type="number"
            placeholder="ИИН"
        />
      </InputCard>
    </IdentityCard>
  </div>
</template>

<script>
import IdentityCard from "../client/IdentityCard.vue";
import InputCard from "../client/input-card/InputCard.vue";
export default {
  components: {
    IdentityCard,
    InputCard
  }
}
</script>

<style lang="scss">
  
</style>