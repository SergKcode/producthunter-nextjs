import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Browser from '../ui/Browser';
import Navigation from './Navigation';



const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const HeaderTag = styled.header`
    border-bottom: 2px solid grey;
        padding: 1rem 0;
`;

const Logo = styled.a`
    color: orange;
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Div = styled.div`
    display:flex;
    align-items: center;
`;
const P = styled.p`
    margin-right: 2rem;
`;

const Header = () => {

    return ( 
        <HeaderTag
        
        >
            <HeaderContainer>
                <Div
                
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    

                    <Browser/>

                    <Navigation/>

                
                </Div>

                <Div
                    
                >
                
                    <P>Hello</P>
                    <button type="Button">Log Out</button>
                    <Link href="/login">Login</Link>
                    <Link href="/new-account">Create Account</Link>
                </Div>
            </HeaderContainer>
        </HeaderTag>
     );
}
 
export default Header;