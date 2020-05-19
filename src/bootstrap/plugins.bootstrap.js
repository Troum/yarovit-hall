import Vue from "vue";
import {ButtonPlugin, CardPlugin,
    CarouselPlugin,
    CollapsePlugin,
    FormPlugin, FormGroupPlugin,
    FormInputPlugin, NavbarPlugin, NavPlugin, SidebarPlugin,
    ListGroupPlugin, LayoutPlugin, ModalPlugin, InputGroupPlugin } from "bootstrap-vue";
import YmapPlugin from 'vue-yandex-maps';
import VueLazyload from "vue-lazyload";

let VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo, {
    container: "body",
    duration: 800,
    easing: "ease",
    offset: -102,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
Vue.use(YmapPlugin, {
    apiKey: 'be8a9cfb-4a15-490d-ac82-631e8fc82d24',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
});
Vue.use(VueLazyload, {
    observer: true,
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
    },
    preLoad: 1.3,
    attempt: 1
})
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(ListGroupPlugin);
Vue.use(InputGroupPlugin);
Vue.use(CollapsePlugin);
Vue.use(CarouselPlugin);
Vue.use(SidebarPlugin);
