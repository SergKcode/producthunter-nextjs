import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useProducts = order => {

    const [products, setProducts] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const getProducts = () => {

            //snapshot allows data manipulation
            firebase.db.collection('products').orderBy(order, 'desc').onSnapshot(manageSnaphot)
        }
        getProducts();
    }, []);

    function manageSnaphot(snapshot) {
        const products = snapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        });

        setProducts(products);
    }

    return {
        products
    }
}

export default useProducts;