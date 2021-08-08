import React, { useEffect, useState } from 'react';
import firebase from '../firebase/index';


//this hook save the user's session
function useAuthentication() {
    const [ userAuthenticated, setUserAuthenticated] = useState(null);

    useEffect(() => {
        //if someones log in saves automatically the session
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if( user ) {
                setUserAuthenticated(user);
            } else {
                setUserAuthenticated(null);
            }
        });
        return () => unsuscribe();
    }, []);

    return userAuthenticated;
}
export default useAuthentication;