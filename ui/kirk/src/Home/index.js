import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getData } from './store/actions'
import './index.css'

const style = {
    background : '#fff',
    fontSize : 48
}

const Home  = (props) => (
    <div>
        <span style={style}>Home page</span>
        <button onClick={()=>props.getData()}>Get Forces Data</button>
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