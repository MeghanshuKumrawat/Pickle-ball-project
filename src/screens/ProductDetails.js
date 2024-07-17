import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import FloatingCartButton from '../components/FloatingCartButton';

const ProductDetails = () => {
    const baseURL = 'http://127.0.0.1:8000/';
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    const addToCart = async () => {
        // Assuming you have an API endpoint for fetching product details
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/shop/carts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ "product": id, "quantity": quantity }),
            });
    
            if (response.ok) {
                try {
                    const responseData = await response.json();
                    console.log(responseData); // Logging the parsed JSON data
                    alert("Product added to cart!");
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                }
            } else {
                try {
                    const errorData = await response.json();
                    console.error('Error adding product to cart:', errorData);
                } catch (jsonError) {
                    console.error('Error parsing error JSON:', jsonError);
                }
    
                // Assuming you have a `navigate` function defined elsewhere in your code
                navigate('/sign-in');
            }
        } catch (fetchError) {
            console.error('Error fetching data:', fetchError);
        }
    };
    
    useEffect(() => {
        // Assuming you have an API endpoint for fetching product details
        fetch(`http://127.0.0.1:8000/api/shop/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div class="contact-container">
            <Header />

            <div class="about-content">
                <h2>Shop</h2>
            </div>
            <div class="container">
                <div class="card">
                    <div class="row">
                        <div class="col-6">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    {product.images.map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <img src={`${baseURL}/${image.image}`} className="d-block w-100" alt={`Product Image ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <p class="card-text">{product.title}</p>
                                <h5 class="card-title">${product.price}</h5>
                                <p>Qty</p>
                                <div className="quantity-input">
                                    <a className='btn btn-outline-dark' onClick={handleDecrement}>-</a>
                                    <input type="number" className='form-control-sm' style={{ width: '50px', border: 'none', outline: 'none' }} value={quantity} readOnly />
                                    <a className='btn btn-outline-dark' onClick={handleIncrement}>+</a>
                                </div>
                                <div class="mt-4 text-center">
                                    <a href="#" onClick={addToCart} class="btn-submit">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FloatingCartButton />
        </div>
        // <div class="contact-container">

        //     <div class="about-content">
        //         <h2>Shop</h2>
        //     </div>
        //     <div class="container">
        //         <div class="card">
        //             <div class="row">
        //                 <div class="col-6">
        //                     <img src={`${baseURL}/${product.image}`} class="card-img-top" alt={product.title} />

        //                 </div>
        //                 <div class="col-6">
        //                     <div class="card-body">
        //                         <p class="card-text">{product.title}</p>
        //                         <h5 class="card-title">${product.price}</h5>
        //                         <div class="mt-4 text-center">
        //                             <a href="#" class="btn-submit">View</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductDetails;
