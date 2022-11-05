import {Api} from "./api.js";

export const AddProductsFavorite = async(productId)=>{
    const response = await Api.put("/api/favorite/"+productId,
        {"RequestData": {}});
    return response.data;
}
export const DeleteProductsFavorite = async(productId)=>{
    const response = await Api.delete("/api/favorite/"+productId,
        {"RequestData": {}});
    return response.data;
}
export const AllProductsFavorite = async(page,limit)=>{
    const response = await Api.get("/api/favorite/",
        {"RequestData": {page:page,limit:limit}});
    return response.data;
}