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
    margin: 5
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
