import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../components/Header'

const Cart = () => {
    const baseURL = 'http://127.0.0.1:8000/';
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const linkElement = document.querySelector('.btn-secondary.active');
    if (linkElement) {
        linkElement.classList.remove('active');
    }
    useEffect(() => {
        // Call your API to get products here
        // For this example, we'll use a placeholder API endpoint
        fetch('http://127.0.0.1:8000/api/shop/carts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching cart products:', error));
    }, []);

    const calculateTotal = () => {
        let total = 0;

        products.forEach((product) => {
            const price = product.product.price || 0;
            const quantity = product.quantity || 0;
            total += price * quantity;
        });

        return total;
    };

    const removeFromCart = async (cartId) => {
        // Assuming you have an API endpoint for fetching product details
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/shop/carts/${cartId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            if (response.ok) {
                try {
                    const responseData = await response.json();
                    console.log(responseData); // Logging the parsed JSON data
                    alert("Product added to cart!");
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                }
                window.location.reload();
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
    return (
        <div class="contact-container">
            <Header />

            <div class="about-content">
                <h2>Cart</h2>
            </div>
            <div class="container">
                <div class="row">
                    {products.length === 0 ?
                        <h3 className='text-center p-5'>Your cart is empty</h3>
                        : products.map(product => (
                            <><div class="col-4">
                                <div class="card">
                                    <img src={`${baseURL}/${product.product.image}`} class="card-img-top" alt={product.product.title} />
                                </div>
                            </div><div class="col-8">
                                    <div class="card cart">
                                        <div class="card-body">
                                            <div class="remove">
                                                <p class="card-text">{product.product.title}</p>
                                                <b><a onClick={() => removeFromCart(product.id)}>&#128465;</a></b>
                                            </div>
                                            <h5 class="card-title">${product.product.price}</h5>
                                            <h5 class="card-title mt-4"><b>Qty {product.quantity}</b></h5>

                                            <div class="mt-5 text-center">
                                                <NavLink to={`/shop/products/${product.product.id}`} className='btn-submit'>View</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    <hr />
                    <div class="total">
                        <h5>Total</h5><h5>${calculateTotal()}</h5>
                    </div>
                    <div class="mt-5 text-center total">
                        <NavLink to={`/shop/`} className='btn-secondary' activeClassName=''>Continue Shopping</NavLink>
                        <NavLink to={`/shop/cart/checkout`} className='btn-submit'>Checkout</NavLink>
                        {/* <a href="#" class="btn-submit">Checkout</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart