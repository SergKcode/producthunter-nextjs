import app from 'firebase/app';

import firebaseConfig from './config';

class Firebase{
    //Every time I create a instance of class Firebase, it will initialize the app
    constructor(){

        //if there is no app created create it
        if (!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
    }
}
const firebase = new Firebase();
export default firebase;