import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    raider: [
      {
        title: "Общая площадь зала 800 м2",
        additional: []
      },
      {
        title: "Мобильная сцена 8х6 метров",
        additional: []
      },
      {
        title: "Светодиодный экран 6х4 метра",
        additional: []
      },
      {
        title: "Общая площадь зала 800 м2",
        additional: []
      },
      {
        title: "Мобильная сцена 8х6 метров",
        additional: []
      },
      {
        title: "Светодиодный экран 6х4 метра",
        additional: []
      },
      {
        title: "Современное световое оборудование",
        additional: [
          "Led bar - 60 шт.",
          "Led панель - 17 шт.",
          "Led martix 4x4 - 4 шт.",
          "Led martix 3x3 - 4 шт.",
          "Led par 18x10 - 16 шт.",
          "Moving head wash - 16 шт.",
          "Moving head beam 14x10 - 6 шт.",
          "Moving head wash 36x5 - 8 шт.",
          "Beam Spot 2 R - 8 шт.",
          "Генератор дыма - 2 шт.",
          "Генератор тумана - 2 шт."
        ]
      },
      {
        title: "Райдерное звуковое оборудование",
        additional: [
          "JBL VTX V20 - 6 шт.",
          "JBL VTX S25 - 4 шт.",
          "JBL VTX M20 - 6 шт.",
          "Микшерный пульт Soundcraft Vi2000 - 1 шт.",
          "Микрофонный парк - AKG, Sennheiser."
        ]
      },
      {
        title: "Наличие бэклайна, способного удовлетворить потребности райдера «звезд» первой величины.",
        additional: []
      },
      {
        title: "Лаунж-зона с панорамными окнами в зал до 30 человек",
        additional: []
      },
      {
        title: "В стоимость аренды входит также работа технического персонала: ",
        additional: [
          "1. Администратор площадки.",
          "2. Звукорежиссер.",
          "3. Светорежиссер.",
          "4. Видео режиссер.",
          "5. Клининг площадки.",
          "6. Бесплатная парковка до 20 автомобилей.",
          "7. Гардероб на 400 мест.",
          "8. Гардеробщик."
        ]
      }
    ],
    images: [
      {
        img: [
          '1-1-min-raider.jpg',
          '1-2-min-raider.jpg',
          '1-4-min-raider.jpg',
          '1-5-min-raider.jpg'
        ]
      },
      {
        img: [
          '1-6-min-raider.jpg',
          '1-7-min-raider.jpg',
          '1-3-min-raider.jpg',
        ]
      },
      {
        img: [
          '1-8-min-raider.jpg',
          '1-10-min-raider.jpg',
          '1-9-min-raider.jpg',
        ]
      }
    ],
    events: {
      concert: {
        title: 'ONLINE-Концерты',
        description: '<p>Мы проводим online-концерты в рамках проекта <strong>Karantin. Live.</strong></p>' +
            '<p>Наше техническое оснащение позволяет проводить online-концерты любого формата и любой технической сложности. Мы также осуществляем съемку видео-контента.</p>' +
            '<p>Максимальная вместимость &mdash; 800 человек.</p>' +
            '<p>Техническое наполнение площадки &mdash; это show room компании <strong>«Яровит»</strong>, которая является крупнейшим дистрибьютором профессионального оборудования для концертных шоу и крупных мероприятий.</p>',
        images: [
          {
            group: ['1', '2', '3', '4']
          },
          {
            group: ['5', '6', '7', '8']
          },
          {
            group: ['9', '10', '11']
          }
        ]
      },
      corporate: {
        title: 'Корпоративные мероприятия',
        description: '<p>В <strong>ЯРОВИТ ХОЛЛ</strong> возможна организация следующих форматов корпоративных мероприятий:</p>' +
            '<p><strong>БАНКЕТЫ</strong> &mdash; в нашем зале можно комфортно разместить банкетной рассадкой до 300 человек;</p>' +
            '<p><strong>ФУРШЕТЫ</strong> &mdash; оптимальное количество гостей до 400 человек.</p>' +
            '<p><small>* В стоимость помещения включено обслуживание, текстиль и мебель.</small></p>' +
            '<p>Средний чек банкета &mdash; 4000 руб./чел.</p>' +
            '<p>Фуршет &mdash; от 2500 руб./чел.</p>' +
            '<p>Кофебрейк &mdash; от 350 руб./чел.</p>' +
            '<p>Пробковый сбор &mdash; 150 руб./чел.</p>' +
            '<p>Наша профессиональная команда поможет вам организовать корпоративное мероприятие на высоком уровне с учетом всех пожеланий и технических возможностей площадки.</p>',
        images: [
          {
            group: ['1', '2', '3']
          },
          {
            group: ['4', '5', '6']
          },
          {
            group: ['7', '8', '9']
          },
          {
            group: ['10', '11']
          },
          {
            group: ['12', '13']
          },
          {
            group: ['14', '15']
          }
        ]
      },
      conference: {
        title: 'ONLINE-конференции',
        description: '<p>В <strong>ЯРОВИТ ХОЛЛ</strong> возможно проведение конференций, обучающих семинаров и лекций, презентаций, конгрессов как оффлайн, так и онлайн.</p>' +
            '<p>Удобное местоположение и развитая инфраструктура позволяет проводить подобные мероприятия на самом высоком уровне.</p>' +
            '<p>Вместимость &mdash; до 500 человек с зоной для кофе-брейка.</p>',
        images: [
          {
            group: ['1', '2']
          },
          {
            group: ['3', '4']
          },
          {
            group: ['5']
          }
        ]
      }
    },
    gallery: [
      {
        group: [1,2,3,4]
      },
      {
        group: [5,6,7,8]
      },
      {
        group: [9,10,11,12]
      },
      {
        group: [13,14,15,16]
      },
      {
        group: [17,18,19,20]
      },
      {
        group: [21,22,23,24]
      },
      {
        group: [25,26,27,28]
      },
      {
        group: [29,30,31,32,33]
      },
      {
        group: [34,35,36,37,38]
      }
    ]
  },
  mutations: {
    loading(state, data) {
      state.loading = data;
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    raider(state) {
      return state.raider;
    },
    images(state) {
      return state.images;
    },
    event(state) {
      return state.events;
    },
    gallery(state) {
      return state.gallery;
    }
  }
})
