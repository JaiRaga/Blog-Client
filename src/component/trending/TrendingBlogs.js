import React from "react";
import { Grid } from "@material-ui/core";
import TrendingBlogItem from "./TrendingBlogItem";
import BlogItem from "../blogs/BlogItem";

const TrendingBlogs = () => {
  return (
    <Grid item>
      <BlogItem />
    </Grid>
  );
};

export default TrendingBlogs;
