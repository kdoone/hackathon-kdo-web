<template>
  <div>
    <IdentityCard>      
      <div class="card__block">
        <div class="card__img"><img class="card__qr" src="../../assets/img/card-qr.png" alt=""></div>        
        <InputCard>
          <input
              class="input"
              :value="formData.numberCard"
              @input="setFormData($event)"
              maxlength="9" 
              placeholder="Номер"
          />
        </InputCard>
      </div>
      <div class="card__block">
        <div class="card__img"><img src="../../assets/img/card-scan.png" alt=""></div>
        <div class="card__inputs">          
          <InputCard>
            <select class="input" placeholder="Город">
              <option value="01">Город</option>
              <option value="02">Almaty </option>
              <option value="03">Nur-Sultan</option>
            </select>
          </InputCard>
          <InputCard>
            <input
                class="input"
                v-model="formData.issuedBy"
                type="name"
                placeholder="Выдано"
            />
          </InputCard>
        </div>
      </div>
      <div class="card__block">
        <InputCard :style="{margin: 0}">        
          <input
              type="date"
              class="input input--min"
              v-model="formData.from"
              placeholder="от"
          />        
        </InputCard>
        <InputCard :style="{margin: 0}">
          <input
              type="date"
              class="input input--min"
              v-model="formData.to"
              placeholder="до"
          />
        </InputCard>
      </div>      
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
        numberCard: "",
        city: "",
        issuedBy: "",
        from: "",
        to: ""
      } 
    }
  },
  components: {
    IdentityCard,
    InputCard
  },
  methods: {
    setFormData(e) {
      const iin = e.target.value;
      this.formData.iin = iin.replace(/[^0-9]/g, "");
      e.target.value = this.formData.iin;
    }
  },
}
</script>

<style lang="scss">
  select {
    font-weight: normal;
  }
</style>