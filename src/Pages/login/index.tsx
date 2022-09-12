import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../providers/login";
import { BootstrapButton } from "../../components/buttonLogin";
import {
  TextField,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Logo from "../../assets/logo.svg";

export const Login = () => {
  const auth = useContext(LoginContext);
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [holder, setHolder] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitFunction = () => {
    auth.Login(account, password, holder);
    navigate("/dashboard");
    console.log({ account, password, holder });
  };

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

        <form onClick={handleSubmit(onSubmitFunction)}>
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
              value={account}
              sx={{
                m: 1,
                width: "100%",
                marginBottom: "20px",
              }}
              {...register("account", {
                required: true,
                maxLength: 30,
                onChange(e) {
                  setAccount(e.target.value);
                },
              })}
            />
            {errors.account && errors.account.type === "required" && (
              <span role="alert">Campo obrigatório</span>
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
              {...register("password", {
                required: true,
                maxLength: 30,
                onChange(e) {
                  setPassword(e.target.value);
                },
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span role="alert">Campo obrigatório</span>
            )}
            <TextField
              id="holder-id"
              label="Holder"
              variant="standard"
              sx={{ m: 1, width: "100%", marginBottom: "20px" }}
              {...register("holder", {
                required: true,
                maxLength: 30,
                onChange(e) {
                  setHolder(e.target.value);
                },
              })}
            />
            {errors.holder && errors.holder.type === "required" && (
              <span role="alert">Campo obrigatório</span>
            )}
            <BootstrapButton type="submit">Fazer Login</BootstrapButton>
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
