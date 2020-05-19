<template lang="pug">
    b-navbar#navbar.yarovit_navbar.shadow( toggleable="lg" type="dark" fixed="top" )
        button.yarovit_toggle( v-if="isMobile" type="button" @click="show = !show")
            font-awesome-icon( :icon="['fas', 'bars']" v-if="!show")
            font-awesome-icon( :icon="['fas', 'times']" v-else)
        b-navbar-nav.w-25( v-if="!isMobile" )
            b-nav-item.yarovit_social-icon( @click="openPage('https://www.facebook.com/yarovithall/')" )
                font-awesome-icon( :icon="['fab', 'facebook-f']" )
            b-nav-item.yarovit_social-icon( @click="openPage('https://www.instagram.com/yarovithall/')" )
                font-awesome-icon( :icon="['fab', 'instagram']" )
        brand-component( :class="isMobile ? 'w-75 mx-auto' : 'w-50'" )
        b-navbar-nav.ml-auto( v-if="isMobile" )
            b-nav-item.yarovit_social-icon.mb-0( @click="openPage('https://www.facebook.com/yarovithall/')" )
                font-awesome-icon( :icon="['fab', 'facebook-f']" )
            b-nav-item.yarovit_social-icon.mb-0( @click="openPage('https://www.instagram.com/yarovithall/')" )
                font-awesome-icon( :icon="['fab', 'instagram']" )
        b-navbar-nav.w-25.d-xl-inline-flex.justify-content-end( v-if="!isMobile" )
            b-nav-item.yarovit_nav-item( @click="routeTo('raider-container')") Райдер
            b-nav-item.yarovit_nav-item( @click="routeTo('contact-container')" ) Контакты
            b-nav-item.yarovit_nav-item( @click="$router.push({name: 'gallery'}).catch(() => {})" ) галерея
        b-sidebar#sidebar-menu.yarovit_sidebar( v-if="isMobile"
            no-header-close
            :shadow="true"
            width="100vw"
            left
            v-model="show" )
            b-row.m-0.p-0
                b-col.mx-auto.mt-2.p-0( cols="11" )
                    b-row.m-0.p-0
                        b-col.mx-auto( cols="8" )
                            brand-component
                    b-navbar-nav.mx-auto.my-5.d-xl-inline-flex.justify-content-center.p-0
                        b-nav-item.yarovit_nav-item( @click="show = !show;routeTo('raider-container')") Райдер
                        b-nav-item.yarovit_nav-item( @click="show = !show;routeTo('contact-container')" ) Контакты
                        b-nav-item.yarovit_nav-item( @click="show = !show;$router.push({name: 'gallery'})" ) галерея
</template>

<script>
    import { isMobile } from 'mobile-device-detect';
    export default {
        name: "NavbarComponent",
        data() {
          return {
              isMobile: isMobile,
              show: false
          }
        },
        methods: {
            routeTo(id) {
                if (this.$route.name !== 'home') {
                    this.$router.push({name: 'home'});
                    this.$root.$emit('scroll-to', id);
                } else {
                    this.$scrollTo(`#${id}`)
                }
            },
            openPage(link) {
                window.location.replace(link, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
