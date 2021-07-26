import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';



const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Header = styled.header`
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
        <Header
        
        >
            <HeaderContainer>
                <Div
                
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    

                    <Buscar />

                    <Navegacion />
                </Div>

                <Div
                    
                >
                    { usuario ? (
                        <>
                            <P
                            >Hola: user</P>
                            <button
            
                                onClick={console.log("button")}
                            >Log out</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <button
                                   
                                >Login</button>
                            </Link>
                            <Link href="/sign-up">
                                <button>Sign Up</button>
                            </Link>
                        </>
                    ) }
                </Div>
            </HeaderContainer>
        </Header>
     );
}
 
export default Header;