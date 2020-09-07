import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#eee"
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.grid}
      xs={3}
      md={4}>
      <Grid container item justify='space-evenly' alignItems='center'>
        <Grid item>Pic</Grid>
        <Grid item>
          <Grid container item direction='column'>
            <Grid item>Name</Grid>
            <Grid item>rating</Grid>
          </Grid>
        </Grid>
      </Grid>
      <grid item>Blogs</grid>
      <grid item>Trending</grid>
      <grid item>Suggestions</grid>
      <grid item>Tags</grid>
    </Grid>
  );
};

export default Profile;
