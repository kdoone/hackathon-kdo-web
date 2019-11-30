<template>
    <div class="program">
        <h2 class="program__title">{{title}}</h2>
        <div class="program__block">
            <div class="program__text" :text1="text1"></div>
            <div class="program__text" :text2="text2"></div>
            <div class="program__text" :text3="text3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text1: {
            text1: String,
            default: "Ставка по займу: "
        },
        text2: {
            text2: String,
            default: "Срок займа: "
        },
        text3: {
            text3: String,
            default: "Минимальный первоначальный взнос:  "
        },
    }
}
</script>