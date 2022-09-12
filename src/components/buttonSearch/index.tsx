import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "6px 10px",
      display: "flex",
      alignItems: "center",
      width: 600,
      border: "none",
      outline: "3px solid #f2f2f4",
    },
    input: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <SearchIcon />
      <InputBase
        className={classes.input}
        placeholder="pesquise algo"
        inputProps={{ "aria-label": "pesquise algo" }}
      />
    </Paper>
  );
}
