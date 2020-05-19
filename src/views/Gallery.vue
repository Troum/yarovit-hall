<template lang="pug">
    b-row#gallery.m-0.p-0
        b-col.yarovit_gallery-images( cols="12" v-lazy-container="{ selector: 'img' }")
            .column( v-for="group in $store.getters.gallery")
                img.img-fluid(
                    v-for="image in group.group"
                    @click="openViewer(image)"
                    :id="`gallery_${image}_image`"
                    :data-src="`../img/gallery/${image}.jpg`")
            back-button-component( :show="false" )
</template>

<script>
    import Viewer from "viewerjs";
    export default {
        name: "Gallery",
        methods: {
            openViewer(index) {
                const viewer = new Viewer(document.getElementById(`gallery_${index}_image`), {
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
                        viewer.zoomTo(0.43);
                    },
                });
                viewer.show()
            }
        }
    }
</script>

<style scoped>

</style>
