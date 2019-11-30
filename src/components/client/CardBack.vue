<template>
  <div>
    <IdentityCard>      
      <div class="card__block">
        <div class="card__img"><img class="card__qr" src="../../assets/img/card-qr.png" alt=""></div>        
        <InputCard>
          <input
              class="input"
              v-model="formData.numberCard"
              type="tel"               
              pattern="[0-9]*"
              maxlength="9" 
              placeholder="Номер"
          />
        </InputCard>
      </div>
      <div class="card__block">
        <div class="card__img"><img src="../../assets/img/card-scan.png" alt=""></div>
        <div class="card__inputs">          
          <InputCard>
            <!-- <input
                class="input"
                v-model="formData.city"
                type="name"
                placeholder="Город"
            /> -->
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
              class="input input--min"
              v-model="formData.from"
              type="tel"
              pattern="\d*" maxlength="4" 
              placeholder="от"
          />        
        </InputCard>
        <InputCard :style="{margin: 0}">
          <input
              class="input input--min"
              v-model="formData.to"
              type="tel"
              pattern="\d*" maxlength="4" 
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
  }
}
</script>

<style lang="scss">
  select {
    font-weight: normal;
  }
</style>