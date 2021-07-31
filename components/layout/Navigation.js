import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.2rem;
        margin-left: 2rem;
        color:${props => props.theme.colors.primary};
        font-family: 'PT Sans', sans-serif;
        &:last-of-type {
            margin-right: 0;
        }

        &:hover{
            color:${props => props.theme.colors.blue};

        }
    }

`

const Navigation = () => {
    return ( 
        <Nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/popular">
                <a>Popular</a>
            </Link>
            <Link href="/new-product">
                <a>New Product</a>
            </Link>
        </Nav>
     );
}
 
export default Navigation;