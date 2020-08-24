import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link, Redirect } from "react-router-dom";
import TrendingBlogItem from "./TrendingBlogItem";

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

export default function TrendingSideBar({ openDrawer }) {
  console.log(openDrawer);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, openDrawer) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: openDrawer });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Typography variant='h3' align='center'>
        Trending
      </Typography>
      <TrendingBlogItem />
    </div>
  );

  const anchor = "right";

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}>
      {list(anchor)}
    </SwipeableDrawer>
  );
}
