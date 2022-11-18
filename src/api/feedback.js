import { Api } from "./api.js";

export const PostFeedback = async (name, phone, email, message) => {
  const response = await Api.post("/api/feedback/", {
    RequestData: {
      name: name,
      phone: phone,
      email: email,
      message: message,
    },
  });
  return response.data;
};
