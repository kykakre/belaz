import {Api} from "./api.js"

export const GetCategoryProducts = async(page,limit) => {
    return await Api.get("api/category?pagination[page]="+page+"&pagination[limit]="+limit,
        {"RequestData": {}}).then((response) => {

        return response.data.data;
    });
};


