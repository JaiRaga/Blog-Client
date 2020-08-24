import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   tags: {
//     [theme.breakpoints.down("xs")]: {}
//   }
// }));

const BlogItem = ({ trending }) => {
  // const classes = useStyles();
  const mediumScreenTitle = trending ? 12 : 4;
  const mediumScreenTags = trending ? 12 : 8;

  return (
    <Grid container item justify='center'>
      <Grid item xs={12} md={mediumScreenTitle}>
        <Typography variant='h4' align='center'>
          Blog Title
        </Typography>
      </Grid>
      <Grid item xs={12} md={mediumScreenTags}>
        <Grid container item justify='center'>
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
    </Grid>
  );
};

export default BlogItem;
