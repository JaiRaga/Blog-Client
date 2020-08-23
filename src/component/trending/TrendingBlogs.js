import React from "react";
import { Grid } from "@material-ui/core";
import TrendingBlogItem from "./TrendingBlogItem";

const TrendingBlogs = () => {
  return (
    <Grid item>
      <TrendingBlogItem />
      <TrendingBlogItem />
      <TrendingBlogItem />
    </Grid>
  );
};

export default TrendingBlogs;
