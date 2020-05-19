<template lang="pug">
    .yarovit_loading-screen
        p ЯРОВИТ ХОЛЛ | СОКОЛЬНИКИ
</template>

<script>
    export default {
        name: "LoadingScreenComponent"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";
    #{$prefix}_loading-screen {
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2d3999;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        & p {
            font-size: 2.5rem;
            @media (max-width: 1199px) {
                font-size: 1.4rem;
            }
        }
    }
</style>
