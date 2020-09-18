import React from "react";
import { Grid } from "@material-ui/core";
import CreateBlogBtn from "../blogs/CreateBlogBtn";

const Dashboard = () => {
  return (
    <Grid container justify='center'>
      <CreateBlogBtn />
    </Grid>
  );
};

export default Dashboard;
