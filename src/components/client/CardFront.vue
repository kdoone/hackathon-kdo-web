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
            :value="formData.iin"
            @input="setFormData($event)"
            placeholder="ИИН"
            maxlength="12"
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
        iin: "12"
      } 
    }
  },
  methods: {
    setFormData(e) {
      const iin = e.target.value;
      this.formData.iin = iin.replace(/[^0-9]/g, "");
      e.target.value = this.formData.iin;
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