import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';  // Add your CSS styling here
import AxiosInstance from './Axios';
import { useAuth } from '../AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('/accounts/auth/login/', { username, password });
            if (response.data && response.data.key) {
                localStorage.setItem('token', response.data.key);  // Save the token in localStorage

                console.log('Token saved:', response.data.key);
                console.log("LOCAL STORAGE GET ITEM: ",localStorage.getItem('token'));
                login(localStorage.getItem('token'));  // Update the authentication context
                navigate('/home');  // Redirect to home page
            } else {
                throw new Error('Invalid response structure');
            }
        } catch (error) {
            setError('Invalid credentials');
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="login-container">
            <h1 className="welcome-message">WELCOME TO PROJECT MANAGER APP!</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p className="signup-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
