import App from 'next/app';
import Theme from "../styles/theme";
import GlobalStyles from '../styles/GlobalStyles';
import firebase, {FirebaseContext} from '../firebase'
import useAuthentication from '../hooks/useAuthentication';

const MyApp = props => {

  const user = useAuthentication();
  const {Component, pageProps} = props;

  return( 
    
      <Theme>
        <GlobalStyles/>
          <FirebaseContext.Provider
          value={{
            firebase,
            user
           }}
          >
          <Component {...pageProps} />
        </FirebaseContext.Provider>
      </Theme>
    
  )

}

export default MyApp
