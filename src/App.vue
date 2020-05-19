<template lang="pug">
    b-container#app.m-0.p-0( fluid )
        b-row.m-0.p-0
            b-col.m-0.p-0( cols="12" )
                navbar-component
            b-col.m-0.p-0#main( cols="12" )
                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                    router-view
        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
            loading-screen-component( v-if="$store.getters.loading" )
        map-modal
</template>
<script>
    export default {
    }
</script>
