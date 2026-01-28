import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <section className="login-section">
            <div className="login-bg-blur" style={{ backgroundImage: `url('/alieus_bgimage.jpeg')` }}></div>
            <div className="login-bg-overlay"></div>

            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <Link to="/" className="back-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                            Back to Home
                        </Link>
                        <img src="/fav.webp" alt="AHF Logo" className="login-logo" />
                        <h1>Welcome to AHF</h1>
                        <p>Sign in to your account to continue</p>
                    </div>

                    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#!" className="forgot-password">Forgot Password?</a>
                        </div>

                        <button type="submit" className="login-btn">
                            Sign In
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <div className="social-login">
                            <button type="button" className="social-btn google">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        <p className="signup-link">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
