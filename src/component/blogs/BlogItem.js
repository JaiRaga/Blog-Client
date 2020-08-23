import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const BlogItem = () => {
  return (
    <Grid container item>
      <Grid item xs={12} md={4}>
        <Typography variant='h4'>Blog Title </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Button variant='contained' color='primary'>
          Tag1
        </Button>
        <Button variant='contained' color='primary'>
          Tag2
        </Button>
        <Button variant='contained' color='primary'>
          Tag3
        </Button>
        <Button variant='contained' color='primary'>
          Tag4
        </Button>
        <Button variant='contained' color='primary'>
          Tag5
        </Button>
        <Button variant='contained' color='primary'>
          Tag6
        </Button>
      </Grid>
    </Grid>
  );
};

export default BlogItem;
