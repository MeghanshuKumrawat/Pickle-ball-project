import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            setLoading(true);

            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
            const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Handle successful login
                const data = await response.json();

                console.log('Login successful');
                console.log(data);

                // Store the token in localStorage
                localStorage.setItem('token', data.access);

                navigate('/');
                window.location.reload();
            } else {
                // Handle login error
                setError('Invalid username or password');
            }
        } catch (error) {
            // Handle network or other errors
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div class="login-container">
            <nav>
                <img src="assets/logo.png" class="logo" />
            </nav>

            <div class="login-content">
                <h2>Log in</h2>
                <div class="auth-form">
                    {error && <p className="error-message">{error}, Please try again!</p>}
                    <input type="email" name="" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <a href="#">Forget Password ?</a>
                </div>
                <a href="#" class="btn-primary" onClick={handleLogin} disabled={loading}>{loading ? 'Signing in...' : 'Log in'}</a>
                <Link to={'/sign-up'} className='links'>New to this site? Sign Up</Link>
            </div>
        </div>
        // <AuthForm className='container'>
        //     <h3 className='my-4'>
        //         Sign in
        //         <small class="text-muted"> </small>
        //     </h3>
        //     <form>
        //         <div className="form-group">
        //             <label for="InputEmail">Email address</label>
        //             <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="form-group">
        //             <label for="InputPassword">Password</label>
        //             <input type="password" className="form-control" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <div className="form-group form-check">
        //             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        //             <label className="form-check-label" for="exampleCheck1">Check me out</label>
        //         </div>
        //         <button type="button" className="btn btn-primary" onClick={handleLogin} disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>

        //         {error && <p className="error-message">{error}</p>}
        //     </form>
        // </AuthForm>
    )
}


export default Login
