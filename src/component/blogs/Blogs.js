import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Divider,
  useMediaQuery
} from "@material-ui/core";
import BlogItem from "./BlogItem";
import TrendingBlogs from "../trending/TrendingBlogs";
import TrendingSideBar from "../trending/TrendingSideBar";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  blogs: {
    padding: 10,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  },
  blogsTitle: {
    margin: 10
  },
  // blogItem: {
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  trendings: {
    margin: 5,
    padding: 5,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  trendingTitle: {
    margin: 10
  },
  divider: {
    margin: 5
  }
}));

const Blogs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const trendingSidebar = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container className={classes.root} justify='flex-end'>
      <Grid item xs={12} sm={6} className={classes.blogs}>
        <Grid
          container
          item
          direction='column'
          justify='center'
          alignItems='center'>
          <Typography variant='h4' className={classes.blogsTitle}>
            Blogs
          </Typography>
          <Grid item>
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
            <BlogItem className={classes.blog} />
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.trendings}>
        <Grid container item>
          <Grid item>
            <Typography
              variant='h4'
              align='center'
              className={classes.trendingTitle}>
              Trending
            </Typography>
            <TrendingBlogs className={classes.trending} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blogs;
