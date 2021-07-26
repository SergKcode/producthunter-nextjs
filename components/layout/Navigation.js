import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color:${props => props.theme.colors.orange};
        font-family: 'PT Sans', sans-serif;
        &:last-of-type {
            margin-right: 0;
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
                <a>Most Popular</a>
            </Link>
            <Link href="/new-product">
                <a>New Product</a>
            </Link>
        </Nav>
     );
}
 
export default Navigation;