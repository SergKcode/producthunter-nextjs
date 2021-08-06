import React from 'react'
import Layout from '../components/layout/Layout'

import ProductDetails from '../components/layout/productDetails';
import useProducts from '../hooks/useProducts';



const Home=()=> {

  const { products } = useProducts('created');

  return (
    <div>
      <Layout>
        <div className="list-products">
            <div className="container">
              <ul className="bg-white">
                  {products.map(product => (
                      <productDetails
                          key={product.id}
                          product={product}
                      />
                  ))}
              </ul>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home