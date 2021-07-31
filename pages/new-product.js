import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';


const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`

const NewProduct = () => {
  return (

    <div>

      <Layout>

        <H1>New Product</H1>
        
      </Layout>

    </div>
    
  )
}

export default NewProduct