<template>
    <div class="thanks">
        <div class="thanks__img">
            <img src="../../assets/img/thanks.png" alt="">
        </div>
        <h2 class="thanks__title">Ваша заявка на рассмотрении</h2>
        <div class="thanks__text">Менеджер банка свяжется с вами для завершения составления договора в ближайшее время.</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .thanks {
        height: 100vh;
        color: #21A4A3;
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        &__img {
            margin: 0 auto;
            text-align: center;
        }
        &__title {
            font-size: 28px;
            font-weight: bold;
            text-align: center;
        }
        &__text {
            font-size: 16px;
            text-align: center;
        }
    }
</style>