import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Zoom
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link, Redirect } from "react-router-dom";
import TrendingBlogItem from "./TrendingBlogItem";
import { toggleTrending } from "../../redux/actions/blog";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "auto",
    backgroundColor: "white",
    margin: 10
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  link: {
    textDecoration: "none",
    color: "#ffffdd"
  },
  icons: {
    color: "#ffffdd",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "black"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px",
    color: "#ebebeb"
  },
  divider: {
    backgroundColor: "#334ad8"
  },
  listBtn: {
    padding: "8px 0"
  }
}));

export default function TrendingSideBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.blog.openTrending);
  console.log(openDrawer);
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      console.log("No condition");
      return;
    }
    console.log(open);
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Tooltip title='Close' TransitionComponent={Zoom}>
        <IconButton
          aria-label='close'
          color='secondary'
          onClick={() => dispatch(toggleTrending(!openDrawer))}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Typography variant='h3' align='center'>
        Trending
      </Typography>
      <TrendingBlogItem />
    </div>
  );

  const anchor = "right";

  return (
    <Fragment>
      {/* <Button onClick={toggleDrawer(anchor, openDrawer)}>{anchor}</Button> */}

      <SwipeableDrawer
        anchor={anchor}
        open={openDrawer ? toggleDrawer(anchor, openDrawer) : null}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}>
        {list(anchor)}
      </SwipeableDrawer>
    </Fragment>
  );
}
