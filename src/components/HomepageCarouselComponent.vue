<template lang="pug">
    b-carousel#homepage-carousel(
        :interval="4000"
        indicators
        fade
        controls
        :img-width="imgWidth"
        :img-height="imgHeight"
    )
        b-carousel-slide(
            caption="КОРПОРАТИВНЫЕ МЕРОПРИЯТИЯ"
        )
            template( v-slot:img )
                #corporate.d-block.position-relative.w-100
                    .mask
        b-carousel-slide(
            caption="ONLINE-КОНФЕРЕНЦИИ"
        )
            template( v-slot:img )
                #conference.d-block.position-relative.w-100
                    .mask
        b-carousel-slide(
            caption="ONLINE-КОНЦЕРТЫ"
        )
            template( v-slot:img )
                #concert.d-block.position-relative.w-100
                    .mask
</template>

<script>
    import router from "../router"
    export default {
        name: "HomepageCarouselComponent",
        data() {
            const size = [window.innerWidth, window.innerHeight]
            return {
                imgWidth: size[0],
                imgHeight: size[1],
                canvases: [
                    {
                        id: 'conference',
                        event: 'conference',
                        src: './img/carousel/conference.jpg'
                    },
                    {
                        id: 'concert',
                        event: 'concert',
                        src: './img/carousel/concert.jpg'
                    },
                    {
                        id: 'corporate',
                        event: 'corporate',
                        src: './img/carousel/corporate.jpg'
                    }
                ]
            }
        },
        mounted() {
            this.canvases.forEach((item) => {
                this.setBackground(item.id, item.src, item.event);
            });
        },
        methods: {
            setBackground(id, src, route) {
                const slide = document.getElementById(id);
                slide.style.width = `${this.imgWidth}px`;
                slide.style.height = `calc(100vh - 102px)`;
                slide.style.marginTop = `102px`;
                slide.style.backgroundSize = 'contain';
                slide.style.background = `url(${src}) center center no-repeat`;
                slide.closest('.carousel-item').querySelector('.carousel-caption').querySelector('h3').addEventListener('click', function () {
                    router.push({name: 'event', params: {event: route}})
                })
            }
        }
    }
</script>

<style scoped>

</style>
