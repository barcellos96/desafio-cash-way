import { useContext } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { IUser, LoginContext } from "../../providers/login";
import { BootstrapButton } from "../../components/buttonLogin";
import {
  TextField,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import DashboardPage from "../dashboard";

import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const auth = useContext(LoginContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    account: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    holder: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: IUser) => {
    auth.Login(data);   
    navigate("/dashboard");
  };

  if (localStorage.getItem("token")) {
    return <DashboardPage />;
  }


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        bgcolor: "#FFF",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "Center",
          width: "400px",
          bgcolor: "#e3f2fd",
          borderRadius: "1ch",
          height: "95vh",
          minHeight: "550px",
          maxHeight: "650px",
        }}
      >
        <img src={Logo} alt="logo empresa cash way" />

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginTop: "10px", color: "#369293" }}
        >
          Olá, Sejam bem-vindo!
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "14px",
            fontWeight: "regular",
            marginTop: "10px",
            marginBottom: "20px",
            color: "#a6a6a6",
          }}
        >
          Coloque suas credenciais
        </Typography>

        <form>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "40ch",
            }}
          >
            <TextField
              id="account-id"
              label="Conta"
              variant="standard"
              sx={{
                m: 1,
                width: "100%",
                marginBottom: "20px",
              }}
              {...register("account")}
            />
            {errors.account && errors.account.type === "required" && (
              <Box
                component="p"
                role="alert"
                sx={{
                  display: "flex",
                  color: "red",
                  width: "100%",
                  marginTop: "-12px",
                  paddingBottom: 2,
                }}
              >
                Campo obrigatório
              </Box>
            )}
            <TextField
              id="senha-id"
              label="Senha"
              variant="standard"
              type="password"
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
              {...register("password")}
            />
             {errors.password && errors.password.type === "required" && (
              <Box
                component="p"
                role="alert"
                sx={{
                  display: "flex",
                  color: "red",
                  width: "100%",
                  marginTop: "-12px",
                  paddingBottom: 2,
                }}
              >
                Campo obrigatório
              </Box>
            )} 
            <TextField
              id="holder-id"
              label="Holder"
              variant="standard"
              autoComplete="false"
              sx={{ m: 1, width: "100%", marginBottom: "20px" }}
              {...register("holder")}
            />
            {errors.holder && errors.holder.type === "required" && (
              <Box
                component="p"
                role="alert"
                sx={{
                  display: "flex",
                  color: "red",
                  width: "100%",
                  marginTop: "-12px",
                  paddingBottom: 2,
                }}
              >
                Campo obrigatório
              </Box>
            )} 
            <BootstrapButton
              type="submit"
              onClick={handleSubmit(onSubmitFunction)}
            >
              Fazer Login
            </BootstrapButton>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
            />
          </Box>
        </form>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            justifyContent: "space-between",
            marginBottom: "35px",
          }}
        >
          <FormControlLabel
            label={
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "regular",
                }}
              >
                Lembrar senha
              </Typography>
            }
            control={<Checkbox defaultChecked />}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#369293",
            }}
          >
            Esqueceu sua senha?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
