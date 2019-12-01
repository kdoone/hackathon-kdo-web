<template>
    <div class="categories">
        <div class="category">
          <router-link  to="/programs">          
              <div class="category__img"><img src="../../assets/img/category-1.png" alt=""></div>
              <h2 class="category__title">Дом</h2>
          </router-link>
        </div>
        <div class="category">
          <router-link  to="/programs">          
              <div class="category__img"><img src="../../assets/img/category-1.png" alt=""></div>
              <h2 class="category__title">Участок</h2>
          </router-link>
        </div>
        <div class="category">
          <router-link  to="/programs">          
              <div class="category__img"><img src="../../assets/img/category-1.png" alt=""></div>
              <h2 class="category__title">Квартира</h2>
          </router-link>
        </div>
        <div class="category">
          <router-link  to="/programs">          
              <div class="category__img"><img src="../../assets/img/category-1.png" alt=""></div>
              <h2 class="category__title">Ремонт</h2>
          </router-link>           
        </div>
    </div>
</template>

<script>
export default {
    components: {
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
  .categories {
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
  }

  .category {
    width: 48%;
    padding: 20px 30px;
    margin: 2px;
    background: #fff;
    box-shadow: 0px 10.9153px 30.9266px rgba(0, 0, 0, 0.02);
    border-radius: 10.9153px;

    &__title {
      font-size: 18px;
      text-align: center;
      color: #008B8A;
      font-weight: normal;
      margin-top: 15px;
    }
  }
</style>
