import React, {useState} from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import styled from 'styled-components';

import firebase from '../firebase'

// validaciones
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

const H1 = styled.h1`
  text-align: center;
  margin-top: 5rem;

  
`
const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}


const CreateAccount = () => {

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation
  (INITIAL_STATE, validateCreateAccount, createAccount);


  const { name, email, password } = values;

  async function createAccount(){
    try{
      await firebase.register(name, email, password);

    }catch(error){
      console.log("ERROR",error.message)
      setError(error.message)
    }
  }



  return (

    <div>

      <Layout>

        <>
        <H1>Create Account</H1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
              <Field>
                  <label htmlFor="name">Name</label>
                  <input 
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur} 
                  />
              </Field>

              {errors.name && <Error>{errors.name}</Error> }

              
  
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
    
  )
}

export default CreateAccount