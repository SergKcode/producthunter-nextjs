import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/layout/Layout'
import ProductDetails from '../components/layout/productDetails';
import useProducts from '../hooks/useProducts';


const Search =()=> {
  const router = useRouter();
  const { query: { q }} = router;

  // All products
  const {products } = useProducts('created');
  const [ result, setResult ] = useState([]);

  useEffect(() => {
      const search = q.toLowerCase();
      const filter = products.filter(product => {
        return (
          product.name.toLowerCase().includes(search) || 
          product.description.toLowerCase().includes(search)
        )
      });
      setResult(filter);
      
  }, [ q, products ]);


  return (
    <div>
      <Layout>
        <div className="listado-products">
            <div className="contenedor">
              <ul className="bg-white">
                  {result.map(product => (
                      <ProductDetails
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

export default Search