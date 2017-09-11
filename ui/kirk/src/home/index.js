
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getData } from './store/actions'
import AppHeader from '../AppHeader';
import './index.css'

const style = {
    background : 'black'
}
const Home  = (props) => (

    <div className='page-wrapper'>
        <AppHeader/>
        <div className='clearfix'> </div>
        <div className='page-container'> 

         <span style={style}>Home page</span>
        </div>
        <div className='page-footer'> 
        </div>
    </div>
)

const mapStateToProps  = state => ({
    name : state.home.name,
    children : state.home.children,
    isFetching : state.home.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getData
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home);