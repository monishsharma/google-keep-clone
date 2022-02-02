import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

export const PublicRoutes = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            render={(props) => !isAuthenticated ? <Component {...props} /> : <Redirect replace to="/"  />}
        />
    )
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes)

