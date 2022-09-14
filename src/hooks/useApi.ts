import axios from "axios";
import { IUser } from "../providers/login";
import { toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
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
    }).catch(err => {      
      toast.error(err.response.data.errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return err.response.data.errors[0]
    })
    return response
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
          "uid": getUid,
          "client": getClient,
          "access-token": getToken 
        },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  },

  StatementsLastFifteenDays: async () => {
    const getUid: any = localStorage.getItem("uid") || [];
    const getClient: any = localStorage.getItem("client") || [];
    const getToken: any = localStorage.getItem("token") || [];

    const response = await api
      .get("statements/last_fifteen_days_total_credits_and_debits", {
        headers: {
          "uid": getUid,
          "client": getClient,
          "access-token": getToken 
        },
      }).then((res) => res.data)
      .catch((err) => err);


    return response;
  },

  StatementsLastSevenDays: async () => {
    const getUid: any = localStorage.getItem("uid") || [];
    const getClient: any = localStorage.getItem("client") || [];
    const getToken: any = localStorage.getItem("token") || [];

    const response = await api
      .get("statements/last_seven_days_total_credits_and_debits", {
        headers: {
          "uid": getUid,
          "client": getClient,
          "access-token": getToken 
        },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  },

  UserBalance: async () => {
    const getUid: any = localStorage.getItem("uid") || [];
    const getClient: any = localStorage.getItem("client") || [];
    const getToken: any = localStorage.getItem("token") || [];

    const response = await api
      .get("users/balance", {
        headers: {
          "uid": getUid,
          "client": getClient,
          "access-token": getToken 
        },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  },

  // StatementsByPeriod: async () => {
  //   const getUid: any = localStorage.getItem("uid") || [];
  //   const getClient: any = localStorage.getItem("client") || [];
  //   const getToken: any = localStorage.getItem("token") || [];

  //   const response = await api
  //     .get("statements/period=last_month", {
  //       headers: {
  //         "uid": getUid,
  //         "client": getClient,
  //         "access-token": getToken,
  //         Accept: 'application/json'
  //       }
  //     })
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // },


});
