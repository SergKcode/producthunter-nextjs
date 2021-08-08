import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';

import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';

import { FirebaseContext } from '../firebase/index';

import Error404 from '../components/layout/404';

// validations
import useValidation from '../hooks/useValidation';
import validateCreateProduct from '../validation/validateCreateProduct';



const H1 = styled.h1`
  color:${props => props.theme.colors.secondary};
`
const STATE_INICIAL = {
  name: '',
  company: '',
  image: '',
  url: '',
  description: ''
}
const NewProduct = () => {

  // image state
  const [imageame, setName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [ progress, setProgress] = useState(0);
  const [urlimage, setUrlImage] = useState('');

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(STATE_INICIAL, validateCreateProduct, createProduct);

  const { name, company, image, url, description } = values;

  // hook de routing para redireccionar
  const router = useRouter();

  // context con las operaciones crud de firebase
  const { user, firebase } = useContext(FirebaseContext);

  async function createProduct() {

    // si el user no esta autenticado llevar al login
    if(!user) {
      return router.push('/login');
    }

    // crear el objeto de nuevo product 
    const product = {
        name, 
        company, 
        url, 
        urlimage,
        description,
        votes: 0,
        comments: [],
        created: Date.now(), 
        creator: {
          id: user.uid,
          name: user.displayName
        }, 
        hasVoted: []
    }

    // insertarlo en la base de datos
    firebase.db.collection('products').add(product);

    return router.push('/');

  }


  const handleUploadStart = () => {
      setProgress(0);
      setUploading(true);
  }

  const handleProgress = progress => setProgress({ progress });

  const handleUploadError = error => {
      setUploading(error);
      console.error(error);
  };

  const handleUploadSuccess = name => {
      setProgress(100);
      setUploading(false);
      setName(name)
      firebase
          .storage
          .ref("products")
          .child(name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrlImage(url);
          } );
  };

  return (
    <div>
      <Layout>
        { !user ? <Error404 /> : (
          <>
            <H1>New product</H1>
            <Form
              onSubmit={handleSubmit}
              noValidate
            >

              <fieldset>
                <legend>General Information </legend>
            
                <Field>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Product name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.name && <Error>{errors.name}</Error> }
    
                <Field>
                    <label htmlFor="company">Company</label>
                    <input 
                        type="text"
                        id="company"
                        placeholder="Company Name"
                        name="company"
                        value={company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.company && <Error>{errors.company}</Error> }
    
                <Field>
                    <label htmlFor="image">Image</label>
                    <FileUploader 
                        accept="image/*"
                        id="image"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage.ref("products")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                    />
                </Field>
                <Field>
                    <label htmlFor="url">URL</label>
                    <input 
                        type="url"
                        id="url"
                        name="url"
                        placeholder="URL de tu product"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.url && <Error>{errors.url}</Error> }

              </fieldset>

              <fieldset>
                <legend>About your product</legend>

                <Field>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.description && <Error>{errors.description}</Error> }
              </fieldset>

              
                

                {error && <Error>{error} </Error>}
    
                <InputSubmit 
                  type="submit"
                  value="Create product"
                />
            </Form>
          </>
        ) }
        
      </Layout>
    </div>
  )
}

export default NewProduct