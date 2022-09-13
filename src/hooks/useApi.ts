import axios from "axios";
import { IUser } from "../providers/login";

const api = axios.create({
  baseURL: "https://cwdev.ib.hmg.cashway.io/api/v3/",
});

export const useApi = () => ({
  validationToken: async (user: any) => {
    const responseToken = await api.get(
      `auth/validate_token?uid=${user.uid}&client=${user.client}&access-token=${user["access-token"]}`
    );
    return responseToken.data;
  },
  Login: async (data: IUser) => {
    const response = await api.post("auth/sign_in", {
      account: data.account,
      password: data.password,
      holder: data.holder,
    });
    console.log(response);
    return response;
  },
  Logout: async () => {
    return true;
  },

  StatementsLastMonth: async () => {
    const getUid: any = localStorage.getItem("uid") || [];
    const getClient: any = localStorage.getItem("client") || [];
    const getToken: any = localStorage.getItem("token") || [];

    const response = await api
      .get("statements/last_month_total_credits_and_debits", {
        headers: {
          uid: getUid,
          client: getClient,
          "access-token": getToken,
        },
      })
      .then((res) => res)
      .catch((err) => err);
    return response;
  },
});
