import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { signInWithGoogle } from './store/reducers/auth/actions';
import Login from './component/login';
import { PrivateRoutes } from './hoc/PrivateRoutes';
import { PublicRoutes } from './hoc/PublicRoutes';
import { Switch } from "react-router-dom";
import Home from './containers/home';


export const App = ({
  accesstoken
}) => {


  return (
    <div>
    <Switch >
        <PrivateRoutes exact path="/" exact component={Home} isAuthenticated={!!accesstoken} />
        <PublicRoutes path="/login" exact  component={Login} isAuthenticated={!!accesstoken} />
        <PublicRoutes exact path="/public/note" exact component={Home} isAuthenticated={!!accesstoken} />
        <PublicRoutes  path="*" exact component={Login} isAuthenticated={!accesstoken} />

      </Switch>
    </div>
  )
}



const mapStateToProps = ({
  auth: {
    accesstoken
  }
}) => ({
  accesstoken
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signInWithGoogleConnect: signInWithGoogle
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App)

