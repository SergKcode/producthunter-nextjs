import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';

const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`

const Popular = () => {
  return (

    <div>

      <Layout>

        <H1>Most Popular</H1>
        
      </Layout>

    </div>
    
  )
}

export default Popular