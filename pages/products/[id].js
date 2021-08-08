import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enGB } from 'date-fns/locale';
import { FirebaseContext } from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import styled from 'styled-components';
import { Field, InputSubmit } from '../../components/ui/Form';
import Button from '../../components/ui/Button';

const H1 = styled.h1`
    text-align: center;
    margin-top: 5rem;
`

const H2 = styled.h2`
    margin: 2rem 0;
`

const P = styled.p`
    text-align: center;
    
`

const Li = styled.li`
    border: 1px solid #e1e1e1;
    padding: 2rem;
    
`


const Div = styled.div`
     margin-top: 5rem;
    
`

const Span = styled.span`
    font-weight:bold;
    
`


const ProductContainer = styled.div`
   @media (min-width:768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
   }
`;
const ProductCreator = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`

const Product = () => {

    // state component
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [comment, setComment ] = useState({});
    const [queryDB, setQueryDB ] = useState(true);

    // Routing to get the current id
    const router = useRouter();
    const { query: { id }} = router;


    const { firebase, user } = useContext(FirebaseContext);

    useEffect(() => {
        if(id && queryDB) {
            const getProduct = async () => {
                const productQuery = await firebase.db.collection('products').doc(id);
                const product = await productQuery.get();
                if(product.exists) {
                   setProduct( product.data() );
                   setQueryDB(false);
                } else {
                    setError( true );
                    setQueryDB(false);
                }
            }
            getProduct();
        }
    }, [id]);

    if(Object.keys(product).length === 0 && !error)  return 'Loading...';

    const { comments, created, description, company, name, url, urlimage, votes, creator, hasVoted } = product;

    // admin and validate votes
    const voteProduct = () => {
        if(!user) {
            return router.push('/login')
        }

        // get and add a new vote
        const newTotal = votes + 1;

        //check if the current user has voted
        if(hasVoted.includes(user.uid) ) return;

        // save the user ID who has voted
        const newHasVoted = [...hasVoted, user.uid];

        //  update DB
        firebase.db.collection('products').doc(id).update({ 
            votes: newTotal, 
            hasVoted: newHasVoted 
        })

        // Update state
        setProduct({
            ...product,
            votes: newTotal
        })

        setQueryDB(true); // There is a vote, check database
    }

    // Create comments function
    const commentChange = e => {
        setComment({
            ...comment,
            [e.target.name] : e.target.value
        })
    }

    // Identify if it is the product creator
    const isCreator = id => {
        if(creator.id == id) {
            return true;
        }
    }

    const addComment = e => {
        e.preventDefault();

        if(!user) {
            return router.push('/login')
        }

        // extra info comment
        comment.userId = user.uid;
        comment.userName = user.displayName;

        // get copy of the comments and add to the array
        const newComments = [...comments, comment];

        // UPDATE BD
        firebase.db.collection('products').doc(id).update({
            comments: newComments
        })

        // Update state
        setProduct({
            ...product,
            comments: newComments
        })

        setQueryDB(true); // query the DB if there is a comment
    }

    // function to check if the product creator is the same that authenticated
    const canDelete = () => {
        if(!user) return false;

        if(creator.id === user.uid) {
            return true
        }
    }

    //delite product from DB
    const deleteProduct = async () => {

        if(!user) {
            return router.push('/login')
        }

        if(creator.id !== user.uid) {
            return router.push('/')
        }

        try {
            await firebase.db.collection('products').doc(id).delete();
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <Layout>
            <>
                { error ? <Error404 /> : (
                    <div className="container">
                        <H1>{name} </H1>

                        <ProductContainer>
                            <div>
                                <p>Publicado hace: { formatDistanceToNow( new Date(created), {locale: enGB } )} </p>
                                <p>Por: {creator.name} de {company} </p>
                                <img src={urlimage} />
                                <p>{description}</p>

                                { user && (
                                    <>
                                    <h2>Add your comment</h2>
                                    <form
                                        onSubmit={addComment}
                                    >
                                        <Field>
                                            <input
                                                type="text"
                                                name="message"
                                                onChange={commentChange}
                                            />
                                        </Field>
                                        <InputSubmit
                                            type="submit"
                                            value="Add comment"
                                        />
                                    </form>
                                    </>
                                ) }

                                <H2>comments</H2>

                                {comments.length === 0 ? "There are no comments" : (
                                    <ul>
                                        {comments.map((comment, i) => (
                                            <Li 
                                                key={`${comment.userId}-${i}`}
                                               
                                            >
                                                <p>{comment.message}</p>
                                                <p>Written by: 
                                                    <Span>
                                                    {''} {comment.userName}
                                                    </Span>
                                                </p>
                                                { isCreator( comment.userId ) && <ProductCreator>Is creator</ProductCreator> }
                                            </Li>
                                        ))}
                                    </ul>
                                )}
                                
                            </div>

                            <aside>
                                <a  href={url}><Button
                                    target="_blank"
                                    bgColor="true"
                                  
                                >Visit URL</Button></a>

                            

                                <Div>
                                    <P>{votes} votes</P>

                                    { user && (
                                        <Button
                                            onClick={voteProduct}
                                        >
                                            Vote
                                        </Button>
                                    ) }
                                </Div>
                            </aside>
                        </ProductContainer>

                        { canDelete() && 
                            <Button
                                onClick={deleteProduct}
                            >Delete Product</Button>
                        }
                    </div>
                ) }

                
            </>
        </Layout>
      );
}
 
export default Product;