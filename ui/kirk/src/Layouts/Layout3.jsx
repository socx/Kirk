import React from 'react';
import { connect } from 'react-redux';

import Routes from '../Routes';
import { default as AppHeader } from './AppHeaders/Header3';
import { default as AppFooter } from './AppFooters/Footer3';
import * as selectors from './store/selectors'

import '../assets/layouts/layout3/css/default.css';
import '../assets/layouts/layout3/css/layout.css';
import '../assets/layouts/layout3/css/custom.css';


class Layout3 extends React.Component{
  componentDidMount(){
      const token = localStorage.getItem('auth')
      //TODO : Validate token
      !token && this.props.history.push('/')
  }
  
  render () {
      return(
      <div className='page-wrapper'>

        <div className='page-wrapper-row'>
          <div className='page-wrapper-top'>
          <AppHeader hidden={!this.props.showHeader}/>
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
  showHeader : selectors.show(state),
  showFooter : selectors.show(state)
})

export default connect(mapStateToProps, null)(Layout3);
