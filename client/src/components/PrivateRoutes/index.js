import { useStoreState } from 'easy-peasy'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {

    const isAuthenticated = useStoreState(state => state.admin.isAuthenticated)

    return (
        <Route
            {...rest}
            render={props => isAuthenticated ? <Component {...props} /> : <Redirect to={'/login'} />}
        />
    )
}


export default PrivateRoute