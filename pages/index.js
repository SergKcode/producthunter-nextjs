import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout/Layout'

const H1 = styled.h1`
color:red;
`

const Home=()=> {
  return (

    <Layout>
      <div>
        <H1>Inicio</H1>
      </div>
    </Layout>
    
  )
}

export default Home