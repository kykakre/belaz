import {Api} from "./api.js";

export const GetNews = async(page,limit,year) => {
    return await Api.get("api/news?pagination[page]="+page+"&pagination[limit]="+limit+"&filter[year]="+year,
        {"RequestData": {}})
        .then((response) => {

            return response.data;
        });
};
export const GetNewsDetail = async(id) => {
    return await Api.get("api/news/"+id,
        {"RequestData": {}})
        .then((response) => {

            return response.data;
        });
};