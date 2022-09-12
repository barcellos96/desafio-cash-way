// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

export const useApi = () => ({
  validationTakon: async (token: string) => {
    return {
      user: { account: "Felipe", password: "123", holder: "1" },
    };
    // const response = await api.post("/validate", { token });
    // return response.data;
  },
  Login: async (account: string, password: string, holder: string) => {
    return {
      user: { account: "Felipe", password: "123", holder: "1" },
      token: "123456789",
    };
    // const response = await api.post("/login", {
    //   data,
    // });
    // return response.data;
  },
  Logout: async () => {
    return { status: true };
    // const response = await api.post("/login");
    // return response.data;
  },
});
