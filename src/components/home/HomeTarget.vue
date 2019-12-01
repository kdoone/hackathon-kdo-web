<template>
  <div class="home">
    <div class="home__block">
      <div class="home__left">
        <img src="../../assets/img/home-gray.png" alt="">
      </div>
      <div class="home__main">
        <div class="home__group">
          <img src="../../assets/img/home-group.png" alt="">
        </div>
        <div class="home__img">
          <img src="../../assets/img/home-blue.png" alt="">
        </div>
        <!-- <div class="home__main__block home__main__block--left">
          <img src="../../assets/img/home-left.png" alt="">
          <div class="home__main__title home__main__title--left">Взнос, ставка 2%</div>
        </div>
        <div class="home__main__block home__main__block--right">
          <div class="home__main__block__img">
            <img src="../../assets/img/home-right.png" alt="">
            <div class="home__main__title home__main__title--right">Получение кредита, ставка 5%</div>    
          </div>      
        </div> -->
      </div>
      <div class="home__add">
        <a href=""><img src="../../assets/img/add.png" alt=""></a>
      </div>
    </div>
    <div class="home__footer">
      <div class="row">
        <div class="col-md-4">
          <div class="home__footer__num">5%</div>
          <div class="home__footer__title">Процентная ставка</div>
        </div>
        <div class="col-md-4">
          <div class="home__footer__num">140000₸</div>
          <div class="home__footer__title">Ежемесячный  взнос</div>
        </div>
        <div class="col-md-4">
          <div class="home__footer__num">2500000₸</div>
          <div class="home__footer__title">Остаток</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    &__block {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      margin: 0 100px;
    }

    &__group {
      width: 350px;
      height: 450px;
      position: absolute;
      left: -90%;
      top: -30px;
    }

    &__main {
      position: relative;

      &__title {
        position: absolute;
        color: #008B8A;
        font-size: 16px;
        font-weight: 600;
        max-width: 250px;
        // white-space: nowrap;
        &--right {
          left: 25px;
        }
        &--left {
          right: 25px;
        }
      }
      
      &__block {
        position: absolute;

        &__img {
        }
        
        &--left {
          right: 100px;
          top: 75%;
        }
         &--right {
          left: 100px;
        }
      }
    }

    &__img {
      position: relative;
      margin-top: -15px;
      img {
        width: 120px;
        position: relative;    
        z-index: 10;    
      }
      &::after {
          // content: "";
          // position: absolute;
          // background: #FFFFFF;
          // box-shadow: 0px 4.37288px 29.5169px rgba(0, 0, 0, 0.08);
          // border-radius: 33.8898px;
          // height: 450px;
          // width: 10px;
          // top: 0;
          // left: 50%;
          // transform: translateX(-50%);
        }
    }

    &__footer {
      background: #fff;
      padding: 10px 0;
      &__num {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        color: #21A4A3;
      }
      &__title {
        font-size: 16px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
</style>