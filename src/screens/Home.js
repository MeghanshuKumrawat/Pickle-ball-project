import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="home-container">
            <Header />
            <div class="content">
                <h1>Carmen Sanz<br />pickleball</h1>
                <p>PASSION AND PURPOSE</p>
                <div class="btn-group">
                    <Link to={'/sign-up'} className='btn-primary'>Join Now !!</Link>
                    {/* <a href="#" class="btn-primary">Join Now !!</a> */}
                    <Link to={'/sign-in'} className='btn-secondary'>Log In</Link>
                    {/* <a href="#" class="btn-secondary">Log In </a> */}
                </div>
            </div>
        </div>
    )
}

export default Home