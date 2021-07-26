import React from "react";
import styled from 'styled-components';

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
    background-size: 4rem;
    background-image: url('/static/images/search.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover {
        cursor: pointer;
    }

`
const Browser = () => {

    return (  
        <Form>
            <input type= "text"/>
            <button type="submit">Search</button>

            <InputText 
                type="text" 
                placeholder="Search Products"
                onChange={console.log("input")}
            />

            <InputSubmit type="submit">Search</InputSubmit>


        </Form>
    );
}
 
export default Browser;