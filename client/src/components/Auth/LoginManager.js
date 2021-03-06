import firebase from "firebase/app";

// to configure JWT token
const storeAuthToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      sessionStorage.setItem("token", idToken);
    })
    .catch((error) => {
      console.log(error);
    });
};

// handling google sign in
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const signedInUser = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
      };
      storeAuthToken();
      return signedInUser;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};
