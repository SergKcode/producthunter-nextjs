import React from 'react';
import styled from 'styled-components';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enGB } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';


const Product = styled.li`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;
const ProductDescription = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    :hover {
        cursor: pointer;
    }
`;

const TextDescription = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`

const Comments = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }
    img {
        width: 2rem;
        margin-right: 2rem;
    }
    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`;

const Img = styled.img`
    width: 200px;
`;

const Votes = styled.div`
    flex: 0 0 auto;
    text-align: center; 
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    div {
        font-size: 2rem;
    }
    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const ProductDetails = ({product}) => {

    const { id, comments, created, description, company, name, url, urlimage, votes } = product;


    return ( 
        <Product>
            <ProductDescription>
                <div>
                    <Image src={urlimage} width={500} height={200}/>
                </div>

                <div>
                    <Link href="/products/[id]" as={`/products/${id}`}>
                        <Title>{name}</Title>
                    </Link>
                    <TextDescription>{description}</TextDescription>
                    <Comments>
                        <div>
                            <Img src="/static/images/comment.png" />
                            <p>{comments.length} Comments</p>
                        </div>
                    </Comments>
                    
                    <p>Published: { formatDistanceToNow( new Date(created), {locale: enGB} )} </p>
                </div>
            </ProductDescription>

            <Votes>
                <div> &#9650; </div>
                <p>{votes}</p>
            </Votes>
        </Product>
     );
}
 
export default ProductDetails;