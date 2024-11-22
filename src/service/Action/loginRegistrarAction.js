import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../../fierbase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

// Action Creators
const registerSuccess = () => ({ type: 'RegisterSuccess' });

const loginSuccess = (user) => ({ type: 'LoginSuccess', payload: user });

const loginError = (error) => ({ type: 'LoginError', payload: error });

const logoutSuccess = () => ({ type: 'LogoutSuccess' });



  export const autoLoginAction = () => async (dispatch) => {
    
    const userId = localStorage.getItem("user-login-id");

    if (userId) {
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          dispatch(loginSuccess(userDoc.data()));
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        localStorage.removeItem("user-login-id");
        dispatch(logoutSuccess());
      }
    } else {
      const currentUser = auth.currentUser;
      if (currentUser) {
        dispatch(loginSuccess(currentUser));
      } else {
        dispatch(logoutSuccess());
      }
    }
  };

  

export const registerAction = (data) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), { name: data.name, email: data.email, uid: user.uid });

    dispatch(registerSuccess());
  } catch (error) {
    console.error("Registration Error:", error);
  }
};

// Login Action
export const loginAction = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("user-login-id", user.uid);

    dispatch(loginSuccess(user));
  } catch (error) {

    dispatch(loginError(error.message));

    localStorage.removeItem("user-login-id");
  }
};

// Logout Action
export const signoutAction = () => (dispatch) => {

  localStorage.removeItem("loggedIn");

  localStorage.removeItem("user-login-id");
  
  dispatch({ type: "LogoutSuccess" });
};