<template lang="pug">
    b-row#contact.m-0.p-0
        b-col.m-0.p-0.yarovit_contact-map( cols="12" xl="5" )
            yandex-map( :controls="[]" :coords="[55.815494, 37.686743]" :zoom="16" )
                ymap-marker( marker-id="marker-1" :coords="[55.815494, 37.686743]" :icon="markerIcon" )
        b-col.m-0.yarovit_contact-description( cols="12" xl="7" )
            p.h2.text-uppercase наши контакты
            p.h5.text-uppercase.my-2 Контактные телефоны:
            a.yarovit_contact-phone( href="tel:+79779849489" )
                font-awesome-icon( :icon="['fas', 'phone']" )
                span.ml-3 +7 (977) 984-94-89
            a.yarovit_contact-phone( href="https://wa.me/79265235985" )
                font-awesome-icon( :icon="['fab', 'whatsapp']" )
                span.ml-3 +7 (926) 523-59-85
            p.h5.text-uppercase.my-2 E-mail:
            a.yarovit_contact-email( href="mailto:info@yarovit-hall.ru" )
                font-awesome-icon( :icon="['fas', 'envelope']" )
                span.ml-3 info@yarovit-hall.ru
            p.h5.text-uppercase.my-2 Адрес:
            p.yarovit_contact-address.text-center
                font-awesome-icon( :icon="['fas', 'map-marker']" )
                span.ml-3 г. Москва, ул. Краснобогатырская,
                br
                span д. 2, строение 21-22
            button.yarovit_show-map.shadow( @click="$bvModal.show('map-modal')" v-if="isMobile"  type="button")
                font-awesome-icon( :icon="['fas', 'map-marker']" )
</template>

<script>
    import { isMobile } from 'mobile-device-detect';
    export default {
        name: "ContactsComponent",
        data() {
            return {
                isMobile: isMobile,
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

<style scoped>

</style>
