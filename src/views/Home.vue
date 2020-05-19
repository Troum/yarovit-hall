<template lang="pug">
    b-row.m-0.p-0
        b-col.m-0.p-0( cols="12" )
            homepage-carousel-component
        b-col#raider-container.m-0.p-0( cols="12" )
            raider-component
        b-col#contact-container.m-0.p-0( cols="12" )
            contacts-component
</template>

<script>

    export default {
        name: 'Home',
        mounted() {
            this.$root.$on('scroll-to', (id) => {
                setTimeout(() => {
                    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'})
                }, 2500)
            })
        }
    }
</script>
