import {Api} from "./api.js";

// export const GetSpecializationTypes = async()=>{
//     const response = await Api.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializationsTypes",
//         {"RequestData": {}});
//     return response.data.ResponseData.ListOfSpecializationsTypes;
// }

export const GetPopularsProducts = async(page,limit) => {
    return await Api.get("api/products",
        {"RequestData": {page:page,limit:limit,isPopular:true}}).then((response) => {
        console.log(response.data.data)
        return response.data.data;
    });
};

export const GetActualsProducts = async(page,limit) => {
    return await Api.get("api/products",
        {"RequestData": {page:page,limit:limit,isActual:true}}).then((response) => {
        console.log(response.data.data)

        return response.data.data;
    });
};

export const GetRecommendsProducts = async(page,limit) => {
    return await Api.get("api/products",
        {"RequestData": {page:page,limit:limit,isRecommend:true}})
        .then((response) => {
        console.log(response.data.data)

        return response.data.data;
    });
};

export const GetNewsProducts = async(page,limit) => {
    return await Api.get("api/products",
        {"RequestData": {page:page,limit:limit,isNew:true}}).then((response) => {
        console.log(response.data.data)

        return response.data.data;
    });
};
export const GetAvailablesProducts = async(page,limit) => {
    return await Api.get("api/products",
        {"RequestData": {page:page,limit:limit,isAvailable:true}}).then((response) => {
        console.log(response.data.data)

        return response.data.data;
    });
};


export const GetProductsAll = async(page,limit)=>{
    return await Api.get("api/products",
        {"RequestData":{page:page,limit:limit}}).then((response)=>{
            return response.data;
    })
}