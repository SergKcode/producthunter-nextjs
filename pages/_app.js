import Theme from "../styles/theme";
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return( 
    <Theme>
      <GlobalStyles/>
      <Component {...pageProps} />
    </Theme>
  )

}

export default MyApp
