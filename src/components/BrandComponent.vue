<template lang="pug">
    b-navbar-brand( @click="$router.push({name: 'home'}).catch(() => {}); $scrollTo('#navbar')" )
        b-row.mx-auto.p-0( :class="isMobile ? 'w-100' : 'w-25'" )
            b-col.ml-auto.yarovit_brand.border-right( cols="6" )
                b-row.m-0.p-0
                    b-col.text-uppercase.text-right.p-0( cols="12" )
                        p яровит
                    b-col.text-uppercase.text-right.p-0( cols="12" )
                        p холл
            b-col.mr-auto.yarovit_brand.border-left( cols="6" )
                b-row.m-0.p-0
                    b-col.text-uppercase.text-left.p-0( cols="12" )
                        p сокольники
</template>

<script>
    import { isMobile } from 'mobile-device-detect';
    export default {
        name: "BrandComponent",
        data() {
            return {
                isMobile: isMobile
            }
        }
    }
</script>

<style scoped>

</style>
