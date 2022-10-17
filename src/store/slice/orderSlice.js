import { createSlice } from "@reduxjs/toolkit";
import product from "../../assets/product.svg";
const initialState = {
    orders: [
        {
            id:1,
            statusDelivery:"Передаем в доставку",
            dateDelivery:"30.08.2022",
            img:product,
            nameProduct:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            productOrder:1942,
            dateRegistration:"26 августа, 20:41",
            paymentState:"Оплачено",
            address:"Москва, площадь ленина, д1",
            receiverName:"Егор",
            receiverSurname:"Егоров",
            phoneNumber:"88005553535",
            addressDelivery:"Во вторник, 30 августа",
            deliveryService:"Почта России",
        },
        {
            id:2,
            statusDelivery:"Передаем в доставку",
            dateDelivery:"30.08.2022",
            img:product,
            nameProduct:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            productOrder:1942,
            dateRegistration:"26 августа, 20:41",
            paymentState:"Оплачено",
            address:"Москва, площадь ленина, д1",
            receiverName:"Егор",
            receiverSurname:"Егоров",
            phoneNumber:"88005553535",
            addressDelivery:"Во вторник, 30 августа",
            deliveryService:"Почта России",
        },
        {
            id:3,
            statusDelivery:"Передаем в доставку",
            dateDelivery:"30.08.2022",
            img:product,
            nameProduct:"Тормозная камера тип 30 (OEM № 203272900) BELAK",
            productOrder:1942,
            dateRegistration:"26 августа, 20:41",
            paymentState:"Оплачено",
            address:"Москва, площадь ленина, д1",
            receiverName:"Егор",
            receiverSurname:"Егоров",
            phoneNumber:"88005553535",
            addressDelivery:"Во вторник, 30 августа",
            deliveryService:"Почта России",
        }
    ],


    isLoading: false,
    error: "",
};

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
});

export default orderSlice.reducer;