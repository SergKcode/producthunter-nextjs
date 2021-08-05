import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';

import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';

import { FirebaseContext } from '../firebase';

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

    // Image state
    const [imageame, setImageName] = useState('');
    const [uploading, setUploading] = useState(false);
    const [ progress, setProgress ] = useState(0);
    const [urlImage, setUrlImage] = useState('');
  
    const [ error, setError] = useState(false);
  
    const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation((STATE_INICIAL, validateCreateProduct, createProduct))
  
    const { name, company, image, url, description } = values;
  
    // routing hook to redirect
    const router = useRouter();
  
    // context firebase
    const { user, firebase } = useContext(FirebaseContext);
  
    async function createProduct() {
  
      // redirect to login if user is not authenticated
      if(!user) {
        return Router.push('/login');
      }
  
      // Create product object
      const producto = {
          name, 
          company, 
          url, 
          urlImage,
          description,
          votos: 0,
          comentaries: [],
          created: Date.now(), 
          creator: {
            id: user.uid,
            name: user.displayName
          }, 
          hasVoted: []
      }
  
      // insert into database
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
        setImageName(name)
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
              <h1
              >New product</h1>
              <Form
                onSubmit={handleSubmit}
                noValidate
              >
  
                <fieldset>
                  <legend>General information</legend>
              
                  <Field>
                      <label htmlFor="name">Name</label>
                      <input 
                          type="text"
                          id="name"
                          placeholder="product name"
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
                          //to select the format image
                          accept="image/*"
                          id="image"
                          name="image"
                          //to give a random file name 
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
                  <legend>About your Product</legend>
  
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
                    value="Create Product"
                  />
              </Form>
            </>
          ) }
          
        </Layout>
      </div>
    )
}

export default NewProduct