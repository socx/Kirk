import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import { logout } from './store/actions'

class Logout extends React.Component{
    componentWillMount(){
        console.log('logout will mount')
        this.props.dispatch(logout())
        console.log('logout will push to /')
        this.props.dispatch(push('/'))
    }

    render(){
        return null;
    }
}

export default connect()(Logout)