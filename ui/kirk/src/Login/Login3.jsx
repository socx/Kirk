import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './login-3.css'
import logo from '../assets/img/logo-default.png';


const Login3 = (props) => (
    <div className='login'>
        <div className='logo'>
            <a>
                <img src={logo} alt='logo' className='logo-default' /> 
            </a>
        </div>
        






        <div className='content'>
            <form className='login-form' action='index.html'>
                <h3 className='form-title'>Login to your account</h3>
                <div className='alert alert-danger display-hide'>
                    <button className='close' data-close='alert'></button>
                    <span> Enter any username and password. </span>
                </div>
                <div className='form-group'>
                    <label className='control-label visible-ie8 visible-ie9'>Username</label>
                    <div className='input-icon'>
                        <i className='fa fa-user'></i>
                        <input className='form-control placeholder-no-fix' type='text' placeholder='Username' name='username' /> </div>
                </div>
                <div className='form-group'>
                    <label className='control-label visible-ie8 visible-ie9'>Password</label>
                    <div className='input-icon'>
                        <i className='fa fa-lock'></i>
                        <input className='form-control placeholder-no-fix' type='password' placeholder='Password' name='password' /> </div>
                </div>
                <div className='form-actions'>
                    <label className='rememberme mt-checkbox mt-checkbox-outline'>
                        <input type='checkbox' name='remember' value='1' /> Remember me
                        <span></span>
                    </label>
                    <button type='submit' className='btn green pull-right'> Login </button>
                </div>
                <div className='login-options hidden'>
                    <h4>Or login with</h4>
                    <ul className='social-icons'>
                        <li>
                            <a className='facebook' data-original-title='facebook' href='index.html'> </a>
                        </li>
                        <li>
                            <a className='twitter' data-original-title='Twitter' href='index.html'> </a>
                        </li>
                        <li>
                            <a className='googleplus' data-original-title='Goole Plus' href='index.html'> </a>
                        </li>
                        <li>
                            <a className='linkedin' data-original-title='Linkedin' href='index.html'> </a>
                        </li>
                    </ul>
                </div>
                <div className='forget-password'>
                    <h4>Forgot your password ?</h4>
                    <p> no worries, click
                        <a href='index.html' id='forget-password'> here </a> to reset your password. </p>
                </div>
                <div className='create-account'>
                    <p> Don't have an account yet ?&nbsp;
                        <a href='index.html' id='register-btn'> Create an account </a>
                    </p>
                </div>
            </form>
        </div>











    </div>

)

const mapStateToProps  = state => ({
    name : state.home.name,
    children : state.home.children,
    isFetching : state.home.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loginClicked: () => push('/home')
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Login3);