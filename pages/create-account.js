import React from 'react';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  margin-top: 5rem;

  
`



const CreateAccount = () => {
  return (

    <div>

      <Layout>

        <>
        <H1>Create Account</H1>
          <Form
            onSubmit={console.log("submit")}
          >
              <Field>
                  <label htmlFor="name">Name</label>
                  <input 
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      /* value={name}
                      onChange={handleChange}
                      onBlur={handleBlur} */
                  />
              </Field>

              
  
              <Field>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                     /*  value={email}
                      onChange={handleChange}
                      onBlur={handleBlur} */
                  />
              </Field>
              
  
              <Field>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Your Password"
                      name="password"
                      /* value={password}
                      onChange={handleChange}
                      onBlur={handleBlur} */
                  />
              </Field>
            
  
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