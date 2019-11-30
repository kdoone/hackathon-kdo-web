<template>
  <div class="card">
    <div class="card__title" :title="title">{{ title }}</div>
    <slot />
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
    max-width: 449px;
    width: 100%;
    color: #BEBEBE;
    margin: 0 auto;

    &__title {
      font-size: 18px;
      text-align: center;
    }
  }
</style>