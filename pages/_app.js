import Theme from "../styles/theme";
import GlobalStyles from '../styles/GlobalStyles';
import firebase, {FirebaseContext} from '../firebase'

function MyApp({ props }) {

  const {Component, pageProps} = props;

  return( 
    
      <Theme>
        <GlobalStyles/>
          <FirebaseContext.Provider
          value={{
            firebase,
           }}
          >
          <Component {...pageProps} />
        </FirebaseContext.Provider>
      </Theme>
    
  )

}

export default MyApp
