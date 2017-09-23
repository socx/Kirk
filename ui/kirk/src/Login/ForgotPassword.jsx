import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './login-3.css'
import logo from '../assets/img/logo-default.png';
import { getTokenUserDetails, submitForgottenPasswordEmail } from './store/actions'

const ForgotPassword = (props) => (
    <div className='login'>
        <div className='logo'>
            <a>
                <img src={logo} alt='logo' className='logo-default' /> 
            </a>
        </div>
        <div className='content'>
            <form className='login-form'>
                <h3 className='font-blue'>Forgotten your password?</h3>
                <div className={`alert alert-danger ${!props.errorMessage && 'display-hide'}`}>
                    <button className='close' data-close='alert'></button>
                    <span> {props.errorMessage} </span>
                </div>
                <div className={`alert alert-success ${!props.message && 'display-hide'}`}>
                    <button className='close' data-close='alert'></button>
                    <span> {props.message} </span>
                </div>
                <div className={`${props.message && 'display-hide'}`}>
                <p> Enter your email address below, and we’ll help you create a new password. </p>
                <div className='form-group'>
                    <input className='form-control placeholder-no-fix' type='text' placeholder='Email' ref={(input) => this.emailInput = input} /> 
                </div>
                <div className='form-actions'>
                    <button type='button' className='btn blue btn-outline' onClick={() => props.goBack()}>Back</button>
                    <button type='button' className='btn blue pull-right' onClick={() => props.submitForgottenPasswordEmail(this.emailInput.value)} >Submit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
)

const mapStateToProps  = state => ({
    errorMessage : state.login.errorMessage,
    message : state.login.message,
    isProcessing : state.login.isProcessing,
    userDetails : state.login.userDetails
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTokenUserDetails,
    submitForgottenPasswordEmail,
    goBack : () => push('/')
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);