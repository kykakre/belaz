import {Api} from "./api.js";

export const GetSpecializationTypes = async()=>{
    const response = await Api.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializationsTypes",
        {"RequestData": {}});
    return response.data.ResponseData.ListOfSpecializationsTypes;
}

export const GetPopularsProducts = () => {
    return Api.get("api/products/GetPopulars").then((response) => {
        return response.data;
    });
};