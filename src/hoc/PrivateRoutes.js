import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect replace to="/login"  />}
        />
    )
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes)

