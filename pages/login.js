import React, {useState} from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import styled from 'styled-components';

import firebase from '../firebase'

// validaciones
import useValidation from '../hooks/useValidation';
import validateLogIn from '../validation/validateLogIn';

const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`
const STATE_INICIAL = {
    email: '',
    password: ''
}

const Login = () => {

    const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(STATE_INICIAL, validateLogIn, logIn);

  const { email, password } = values;

  async function logIn() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Error', error.message);
      guardarError(error.message);
    }
  }

    return ( 

    <div>

    <Layout>

    <>
        <H1>Log In</H1>
        <Form
            onSubmit={handleSubmit}
            noValidate
        >
            
            <Field>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                />
            </Field>

            {errors.email && <Error>{errors.email}</Error> }
            

            <Field>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                />
            </Field>

            {errors.password && <Error>{errors.password}</Error> }

            {error && <Error>{error} </Error>}
            

            <InputSubmit 
                type="submit"
                value="Create Account"
            />
        </Form>
        </>

        </Layout>

    </div>

     );
}
 
export default Login;