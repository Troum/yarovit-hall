<template lang="pug">
    b-row#raider.m-0.p-0
        b-col.m-0.yarovit_raider-description( cols="12" xl="5" )
            p.h3.text-white.font-weight-bold.text-uppercase.text-center Технический райдер
            ul.yarovit_raider-list
                li( v-for="(item, i) in $store.getters.raider" :key="i" ) &nbsp;{{ item.title }}
                    template( v-if="item.additional" )
                        ul.yarovit_raider-list.additional
                            li( v-for="item in item.additional" :key="item" ) &nbsp;{{ item }}
                li.last
                    small &nbsp;Технический райдер всегда согласовывается с каждым клиентом индивидуально.
        b-col.m-0.yarovit_raider-images( cols="12" xl="7")
            .column( v-for="item in $store.getters.images" )
                img.img-fluid(
                            v-for="(image, i) in item.img"
                            :id="`raider_image_${image}`"
                            @click="openViewer(image)"
                            :src="`./img/raider/${image}`" :alt="image" )
</template>

<script>
    import Viewer from "viewerjs";
    export default {
        name: "RaiderComponent",
        methods: {
            openViewer(index) {
                const viewer = new Viewer(document.getElementById(`raider_image_${index}`), {
                    inline: false,
                    toolbar: {
                        zoomIn: 4,
                        zoomOut: 4,
                        oneToOne: 4,
                        reset: 1,
                        prev: 0,
                        play: 0,
                        next: 0,
                        rotateLeft: 1,
                        rotateRight: 1,
                        flipHorizontal: 1,
                        flipVertical: 1,
                    },
                    viewed() {
                        viewer.zoomTo(0.3);
                    },
                });
                viewer.show()
            }
        }
    }
</script>

<style scoped>

</style>
