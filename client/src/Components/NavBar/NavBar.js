import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import { makeStyles } from "@material-ui/core/styles";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
<<<<<<< HEAD
    color: "white"
=======
    color: "white",
>>>>>>> 22b4fc8efe2610a673256d319a877aeb96fc4145
  },
}));

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className={classes.title} align="left">
            <Typography variant="h5">Open Forum</Typography>
          </Link>
          {props.isSearchEnable && <Search />}
          <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
