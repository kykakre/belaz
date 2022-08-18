import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainContent: {
        banner:{
            title:"АгрегатЕКБ",
            subtitle:'Запчасти для грузовиков и спецтехники',
            text:'«БелАК» — группа компаний, основной деятельностью которой является производство и сбыт высококачественных автозапчастей, аксессуаров и инструментов, преимущественно для грузовых автомобилей.',
        },
    },
    isLoading: false,
    error: "",
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
});

export default mainSlice.reducer;