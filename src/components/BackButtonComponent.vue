<template lang="pug">
    button.yarovit_back-button.shadow( @click="$router.push({name: 'home'})" v-if="!show" type="button")
        font-awesome-icon( :icon="['fas', 'arrow-left']" )
</template>

<script>
    export default {
        name: "BackButtonComponent",
        props: {
            show: Boolean
        }
    }
</script>

<style lang="scss" scoped>
@import "../scss/variables";
    #{$prefix}_back-button {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3532a7;
        color: #fff;
        top: 15%;
        left: 2.5%;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
</style>
