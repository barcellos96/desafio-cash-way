import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";

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
  })
);

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <MdOutlineAccountBalanceWallet
          fontSize="60px"
          color="purple"
          cursor="pointer"
        />
      </Paper>
      <Paper elevation={3}>
        <MdOutlineAccountBalanceWallet
          fontSize="60px"
          color="purple"
          cursor="pointer"
        />
      </Paper>
      <Paper elevation={3}>
        <MdOutlineAccountBalanceWallet
          fontSize="60px"
          color="purple"
          cursor="pointer"
        />
      </Paper>
    </div>
  );
}
