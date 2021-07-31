import Layout from "../components/layout/Layout";
import styled from 'styled-components';

const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`

const Login = () => {
    return ( 

    <div>

        <Layout>

            <H1>Login</H1>
            
        </Layout>

    </div>

     );
}
 
export default Login;