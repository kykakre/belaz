import { Api } from "./api.js";

export const GetAllHelp = async () => {
  const response = await Api.get("/api/texts/how-buy");
  return response.data;
};
