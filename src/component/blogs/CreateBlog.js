import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
  spacing: {
    marginTop: 10,
    width: "100%"
  }
}));

const CreateBlog = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      //   justify='center'
      alignItems='center'
      className={classes.container}>
      {/* <form> */}
      <Grid item xs={6} className={classes.spacing}>
        <Typography variant='h4' color='primary'>
          Blog Title
        </Typography>
        <TextField
          id='title'
          label='Title of the Blog Post!'
          fullWidth
          autoFocus
          multiline
          required
          type='text'
          // error
          // helperText='Error'
        />
      </Grid>

      <Grid item xs={6} className={classes.spacing}>
        <Typography variant='h4' color='primary'>
          Blog Body
        </Typography>
        <TextField
          id='body'
          label='Body of the blog Post!'
          fullWidth
          variant='filled'
          multiline
          required
          type='text'
          // error
          // helperText='Error'
        />
      </Grid>

      <Grid item xs={6} className={classes.spacing}>
        <Button variant='outlined' color='primary'>
          Submit Blog
        </Button>
      </Grid>
      {/* </form> */}
    </Grid>
  );
};

export default CreateBlog;
