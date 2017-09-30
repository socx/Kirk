import React from 'react';
import { connect } from 'react-redux';

import Routes from '../Routes';
import { default as AppHeader } from './AppHeaders/Header3';
import { default as AppFooter } from './AppFooters/Footer3';

import '../assets/layouts/layout3/css/default.css';
import '../assets/layouts/layout3/css/layout.css';
import '../assets/layouts/layout3/css/custom.css';

import logo from '../assets/img/logo-default.png';

class Layout3 extends React.Component{
  componentDidMount(){
    this.checkAccess()
  }

  componentDidUpdate(){
    this.checkAccess()
  }

  checkAccess(){
    const token = localStorage.getItem('auth')
    //TODO : Validate token
    !token && this.props.history.push('/')
  }
  
  navigate(url){
    this.props.history.push(url)
  }

  render () {
    return(
      <div className='page-wrapper'>

        <div className='page-wrapper-row'>
          <div className='page-wrapper-top'>
          <AppHeader 
            hidden={!this.props.showHeader}
            navigateTo ={(url) => this.navigate(url)}
            logo={logo}
            history={this.props.history}
          />
          </div>
        </div>

        <div className='page-wrapper-row full-height'>
          <div className='page-wrapper-middle'>
            <div className='page-container'>
              <div className='page-content-wrapper'>
                <div className='page-content'>
                <div className='container'>
                  <Routes/>
                </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='page-wrapper-row'>
          <div className='page-wrapper-bottom'>
            <AppFooter hidden={!this.props.showFooter}/>
          </div>
        </div>
        
      </div>
    )
  }
}


const mapStateToProps  = state => ({
  showHeader : ['/', '/login', '/forgotPassword', '/resetPassword'].indexOf(state.routing.location.pathname) === -1,
  showFooter : ['/', '/login', '/forgotPassword', '/resetPassword'].indexOf(state.routing.location.pathname) === -1
})


export default connect(mapStateToProps, null)(Layout3);
