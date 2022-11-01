import {Api} from "./api.js";

export const GetNews = () => {
    return Api.get("/News/GetNews").then((response) => {
        return response.data;
    });
};