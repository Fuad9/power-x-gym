import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";
import "./Login.scss";
import { AuthContext } from "../../App";

const Login = () => {
    const [setLoggedInUser] = useContext(AuthContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
    });

    document.title = "Login";

    initializeLoginFramework();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center my-5"></div>
            <div className="auth-container">
                <div className="auth">
                    <h6>Login With</h6>
                    <div className="d-flex">
                        <button onClick={googleSignIn}>
                            Continue with Google
                        </button>
                    </div>
                </div>
                <p>
                    Don’t have an account?{" "}
                    <Link to="/login"> Create an account</Link>
                </p>
            </div>
        </>
    );
};

export default Login;
