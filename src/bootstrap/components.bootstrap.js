import Vue from "vue";
import NavbarComponent from "../components/NavbarComponent";
import HomepageCarouselComponent from "../components/HomepageCarouselComponent";
import RaiderComponent from "../components/RaiderComponent";
import ContactsComponent from "../components/ContactsComponent";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import BackButtonComponent from "../components/BackButtonComponent";
import LoadingScreenComponent from "../components/LoadingScreenComponent";
import BrandComponent from "../components/BrandComponent";
import MapModal from "../components/MapModal";

Vue.component('navbar-component', NavbarComponent);
Vue.component('homepage-carousel-component', HomepageCarouselComponent);
Vue.component('raider-component', RaiderComponent);
Vue.component('contacts-component', ContactsComponent);
Vue.component('yandex-map', yandexMap);
Vue.component('ymap-marker', ymapMarker);
Vue.component('back-button-component', BackButtonComponent);
Vue.component('loading-screen-component', LoadingScreenComponent);
Vue.component('brand-component', BrandComponent);
Vue.component('map-modal', MapModal);
