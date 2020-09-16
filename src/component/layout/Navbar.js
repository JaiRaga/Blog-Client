import React, { Fragment } from "react";
import {
  fade,
  makeStyles,
  TextField,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AdjustIcon from "@material-ui/icons/Adjust";
import SearchIcon from "@material-ui/icons/Search";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  navbar: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  list: {
    display: "flex"
  },
  appName: {
    fontStyle: "italic",
    fontWeight: 500
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  icons: {
    color: "white",
    minWidth: "35px"
  },
  right: {
    display: "flex",
    marginLeft: "auto"
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const authLinks = (
    <Fragment>
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <ChangeHistoryIcon />
            </ListItemIcon>
            <ListItemText primary='Pom' />
          </ListItem>
        </Link>
      </List>
      <List className={classes.right}>
        <Link to='/dashboard' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to='/profile' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>

        <Link to='/setting' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
          </ListItem>
        </Link>

        <Link to='/' className={classes.link}>
          <ListItem button onClick={() => dispatch(logout())}>
            <ListItemIcon className={classes.icons}>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const top100Films = [
    { title: "Sarvamum Krishana Arpanam", year: 5464 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 }
  ];

  const guestLinks = (
    <Fragment>
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <ChangeHistoryIcon />
            </ListItemIcon>
            <ListItemText primary='Pom' className={classes.appName} />
          </ListItem>
        </Link>
      </List>
      <List className={classes.right}>
        {/* <ListItem> */}
        <Autocomplete
          id='search-box'
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Search Pom' variant='outlined' />
          )}
        />
        {/* </ListItem> */}
        <Link to='/login' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Login' />
          </ListItem>
        </Link>

        <Link to='/register' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Register' />
          </ListItem>
        </Link>

        <Link to='/blogs' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Blogs' />
          </ListItem>
        </Link>

        <Link to='/profile' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        // color='transparent'
        className={classes.navbar}>
        <Toolbar>
          {isAuthenticated && !loading ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
