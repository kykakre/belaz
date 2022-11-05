import {Api} from "./api.js";

export const AddProductsBasket = async(productId,count)=>{
    const response = await Api.put("/api/basket/"+productId,
        {"RequestData": {count:1}});
    return response.data;
}

export const DeleteProductsBasket = async(productId)=>{
    const response = await Api.delete("/api/basket/"+productId,
        {"RequestData": {}});
    return response.data;
}

export const ChangeProductsBasket = async(productId,count)=>{
    const response = await Api.patch("/api/basket/"+productId,
        {"RequestData": {count:1}});
    return response.data;
}

export const AllProductsBasket = async()=>{
    const response = await Api.get("/api/basket/",
        {"RequestData": {}});
    return response.data;
}