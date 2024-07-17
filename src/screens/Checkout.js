import React, {useState, useEffect} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import Header from '../components/Header'

const Checkout = () => {
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
    return (
        <div class="contact-container">
            <Header />

            <div class="about-content">
                <h2>Checkout</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h5>Delivery Details</h5>
                        <div class="py-5">
                            <input class="my-2" type="text" name="" id="" placeholder="Country" />
                            <input class="my-2" type="text" name="" id="" placeholder="Address*" />
                            <input class="my-2" type="text" name="" id="" placeholder="Region*" />
                            <input class="my-2" type="text" name="" id="" placeholder="Zip / Postal code*" />
                        </div>
                        <div class="mt-5 text-center total">
                        <NavLink to={`/shop/`} className='btn-secondary' activeClassName=''>Continue Shopping</NavLink>
                        <NavLink to={`/shop/cart/checkout`} className='btn-submit'>Payment</NavLink>
                        </div>

                    </div>
                    <div class="col-5">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h6 class="card-titl text-primary-m">Order summary</h6>
                                <NavLink to={'/shop/cart'}><h6 class="card-tite text-secondary-m">Edit Cart</h6></NavLink>
                            </div>
                            <div class="card-body">
                                {products.map(product => (
                                    <div class="d-flex justify-content-between">
                                        <h6>{product.product.title} | {product.quantity}</h6>
                                        <h6>${product.product.price}</h6>
                                    </div>
                                ))
                                }
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between py-3">
                                    <h6>Subtotal</h6>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6>Delivery</h6>
                                    <h6>Free</h6>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6>Sales Tax</h6>
                                    <h6>$0.00</h6>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between">
                                    <h6>Total</h6>
                                    <h6>${calculateTotal()}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>

    )
}

export default Checkout