import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import GoogleButton from 'react-google-button'
import { UserContext } from '../../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if ( firebase.apps.length === 0 ) {
        firebase.initializeApp( firebaseConfig );
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup( provider ).then( function ( result ) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photo: photoURL }
            setLoggedInUser( signedInUser );

            storeAuthToken()
            history.replace( from );
        } ).catch( function ( error ) {
            const errorMessage = error.message;
            console.log( errorMessage );
        } );
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken( true )
            .then( function ( idToken ) {
                sessionStorage.setItem( 'token', idToken );
                history.replace( from );
            } ).catch( function ( error ) {

            } );
    }



    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: '300px' }}>
            <GoogleButton
                onClick={handleGoogleSignIn}
            />



        </div>
    );
};

export default Login;