import React from 'react';
import Link from 'next/link';
import Header from './Header';

const Layout = props => {
    return (  
        <>
            <Header/>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>

            <main>
                {props.children}
            </main>
        
        </>

    );
}
 
export default Layout;