import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Browser from '../ui/Browser';
import Navigation from './Navigation';
import Button from '../ui/Button';




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
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    padding: 1rem 0;
`;

const Logo = styled.a`
    color:${props => props.theme.colors.orange};
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
    const user =true

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
                    { user ?(
                        <>
                            <P>Hello</P>
                            <Button bgColor type="Button">Log Out</Button>
                         </>
                    ):(
                        <>
                            <Link href="/login">
                                <Button bgColor>Login</Button>
                            </Link>
                            <Link href="/new-account">
                                <Button>Create Account</Button>
                            </Link>
                        </>
                    )}
                </Div>
            </HeaderContainer>
        </HeaderTag>
     );
}
 
export default Header;