import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import * as React from 'react';

import { Box } from "@material-ui/core";
import { useApi } from "../../hooks/useApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "93%",
      marginLeft: "3%",

      "& > *": {
        margin: theme.spacing(3),
        width: "28%",
        minWidth: "250px",
        height: theme.spacing(25),
      },
    },
    card: {
      display:"flex",
      flexDirection: "column",

      "&:hover":{
        background: "#00000007",
        
      }
    },
    subTitle: {
      display: "flex",
      color: "#328588",
      justifyContent:"center",
      alignItems: "end",
      textAlign: "center",
      fontSize: "25px",
      fontWeight: "bold",
      paddingTop: "5px",
      height: "60px",
    },
    value: {
      display: "flex",
      color: "#739293",
      justifyContent:"center",
      alignItems: "end",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      paddingTop: "5px",
      height: "60px",

    }
  })
);

interface IBalance {
  limit: number,
  balance: number,
  interest: number,
  blocked_amount: number,
  available_amount: number,
  waiting_total_amount: number,
  future_statements_total: number
}

export default function SimplePaper() {
  const api = useApi()
  const [dataUserBalance, setDataUserBalance] = React.useState<IBalance | null>( null)


  React.useEffect(() => {
    const execData = async () => {
      const UserBalance = await api.UserBalance()
      setDataUserBalance(UserBalance)
    }
    execData()
  },[])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.card}>
        <Box component="h2" className={classes.subTitle}>
          SALDO
        </Box>

          <Box component="h3" className={classes.value}>
            {dataUserBalance ? <span>R${dataUserBalance.balance}</span> : "ainda não renderizou  "}
          </Box>
      </Paper>
      <Paper elevation={3} className={classes.card}>
      <Box component="h2" className={classes.subTitle}>LIMITE TRANSFERENCIA
      
          
      </Box>
      </Paper>
      <Paper elevation={3} className={classes.card}>
      <Box component="h2" className={classes.subTitle}>VALOR MÁXIMO DE PAGAMENTO</Box>

      </Paper>
    </div>
  );
}
