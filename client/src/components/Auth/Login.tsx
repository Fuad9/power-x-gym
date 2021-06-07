import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { handleGoogleSignIn } from "./LoginManager";
import { auth } from "./firebase.config";
import "./Login.scss";
import { Button, Col, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

const Login: React.FC = () => {
  // const [user, setUser] = useState({
  //   isSignedIn: false,
  //   name: "",
  //   email: "",
  //   photo: "",
  // });
  const [errorMessage, setErrorMessage] = useState("");

  const user = useContext(AuthContext);
  console.log(user);
  const history = useHistory();
  // const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      history.push("/registration");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {});
  };

  // const handleResponse = (res, redirect) => {
  //   setUser(res);
  //   setLoggedInUser(res);
  //   if (redirect) {
  //     history.replace(from);
  //   }
  // };

  return (
    <>
      <div className="d-flex justify-content-center my-5"></div>
      <div className="auth-container">
        <div className="auth">
          <h6>Login With</h6>
          <div className="d-flex">
            <button onClick={googleSignIn}>Continue with Google</button>
          </div>
        </div>
        <p>
          Don’t have an account? <Link to="/login"> Create an account</Link>
        </p>
      </div>

      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>
          <Form className="mt-4">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Row>
              <Col xs={6}>
                <Button onClick={createAccount} type="button" block>
                  Sign Up
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  onClick={signIn}
                  type="button"
                  variant="secondary"
                  block
                >
                  Sign In
                </Button>
              </Col>
            </Form.Row>
            {errorMessage ? (
              <h4 className="text-danger">{errorMessage}</h4>
            ) : null}
          </Form>
        </Container>
      ) : (
        <div>
          <h2 className="mt-4 text-center text-success">
            Welcome {user.email}
          </h2>
        </div>
      )}
    </>
  );
};

export default Login;
