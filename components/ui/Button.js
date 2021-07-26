import styled, {css} from "styled-components";

const Button = styled.button`
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin: 2rem auto; 
    text-align: center;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};

    ${props=>props.bgColor && css`
        background-color:${props => props.theme.colors.red};
        color:${props => props.theme.colors.white};
            
    `}
    
    &:last-of-type {
        margin-right:0;
    }
    &:hover {
        cursor: pointer;
    }
`;

export default Button;