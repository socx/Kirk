import React from 'react';

import Routes from '../Routes';
import { default as AppHeader } from './AppHeaders/Header1';
import { default as AppFooter } from './AppFooters/Footer1';
import SideBar from './SideBar';

import '../assets/layouts/layout/css/default.css';
import '../assets/layouts/layout/css/layout.css';
import '../assets/layouts/layout/css/custom.css';

const Layout = () => (
        <div className='page-wrapper'>
            <AppHeader/>
            <div className='clearfix'> </div>
            <div className='page-container'>
                <SideBar/>
                <Routes/>
            </div>
            <AppFooter />
        </div>
)
export default Layout;
