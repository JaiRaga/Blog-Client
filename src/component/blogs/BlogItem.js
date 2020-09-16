import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    margin: "10px 0",
    background:
      "linear-gradient(90deg, rgba(16,3,158,1) 0%, rgba(9,73,121,1) 15%, rgba(4,204,245,1) 48%)"
  }
}));

const BlogItem = ({ blog, trending }) => {
  const classes = useStyles();
  const mediumScreenTitle = trending ? 12 : 4;
  const mediumScreenTags = trending ? 12 : 8;

  return (
    <Fragment>
      <Grid container item justify='center' className={classes.root}>
        <Grid item xs={12} md={mediumScreenTitle}>
          <Typography variant='h4' align='center'>
            {blog.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={mediumScreenTags}>
          <Grid container item justify='center'>
            {blog.category.map((tag) => (
              <Button variant='contained' color='primary'>
                {tag}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

export default BlogItem;
