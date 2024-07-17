import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import FloatingCartButton from '../components/FloatingCartButton';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Call your API to get products here
        // For this example, we'll use a placeholder API endpoint
        fetch('http://127.0.0.1:8000/api/shop/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <div class="contact-container">
            <Header />

            <div class="about-content">
                <h2>Shop</h2>
            </div>
            <div class="container">
                <div class="row">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <FloatingCartButton />
        </div>
    )
}


export default Shop