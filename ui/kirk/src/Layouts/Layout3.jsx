import React from 'react';
import { connect } from 'react-redux';


import Routes from '../Routes';
import { default as AppHeader } from './AppHeaders/Header3';
import { default as AppFooter } from './AppFooters/Footer3';
import * as selectors from './store/selectors'

import '../assets/layouts/layout3/css/default.css';
import '../assets/layouts/layout3/css/layout.css';
import '../assets/layouts/layout3/css/custom.css';

const Layout3  = (props) => (
  <div className='page-wrapper'>

    <div className='page-wrapper-row'>
      <div className='page-wrapper-top'>
      <AppHeader hidden={!props.showHeader}/>
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
        <AppFooter hidden={!props.showFooter}/>
      </div>
    </div>
    
  </div>
)


const mapStateToProps  = state => ({
  showHeader : selectors.show(state),
  showFooter : selectors.show(state)
})

export default connect(mapStateToProps, null)(Layout3);
