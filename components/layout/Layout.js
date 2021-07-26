import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';

const Layout = props => {
    return (  
        <>

            <Head>

                <html lang="eng"/>
                <title>Product Hunter</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
                integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" 
                referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
                <link href ="/static/css/app.css" rel="stylesheet"/>

            </Head>

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