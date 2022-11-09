import {Api} from "./api.js";

// export const GetSpecializationTypes = async()=>{
//     const response = await Api.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializationsTypes",
//         {"RequestData": {}});
//     return response.data.ResponseData.ListOfSpecializationsTypes;
// }

export const GetPopularsProducts = async(page,limit) => {
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[isPopular]=true" ,
        {"RequestData": {}}).then((response) => {
        return response.data;
    });
};

export const GetActualsProducts = async(page,limit) => {
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[isActual]=true" ,
        {"RequestData": {}}).then((response) => {

        return response.data;
    });
};

export const GetRecommendsProducts = async(page,limit) => {
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[isRecommend]=true",
        {"RequestData": {}})
        .then((response) => {

        return response.data;
    });
};

export const GetNewsProducts = async(page,limit) => {
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[isNew]=true",
        {"RequestData": {}}).then((response) => {

        return response.data;
    });
};
export const GetAvailablesProducts = async(page,limit) => {
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[isAvailable]=true",
        {"RequestData": {}}).then((response) => {

        return response.data;
    });
};


export const GetProductsAll = async(page,limit)=>{
    return await Api.get("api/products?pagination[page]="+page+"&pagination[limit]="+limit,
        {"RequestData":{}}).then((response)=>{
            return response.data;
    })
}