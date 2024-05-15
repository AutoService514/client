import { makeAutoObservable } from "mobx";
import id1 from "../img/id1.jpg";
import id2 from "../img/id2.jpg";
import id3 from "../img/id3.jpg";
import id4 from "../img/id4.jpg";
import id5 from "../img/id5.jpg";
import id6 from "../img/id6.jpg";
import id7 from "../img/id7.jpg";
import id8 from "../img/id8.jpg";
import id9 from "../img/id9.jpg";
import id10 from "../img/id10.jpg";
import id11 from "../img/id11.jpg";
import id12 from "../img/id12.jpg";
import id13 from "../img/id13.jpg";
import id14 from "../img/id14.jpg";
import id15 from "../img/id15.jpg";
import id16 from "../img/id16.jpg";
import id17 from "../img/id17.jpg";
import id18 from "../img/id18.jpg";
import id19 from "../img/id19.jpg";
import id20 from "../img/id20.jpg";
import id21 from "../img/id21.jpg";
import id22 from "../img/id22.jpg";

export default class ServiceMarket {
  constructor() {
    this._types = [
      { id: 1, title: "Мийка автомобіля" },
      { id: 2, title: "Ремонт та обслуговування" },
      { id: 3, title: "Обслуговування шин" },
      { id: 4, title: "Електричні роботи" },
      { id: 5, title: "Кузовні роботи" },
      { id: 6, title: "Обслуговування двигуна" },
    ];
    this._services = [
      //washing
      {
        id: 1,
        title: "Швидка мийка (зовнішня чистка)",
        price: 300,
        typeId: 1,
        description:
          "Швидко та якісно видаляє бруд і забруднення з зовнішньої поверхні автомобіля.",
        // img: require("../img/id1.jpg").default,
        imgSrc: id1,
      },
      {
        id: 2,
        title: "Повна мийка автомобіля (зовнішня та внутрішня)",
        price: 500,
        typeId: 1,
        description:
          "Комплексне миття автомобіля з якісною очисткою зовнішньої та внутрішньої частини.",
        imgSrc: id2,
      },
      {
        id: 3,
        title: "Хімчистка салону автомобіля",
        price: 200,
        typeId: 1,
        description:
          "Професійна хімчистка салону автомобіля з видаленням плям і неприємних запахів.",
        imgSrc: id3,
      },
      {
        id: 4,
        title: "Діагностика двигуна",
        price: 1300,
        typeId: 2,
        description:
          "Повна перевірка роботи двигуна та виявлення можливих несправностей.",
        imgSrc: id4,
      },
      {
        id: 5,
        title: "Ремонт гальмівної системи",
        price: 1500,
        typeId: 2,
        description:
          "Професійний ремонт та налагодження гальмівної системи для безпеки на дорозі.",
        imgSrc: id5,
      },
      {
        id: 6,
        title: "Ремонт та заміна амортизаторів",
        price: 1200,
        typeId: 2,
        description:
          "Заміна зношених амортизаторів та ремонт системи підвіски для комфортної їзди.",
        imgSrc: id6,
      },
      {
        id: 7,
        title: "Виправлення дрібних ушкоджень кузова",
        price: 1300,
        typeId: 2,
        description:
          "Косметичний ремонт та виправлення невеликих пошкоджень кузова автомобіля.",
        imgSrc: id7,
      },
      {
        id: 8,
        title: "Заміна мастила та фільтрів",
        price: 1500,
        typeId: 3,
        description:
          "Регулярне технічне обслуговування двигуна заміною мастила та фільтрів.",
        imgSrc: id8,
      },
      {
        id: 9,
        title: "Заміна шин та балансування шин",
        price: 1000,
        typeId: 3,
        description:
          "Заміна зношених шин та балансування коліс для комфортної їзди.",
        imgSrc: id9,
      },
      {
        id: 10,
        title: "Ремонт проколів",
        price: 1500,
        typeId: 3,
        description:
          "Швидкий та якісний ремонт проколів для уникнення проблем на дорозі.",
        imgSrc: id10,
      },
      {
        id: 11,
        title: "Перевірка тиску в шинах",
        price: 1200,
        typeId: 3,
        description:
          "Регулярна перевірка тиску в шинах для забезпечення безпеки та тривалості служби шин.",
        imgSrc: id11,
      },
      {
        id: 12,
        title: "Заміна зношених шин",
        price: 1300,
        typeId: 3,
        description:
          "Заміна старих та зношених шин на нові, що відповідають потребам вашого автомобіля.",
        imgSrc: id12,
      },
      {
        id: 13,
        title: "Діагностика та ремонт електропроводки",
        price: 1500,
        typeId: 4,
        description:
          "Повна перевірка та ремонт електропроводки для забезпечення стабільної роботи всіх електричних систем.",
        imgSrc: id13,
      },
      {
        id: 14,
        title: "Встановлення та налаштування автомобільної сигналізації",
        price: 1200,
        typeId: 4,
        description:
          "Професійне встановлення та налаштування сучасних систем автомобільної сигналізації.",
        imgSrc: id14,
      },
      {
        id: 15,
        title: "Встановлення системи відеоспостереження",
        price: 1300,
        typeId: 4,
        description:
          "Встановлення відеоспостереження для забезпечення безпеки вашого автомобіля.",
        imgSrc: id15,
      },
      {
        id: 16,
        title: "Заміна та обслуговування акумулятора",
        price: 1500,
        typeId: 4,
        description:
          "Заміна старого акумулятора на новий та його обслуговування для надійної роботи електричної системи.",
        imgSrc: id16,
      },
      {
        id: 17,
        title: "Покраска автомобіля",
        price: 1000,
        typeId: 5,
        description:
          "Комплексна покраска автомобіля для відновлення його зовнішнього вигляду.",
        imgSrc: id17,
      },
      {
        id: 18,
        title: "Реставрація кузова після ДТП",
        price: 1500,
        typeId: 5,
        description:
          "Ремонт та відновлення кузова автомобіля після дорожньо-транспортної пригоди.",
        imgSrc: id18,
      },
      {
        id: 19,
        title: "Встановлення та ремонт бамперів",
        price: 1200,
        typeId: 5,
        description:
          "Встановлення нових бамперів або ремонт старих для відновлення естетики автомобіля.",
        imgSrc: id19,
      },
      {
        id: 20,
        title: "Ремонт та заміна масла",
        price: 1300,
        typeId: 6,
        description:
          "Регулярний технічний обслуговування двигуна заміною мастила для забезпечення його надійної роботи.",
        imgSrc: id20,
      },
      {
        id: 21,
        title: "Заміна поршнів",
        price: 1500,
        typeId: 6,
        description:
          "Заміна старих та зношених поршнів на нові для підвищення продуктивності двигуна.",
        imgSrc: id21,
      },
      {
        id: 22,
        title: "Заміна підшипників",
        price: 1200,
        typeId: 6,
        description:
          "Заміна зношених підшипників на нові для забезпечення стабільної роботи всіх важливих вузлів.",
        imgSrc: id22,
      },
    ];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setServices(services) {
    this._services = services;
  }
  getTypes() {
    return this._types;
  }
  getServices() {
    return this._services;
  }
}
