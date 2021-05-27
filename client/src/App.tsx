import React, { useState, createContext } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Routes from "./components/Routes";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { loginState } from "./types";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        flexGrow: 1,
    },
    iconButton: {
        left: "50%",
    },
}));

const contextDefaultValues: loginState = {
    loggedInUser: false,
    setLoggedInUser: () => {},
};

export const AuthContext = createContext<loginState>(contextDefaultValues);

export default function App() {
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [theme, setTheme] = useState(true);
    const classes = useStyles();
    const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
    const appliedTheme = createMuiTheme(theme ? light : dark);

    return (
        <ThemeProvider theme={appliedTheme}>
            <Paper>
                <div className={classes.root}>
                    <IconButton
                        className={classes.iconButton}
                        edge="end"
                        color="inherit"
                        aria-label="mode"
                        onClick={() => setTheme(!theme)}
                    >
                        {icon}
                    </IconButton>
                    <AuthContext.Provider
                        value={[loggedInUser, setLoggedInUser]}
                    >
                        <Routes />
                    </AuthContext.Provider>
                    <section className="container">
                        <ScrollButton />
                    </section>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export let light: object;

light = {
    palette: {
        type: "light",
    },
};

export let dark: object;

dark = {
    palette: {
        type: "dark",
    },
};
