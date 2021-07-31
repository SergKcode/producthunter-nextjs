import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout/Layout'

const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`

const Search =()=> {
  return (

    <div>
        <Layout>
      
            <H1>Search</H1>

        </Layout>
    </div>
  )
}

export default Search