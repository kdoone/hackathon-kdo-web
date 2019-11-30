<template>
  <div class="card">
    <div class="card__title" :title="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
      title: {
        title: String,      
        default: "Удостоверение личности"
      }
  },
}
</script>

<style lang="scss">
  .card {
    background: #FFFFFF;
    border: 1.36299px solid #E9E9E9;
    box-shadow: 0px 8.17794px 23.1708px rgba(0, 0, 0, 0.02);
    border-radius: 12.2669px;
    max-width: 390px;
    width: 100%;
    color: #BEBEBE;
    margin: 0 auto 30px;
    padding: 28px 25px;

    &__title {
      font-size: 16px;
      text-align: center;
      margin-bottom: 15px;
    }

    &__block {
      display: flex;
      justify-content: space-between;
    }

    &__inputs {
      max-width: 290px;
      width: 100%;
    }

    &__qr {
      height: 33px;
    }

    &__img {
      margin-right: 20px;
      flex-shrink: 0;
      img {
        flex-shrink: 0;
      }
    }
  }
</style>