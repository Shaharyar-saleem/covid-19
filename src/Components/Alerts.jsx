import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    AlertText: {
      textAlign: "center",
    },
  },
}));

export default function AlertBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center>
      <Alert severity="warning" className={classes.AlertText}>
        {props.Deaths} People have lost their Lives Today due to Corona Virus
      </Alert>
      </center>
    </div>
  );
}
