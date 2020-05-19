<template lang="pug">
    b-modal#map-modal( hide-footer centered)
        template( v-slot:modal-header )
            b-row.m-0.p-0.w-100
                b-col.ml-auto.text-right( cols="4" )
                    button.text-white( type="button" @click="$bvModal.hide('map-modal')")
                        font-awesome-icon( :icon="['fas', 'times']" )
        b-row#map-modal-map.m-0.p-0
            b-col.m-0.p-0.yarovit_modal-map( cols="12" )
                yandex-map( :controls="[]" :coords="[55.815494, 37.686743]" :zoom="16" )
                    ymap-marker( marker-id="marker-2" :coords="[55.815494, 37.686743]" :icon="markerIcon" )
</template>

<script>
    export default {
        name: "MapModal",
        data() {
            return {
                markerIcon: {
                    layout: 'default#imageWithContent',
                    imageHref: './img/logo.png',
                    imageSize: [120, 30],
                    imageOffset: [0, 0]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";
    #map-modal {
        & button {
            background: none!important;
            border: none!important;
            position: absolute;
            top: -3rem;
            right: - 0.3rem;
            color: #fff;
            font-size: 32px;
            &:focus {
                box-shadow: none!important;
                outline: none!important;
            }
        }
        & #{$prefix}_modal-map {
            display: block;
            min-height: 320px;
            & .ymap-container {
                height: 100%;
            }
        }
    }
</style>
