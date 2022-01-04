import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../firebase.config';
import googleIcon from '../../images/googleicon.png';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
               console.log(error);
            });
    }


    return (
        <div className="mt-5" style={{ textAlign: 'center' }}>
            <button className="signIn-btn btn btn-secondary" onClick={handleGoogleSignIn}><img src={googleIcon} alt=""/><span className="ml-2">Sign in with Google</span></button>
        </div>
    );
};

export default Login;
