import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const Programs = () => {
    const [programs, setprograms] = useState([]);
    useEffect(() => {
        // Call your API to get programs here
        // For this example, we'll use a placeholder API endpoint
        fetch('http://127.0.0.1:8000/api/shop/programs')
            .then(response => response.json())
            .then(data => setprograms(data))
            .catch(error => console.error('Error fetching programs:', error));
    }, []);

    return (
        <div class="contact-container">
            <Header />

            <div class="about-content">
                <h2>Book Online</h2>
            </div>
            <div class="container">
                <div class="card">
                    <div className='row'>
                        <div class="col-6">
                            <img src="assets/about1.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col-6">
                            <div class="card-body text-center">
                                <h3 className='text-center mb-4'>Private Classes</h3>
                                <p class="card-text mb-5">Private, semi-private and group lessons are available with our teaching pros. </p>
                                <h6 class="card-text mb-5"><b>Available to all levels.</b></h6>
                                <div class="mt-4 text-center">
                                    <a href="#" class="btn-submit">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div className='row'>
                        <div class="col-6">
                            <img src="assets/about2.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col-6">
                            <div class="card-body text-center">
                                <h3 className='text-center mb-4'>Private Classes</h3>
                                <p class="card-text mb-5">Private, semi-private and group lessons are available with our teaching pros. </p>
                                <h6 class="card-text mb-5"><b>Available to all levels.</b></h6>
                                <div class="mt-4 text-center">
                                    <a href="#" class="btn-submit">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div className='row'>
                        <div class="col-6">
                            <img src="assets/about1.png" class="card-img-top" alt="..." />
                        </div>
                        <div class="col-6">
                            <div class="card-body text-center">
                                <h3 className='text-center mb-4'>Private Classes</h3>
                                <p class="card-text mb-5">Private, semi-private and group lessons are available with our teaching pros. </p>
                                <h6 class="card-text mb-5"><b>Available to all levels.</b></h6>
                                <div class="mt-4 text-center">
                                    <a href="#" class="btn-submit">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs