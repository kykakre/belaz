import { createSlice } from "@reduxjs/toolkit";
import product from "../../assets/product.svg";
const initialState = {
    popular: [
        {
            id:1,
            special:true,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:2,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:3,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:4,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:5,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:6,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:7,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:8,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:9,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:10,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:11,
            special:true,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:12,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:13,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:14,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:15,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:16,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:17,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:18,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:19,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },
        {
            id:20,
            special:false,
            img:product,
            title:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            grabe:5.0,
            totalGrabe:14,
            price:1924,

        },


    ],
    isLoading: false,
    error: "",
};

export const populartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export default populartSlice.reducer;