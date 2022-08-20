import { createSlice } from "@reduxjs/toolkit";
import behefist1 from "../../assets/behefits/1.png";
import behefist2 from "../../assets/behefits/2.png";
import behefist3 from "../../assets/behefits/3.png";
import behefist4 from "../../assets/behefits/4.png";
import behefist5 from "../../assets/behefits/5.png";
import behefist6 from "../../assets/behefits/6.png";
import behefist7 from "../../assets/behefits/7.png";
import behefist8 from "../../assets/behefits/8.png";
const initialState = {
  mainContent: {
    banner: {
      title: "АгрегатЕКБ",
      subtitle: "Запчасти для грузовиков и спецтехники",
      text: "«БелАК» — группа компаний, основной деятельностью которой является производство и сбыт высококачественных автозапчастей, аксессуаров и инструментов, преимущественно для грузовых автомобилей.",
    },
  },
  benefits: [
    {
      id: 1,
      icon: behefist1,
      title: "Качество",
      text: "Каждое изделие проходит строгий контроль качества на производстве",
    },
    {
      id: 2,
      icon: behefist2,
      title: "Гарантии",
      text: "На каждое изделие мы даем гарантию",
    },
    {
      id: 3,
      icon: behefist3,
      title: "Надежность",
      text: "При изготовлении используются передовые высокопрочные материалы",
    },
    {
      id: 4,
      icon: behefist4,
      title: "Новинки",
      text: "Мы постоянно расширяем перечень выпускаемых товаров",
    },
    {
      id: 5,
      icon: behefist5,
      title: "Технологические инновации",
      text: "Конструкторские бюро проводят усовершенствования технологий изготовления",
    },
    {
      id: 6,
      icon: behefist6,
      title: "Современное производство",
      text: "Все автокомпоненты производятся на современном высокоточном оборудованииы",
    },
    {
      id: 7,
      icon: behefist7,
      title: "Доступная цена",
      text: "Мы придерживаемся гибкой и демократичной ценовой политики",
    },
    {
      id: 8,
      icon: behefist8,
      title: "Соотвествие ГОСТу",
      text: "Наши товары соответствуют ГОСТ, а производство сертифицировано",
    },
  ],
  isLoading: false,
  error: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export default mainSlice.reducer;
