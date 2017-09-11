
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getData } from './store/actions'
import './index.css'


const Home  = (props) => (
    <div>
        <h1>home</h1>
        <h3>best : { props.name} </h3>
        <div className="home-div">
        {
           props.children.map(child => {
               return (
                   <div key={child.id} >
                    <p><label>ID: </label> <span>{child.id}</span></p>
                    <p><label>Name: </label> <span>{child.name}</span></p>
                    <hr/>
                   </div>
               )
           }) 
            
        }
        </div>
        <button onClick={props.getData} disabled={props.isFetching}>Get Data</button>
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