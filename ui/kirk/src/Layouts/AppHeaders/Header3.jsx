import React from 'react';
import logo from '../../assets/img/logo-default.png';

const Header3  = (props) => (
    <div className='page-header'>
        <div className='page-header-top'>
            <div className='container'>
                <div className='page-logo'>
                    <a href='index.html'>
                        <img src={logo} alt='logo' className='logo-default' />
                    </a>
                </div>
                <a href='page_user_profile_1.html' className='menu-toggler'> </a>
                <div className='top-menu'>
                    <ul className='nav navbar-nav pull-right'>
                        <li className='dropdown dropdown-user dropdown-dark'>
                            <a href='page_user_profile_1.html' className='dropdown-toggle' data-toggle='dropdown' data-hover='dropdown' data-close-others='true'>
                                <i className='icon-user'></i>
                                <span className='username username-hide-mobile'>Nick</span>
                            </a>
                            <ul className='dropdown-menu dropdown-menu-default'>
                                <li>
                                    <a href='page_user_profile_1.html'>
                                        <i className='icon-user'></i> My Profile </a>
                                </li>
                                <li>
                                    <a href='app_calendar.html'>
                                        <i className='icon-calendar'></i> My Calendar </a>
                                </li>
                                <li>
                                    <a href='app_inbox.html'>
                                        <i className='icon-envelope-open'></i> My Inbox
                                        <span className='badge badge-danger'> 3 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='app_todo_2.html'>
                                        <i className='icon-rocket'></i> My Tasks
                                        <span className='badge badge-success'> 7 </span>
                                    </a>
                                </li>
                                <li className='divider'> </li>
                                <li>
                                    <a href='page_user_lock_1.html'>
                                        <i className='icon-lock'></i> Lock Screen </a>
                                </li>
                                <li>
                                    <a href='page_user_login_1.html'>
                                        <i className='icon-key'></i> Log Out </a>
                                </li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-extended quick-sidebar-toggler'>
                            <span className='sr-only'>Toggle Quick Sidebar</span>
                            <i className='icon-logout'></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='page-header-menu'>
            <div className='container'>
                <div className='hor-menu  '>
                    <ul className='nav navbar-nav'>
                        <li aria-haspopup='true' className='menu-dropdown classic-menu-dropdown '>
                            <a href='index.html'> Dashboard
                                <span className='arrow'></span>
                            </a>
                            <ul className='dropdown-menu pull-left'>
                                <li aria-haspopup='true' className=' '>
                                    <a href='index.html' className='nav-link  '>
                                        <i className='icon-bar-chart'></i> Default Dashboard
                                        <span className='badge badge-success'>1</span>
                                    </a>
                                </li>
                                <li aria-haspopup='true' className=' '>
                                    <a href='dashboard_2.html' className='nav-link  '>
                                        <i className='icon-bulb'></i> Dashboard 2 </a>
                                </li>
                                <li aria-haspopup='true' className=' '>
                                    <a href='dashboard_3.html' className='nav-link  '>
                                        <i className='icon-graph'></i> Dashboard 3
                                        <span className='badge badge-danger'>3</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)


export default Header3