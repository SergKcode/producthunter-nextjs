import React, {useState} from "react";
import styled from 'styled-components';
import Router from 'next/router';


const Form = styled.form`
    position:relative;
`

const InputText = styled.input`
    border: 1px solid ${props => props.theme.colors.black};
    padding: 1rem;
    min-width: 300px;

`

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 3.5rem;
    background-image: url('/static/images/search.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 0.5rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover {
        cursor: pointer;
    }

`
const Browser = () => {

    
    const [ search, setSearch] = useState('');

    const searchProduct = e => {
        e.preventDefault();

        if(search.trim() === '') return;

        // redirect to /search
        Router.push({
            pathname: '/search', 
            query: { q : search}
        })
    }



    return (  
        <Form
            onSubmit={searchProduct}
        >

            <InputText 
                type="text" 
                placeholder="Search Products"
                onChange={e =>  setSearch(e.target.value) }
            />

            <InputSubmit type="submit">Search</InputSubmit>


        </Form>
    );
}
 
export default Browser;