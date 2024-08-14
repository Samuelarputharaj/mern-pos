import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await axios.get('/api/products');
        setProducts(data);
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
