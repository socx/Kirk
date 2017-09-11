import React from 'react';
import logo from '../assets/img/logo.png';

const AppHeader  = (props) => (
    <div className='page-header navbar navbar-fixed-top'>
        <div className='page-header-inner'>
            
        <div className='page-logo'>
            <a href='index.html'>
                <img src={logo} alt='logo' className='logo-default' /> 
            </a>
            <div className='menu-toggler sidebar-toggler'>
                <span></span>
            </div>
        </div>
            
            <a className='menu-toggler responsive-toggler' data-toggle='collapse' data-target='.navbar-collapse'>
                <span></span>
            </a>
            <div className='top-menu'>
            </div>
        </div>
    </div>
)


export default AppHeader