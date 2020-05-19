<template lang="pug">
    b-row.m-0.p-0
        b-col#event.m-0.p-0( cols="12" )
            b-sidebar#sidebar.yarovit_sidebar(
                :shadow="true"
                right
                v-model="open" )
                template( v-slot:header-close )
                    font-awesome-icon.text-white.font-weight-light( :icon="['fas', 'times']" @click="open = false" )
                template( v-slot:title )
                    .ml-3
                        p.h5.pt-5 {{ eventData.title }}
                b-row
                    b-col.mx-auto( cols="11" )
                        .mt-5( v-html="eventData.description" )
            b-row.m-0.p-0
                b-col.yarovit_event-images( cols="12" v-lazy-container="{ selector: 'img' }" )
                    .column( v-for="image in eventData.images")
                        img.img-fluid( v-for="item in image.group"
                            @click="openViewer(item)"
                            :id="`event_${item}_image`"
                            :data-src="`../img/${$route.params.event}/${item}.jpg`")
        back-button-component( :show="open" )
        button.yarovit_event-show-sidebar.shadow( @click="open = true" v-if="!open" type="button")
            font-awesome-icon( :icon="['fas', 'plus']" )
</template>

<script>
    import Viewer from "viewerjs";
    export default {
        name: "Event",
        data() {
          return {
              eventData: {},
              open: true
          }
        },
        mounted() {
            this.eventData = this.$store.getters.event[this.$route.params.event];
        },
        methods: {
            openViewer(index) {
                const viewer = new Viewer(document.getElementById(`event_${index}_image`), {
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
                        viewer.zoomTo(0.7);
                    },
                });
                viewer.show()
            }
        }
    }
</script>

<style scoped>

</style>
