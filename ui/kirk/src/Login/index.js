import React from 'react';

import './login.min.css'
import logo from '../assets/img/logo.png';


const Login = () => (
    <div className='login'>
        <div className="logo">
            <a>
                <img src={logo} alt='logo' className='logo-default' /> 
            </a>
        </div>
        <div className='content'>
            <form  className='login-form'>
            <h3 className="form-title font-green">Sign In</h3>
                <div className='alert alert-danger display-hide'>
                    <button className="close" data-close="alert"></button>
                    <span> Enter any username and password. </span>
                </div>
                <div className='form-group'>
                    <label className='control-label visible-ie8 visible-ie9'>Username</label>
                    <input className='form-control form-control-solid placeholder-no-fix' type='text' placeholder='Username' name='username' /> 
                </div>
                <div className='form-group'>
                    <label className='control-label visible-ie8 visible-ie9'>Password</label>
                    <input className='form-control form-control-solid placeholder-no-fix' type='password' placeholder='Password' name='password' /> 
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn green uppercase">Login</button>
                    <label className="rememberme check mt-checkbox mt-checkbox-outline">
                        <input type="checkbox" name="remember" value="1" />Remember
                        <span></span>
                    </label>
                    <a id="forget-password" className="forget-password">Forgot Password?</a>
                </div>
                <div className="login-options">
                    <h4>Or login with</h4>
                    <ul className="social-icons">
                        <li>
                            <a className="social-icon-color facebook" data-original-title="facebook" >&nbsp;</a>
                        </li>
                        <li>
                            <a className="social-icon-color twitter" data-original-title="Twitter" >&nbsp;</a>
                        </li>
                        <li>
                            <a className="social-icon-color googleplus" data-original-title="Goole Plus" >&nbsp;</a>
                        </li>
                        <li>
                            <a className="social-icon-color linkedin" data-original-title="Linkedin" >&nbsp;</a>
                        </li>
                    </ul>
                </div>
                <div className="create-account">
                    <p>
                        <a id="register-btn" className="uppercase">Create an account</a>
                    </p>
                </div>
            </form>
            
        </div>
        <div className='copyright'>2017 &copy; Kirk - Socx Solutions</div>
    </div>

)

export default Login;