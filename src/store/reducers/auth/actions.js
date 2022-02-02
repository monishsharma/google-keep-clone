import * as actionTypes from "./types";
import firebase from "firebase";

const provider =  new firebase.auth.GoogleAuthProvider();



const initSignInWithGoogle = (flag) => ({
    type: actionTypes.INIT_SIGNIN_WITH_GOOGLE,
    loading: flag
});

const storeUserData = (user) => ({
  type: actionTypes.STORE_USER_DATA,
  user
});

const logOut = (user) => ({
  type: actionTypes.LOGOUT_USER,
  user
});


export const signInWithGoogle = () => (dispatch) => {
    dispatch(initSignInWithGoogle(true));
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider)
        .then(res => {
          resolve(res);
          dispatch(storeUserData(res));
          dispatch(initSignInWithGoogle(false));
        })
        .catch(() => {
          dispatch(initSignInWithGoogle(false));
        })
    })

    
    
}


export const logout = () => dispatch => {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      dispatch(logOut());
      dispatch(initSignInWithGoogle(false));
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  })
  
}