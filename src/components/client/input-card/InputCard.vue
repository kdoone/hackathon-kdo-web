<template>
    <div class="input-div">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="scss">
.input-div {
    margin-bottom: 20px;
    width: 100%;
    &.last {
      margin-bottom: 0;
    }
}

.input,
.textarea {
    outline: none;
    font-size: 15px;
    font-weight: normal;
    line-height: inherit;
    background: #EEF4F2;
    color: #B5B5B5;
    border-radius: 4.08897px;
    border: 1px solid #EEF4F2;
    padding: 5px 5px 5px 15px;
    max-width: 330px;
    width: 100%;
    flex-grow: 1;
    position: relative;

    &--min {
      max-width: 150px;
    }

    &--big {
      max-width: 390px;
      padding: 10px 25px;
      background: #fff;
    }

    &:focus,
    &:hover {
      border: 1px solid #B6F6F0;
    }
        

    &::-webkit-input-placeholder {
        color: #B5B5B5;
        font-weight: normal;
        opacity: 1;
    }

    &::-moz-placeholder {
        color: #B5B5B5;
        font-weight: normal;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #B5B5B5;
        font-weight: normal;
        opacity: 1;
    }
}

</style>
