import React, { useState, useContext } from "react";

import { NavLink } from "react-router-dom";
import { auth } from "../../Auth/firebase.config";
import { AuthContext } from "../../../context/AuthContext";
//styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Drawer } from "@material-ui/core";
import BackgroundSound from "../../utilities/soundEffect/BackgroundSound";

import "./NavBar.scss";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "min(90%, 70.5rem)",
    margin: "0 auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(3),
  },
}));

const styles = {
  textActiveStyle: {
    color: "#2BDE8C",
    textDecoration: "none",
  },
  textStyle: {
    color: "orange",
    textDecoration: "none",
  },
};

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const user = useContext(AuthContext);

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar className="d-flex justify-content-end">
          <div className="nav-menu d-flex align-items-center">
            <NavLink
              activeStyle={styles.textActiveStyle}
              style={styles.textStyle}
              to="/home"
            >
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={styles.textActiveStyle}
              style={styles.textStyle}
              to="/about"
            >
              <Typography variant="h6" className={classes.title}>
                About Us
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={styles.textActiveStyle}
              style={styles.textStyle}
              to="/classes"
            >
              <Typography variant="h6" className={classes.title}>
                Classes
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={styles.textActiveStyle}
              style={styles.textStyle}
              to="/services"
            >
              <Typography variant="h6" className={classes.title}>
                Services
              </Typography>
            </NavLink>
            {user ? (
              <>
                <NavLink
                  activeStyle={styles.textActiveStyle}
                  style={styles.textStyle}
                  to="/profile"
                >
                  <Typography variant="h6" className={classes.title}>
                    Profile
                  </Typography>
                </NavLink>
                <Button onClick={signOut}>Sign Out</Button>
              </>
            ) : (
              <NavLink
                activeStyle={styles.textActiveStyle}
                style={styles.textStyle}
                to="/login"
              >
                <Typography variant="h6" className={classes.title}>
                  Sign In
                </Typography>
              </NavLink>
            )}
            <BackgroundSound />
          </div>

          <div className="menu-icon">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              id="menu-appbar"
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className="menu-appbar">
                <NavLink
                  activeStyle={styles.textActiveStyle}
                  style={styles.textStyle}
                  to="/home"
                >
                  <MenuItem onClick={() => setOpen(false)}>Home</MenuItem>
                </NavLink>
                <NavLink
                  activeStyle={styles.textActiveStyle}
                  style={styles.textStyle}
                  to="/about"
                >
                  <MenuItem onClick={() => setOpen(false)}>About</MenuItem>
                </NavLink>
                <NavLink
                  activeStyle={styles.textActiveStyle}
                  style={styles.textStyle}
                  to="/classes"
                >
                  <MenuItem onClick={() => setOpen(false)}>Classes</MenuItem>
                </NavLink>
                <NavLink
                  activeStyle={styles.textActiveStyle}
                  style={styles.textStyle}
                  to="/services"
                >
                  <MenuItem onClick={() => setOpen(false)}>Services</MenuItem>
                </NavLink>
                {user ? (
                  <>
                    <NavLink
                      activeStyle={styles.textActiveStyle}
                      style={styles.textStyle}
                      to="/profile"
                    >
                      <MenuItem onClick={() => setOpen(false)}>
                        Profile
                      </MenuItem>
                    </NavLink>
                    <Button onClick={signOut}>Sign Out</Button>
                  </>
                ) : (
                  <NavLink
                    activeStyle={styles.textActiveStyle}
                    style={styles.textStyle}
                    to="/login"
                  >
                    <MenuItem onClick={() => setOpen(false)}>Sign In</MenuItem>
                  </NavLink>
                )}
                <MenuItem>
                  <BackgroundSound />
                </MenuItem>
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
