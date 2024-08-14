import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
    const { products, fetchProducts } = useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - ${product.price} - {product.stock} in stock
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
