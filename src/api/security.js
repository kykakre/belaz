import { Api } from "./api.js";

export const Autorize = async (email, password) => {
  console.log("pag");
  const response = await Api.post("api/security/auth", {
    RequestData: { email: email, password: password },
  });
  return (
    localStorage.setItem("token", response.data),
    console.log(localStorage.getItem("token"))
  );
};
export const Registration = async (
  email,
  password,
  name,
  surname,
  patronymic,
  phone
) => {
  const response = await Api.post("api/security/registration", {
    RequestData: {
      email: email,
      password: password,
      name: name,
      surname: surname,
      patronymic: patronymic,
      phone: phone,
    },
  });
  return response.data;
};
