import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CreateBlogBtn from "../blogs/CreateBlogBtn";
import Blogs from "../blogs/Blogs";
import BlogItem from "../blogs/BlogItem";
import Search from "../search/Search";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: "100%"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item xs={6} className={classes.btn}>
        <CreateBlogBtn />
      </Grid>
      <Grid item>
        {/* <Grid container item> */}
        <Blogs displayTrending='false' />
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
