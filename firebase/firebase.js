import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';
import 'firebase/firestore';

class Firebase{
    //Every time I create a instance of class Firebase, it will initialize the app
    constructor(){

        //if there is no app created create it
        if (!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        //to enable the authentication
        this.auth =app.auth();
        this.db = app.firestore();
    }

    //Register a user
    async register(name, email, password){
        //methods of firebase to register a new user
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
        
        //create and update the name
        return await newUser.user.updateProfile({
            displayName: name
        })

    }

    // Log in
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }


    // signOut 
    async signOut() {
        await this.auth.signOut();
    }
}
const firebase = new Firebase();
export default firebase;