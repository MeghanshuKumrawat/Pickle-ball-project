import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2, setPassword2] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegistration = async () => {
        try {
            setLoading(true);
            setEmailError('');
            setPasswordError('');

            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
            const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, password2 }),
            });

            if (response.ok) {
                // Handle successful login
                const data = await response.json();

                console.log('Registration successful');
                console.log(data);

                navigate('/sign-in');
            } else {
                // Handle login error
                const data = await response.json();
                if (data.email) {
                    setEmailError(data.email[0]);
                }

                if (data.password) {
                    setPasswordError(data.password[0]);
                }
                setError("An error occurred. Please try again later.")
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
            <img src="/assets/logo.png" class="logo" />
        </nav>

        <div class="login-content">
            <h2>Sign up</h2>
            <div class="auth-form">
                <input type="email" name="" id="InputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p className="text-danger error-message">{emailError}</p>}
                <input type="text" name="" id="InputUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <input type="password" name="" id="InputPassword2" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <a href="#" class="btn-primary"  onClick={handleRegistration} disabled={loading}>{loading ? 'Signing up...' : 'Sign up'}</a>
            <Link to={'/sign-in'} className='links'>Already a member? Log In</Link>
            {/* <a href="#" class="links">Already  have an account ?</a> */}
        </div>
    </div>
    )
}


export default Register