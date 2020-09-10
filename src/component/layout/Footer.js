import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "20px 0",
    // margin: "10px 0",
    color: "white",
    backgroundColor: "#6F00FF"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12} md={5}>
        <Typography variant='h6' align='center'>
          Made by Raga Jai Santhosh
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
