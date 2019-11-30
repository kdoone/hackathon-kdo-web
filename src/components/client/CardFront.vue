<template>
  <div>
    <IdentityCard>      
      <div class="card__block">
        <div class="card__img"><img src="../../assets/img/card-img.png" alt=""></div>
        <div class="card__inputs">
          <InputCard>
            <input
                class="input"
                v-model="formData.surname"
                type="name"
                placeholder="Фамилия"
            />
          </InputCard>
          <InputCard>
            <input
                class="input"
                v-model="formData.name"
                type="name"
                placeholder="Имя"
            />
          </InputCard>
          <InputCard>
            <input
                class="input"
                v-model="formData.middleName"
                type="name"
                placeholder="Отчество"
            />
          </InputCard>
        </div>
      </div>
      <InputCard :style="{margin: 0}">
        <input
            class="input"
            v-model="formData.iin"
            type="tel" 
            pattern="[0-9]*"
            maxlength="12" 
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
  data() {
    return {
      formData: {
        surname: "",
        name: "",
        middleName: "",
        iin: ""
      } 
    }
  },
  components: {
    IdentityCard,
    InputCard
  }
}
</script>

<style lang="scss">
  
</style>