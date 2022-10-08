import { createSlice } from "@reduxjs/toolkit";
import adress from "../../assets/adress.svg"
import mail from "../../assets/mail.svg"
import phone from "../../assets/phone.svg"
import mode from "../../assets/mode.svg"
const initialState = {
    contacts:[
        {
            title:"Адрес",
            icon: adress,
            text:"г. Екатеринбург, улица Посадская, 16а, корпус И, помещение И-101\n" +
                "620012"

        },
        {
            title:"E-mail",
            icon:mail,
            text:"info@agregatekb.ru",
        },
        {
            title:"Телефон",
            icon:phone,
            text:"+7 (343) 287-57-32",
        },
        {
            title:"Время работы",
            icon:mode,
            text:"Пн – Пт: с 9:00 до 17:00",
        },

    ],
    isLoading: false,
    error: "",
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
});

export default contactsSlice.reducer;