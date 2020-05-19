import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEnvelope, faPhone, faTimes, faMapMarker, faPlus, faArrowLeft, faBars} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faEnvelope, faPhone, faMapMarker,
    faFacebookF, faInstagram, faWhatsapp, faTimes, faPlus, faArrowLeft, faBars);
