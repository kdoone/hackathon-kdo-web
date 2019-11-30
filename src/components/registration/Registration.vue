<template>
    <div >
      <div class="programs">
        <router-link to="/registration/programs">
          <div class="program">
            <div class="program__img"><img src="../../assets/img/program-1.png" alt=""></div>
            <h2 class="program__title"></h2>
          </div>
        </router-link>
        <router-link to="/registration/programs">
          <div class="program">
            <div class="program__img"><img src="../../assets/img/program-1.png" alt=""></div>
            <h2 class="program__title"></h2>
          </div>
        </router-link>
        <router-link to="/registration/programs">
          <div class="program">
            <div class="program__img"><img src="../../assets/img/program-1.png" alt=""></div>
            <h2 class="program__title"></h2>
          </div>
        </router-link>
        <router-link to="/registration/programs">
          <div class="program">
            <div class="program__img"><img src="../../assets/img/program-1.png" alt=""></div>
            <h2 class="program__title"></h2>
          </div>
        </router-link>
      </div>
      <ClientData />
        
    </div>
</template>

<script>
import ClientData from "../client/ClientData.vue";

export default {
    components: {
      ClientData,
    },
    data() {
        return {
           formData: {
             email: ""
           } 
        };
    },
};
</script>

<style lang="scss">

</style>
