import React from 'react';
import logo from '../../assets/img/logo-default.png';

const Header3  = (props) => (
    <div className={`page-header ${props.hidden ? 'hidden' : ''}`}>
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
                        <li className='dropdown dropdown-user dropdown-dark menu-dropdown classic-menu-dropdown' aria-haspopup='true'>
                            <a className='dropdown-toggle' data-toggle='dropdown' data-hover='dropdown' data-close-others='true'>
                                <i className='icon-user'></i>
                                <span className='username username-hide-mobile'>User</span>
                            </a>
                            <ul className='dropdown-menu dropdown-menu-default'>
                                <li aria-haspopup='true'>
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
                    </ul>
                </div>
            </div>
        </div>

        <div className='page-header-menu'>
            <div className='container'>
                <div className='hor-menu  '>
                    <ul className='nav navbar-nav'>
                        <li aria-haspopup='true' className='menu-dropdown classic-menu-dropdown '>
                            <a> Dashboard
                                <span className='arrow'></span>
                            </a>
                            <ul className='dropdown-menu pull-left'>
                                <li aria-haspopup='true' className=' '>
                                    <a className='nav-link  '>
                                        <i className='icon-bar-chart'></i> Default Dashboard
                                        <span className='badge badge-success'>1</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li aria-haspopup='true' className='menu-dropdown classic-menu-dropdown '>
                            <a> Contacts
                                <span className='arrow'></span>
                            </a>
                        </li>
                        <li aria-haspopup='true' className='menu-dropdown classic-menu-dropdown '>
                            <a> Finance
                                <span className='arrow'></span>
                            </a>
                        </li>
                        <li aria-haspopup='true' className='menu-dropdown classic-menu-dropdown '>
                            <a> Misc
                                <span className='arrow'></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)


export default Header3