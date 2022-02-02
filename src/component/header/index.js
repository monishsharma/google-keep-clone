import React from 'react'
import "./header.css";
import { logout } from "../../store/reducers/auth/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Header = ({
    auth,
    history,
    logoutConnect
}) => {

    const Login = () => {
        history.replace("/login");
    }
 
    return (
        <div className="header">
            <div className="heading_container">
                <h1>Google Keep Clone</h1>
            </div>
            { 
                auth.user && auth.user.uid  ? 
                    <h1 onClick={logoutConnect}>Logout</h1>
                    :
                    <h1 onClick={Login}>Login</h1>
            }

        </div>
    )
}

const mapStateToProps = ({
    auth
}) => ({
    auth
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logoutConnect: logout
  }, dispatch);
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

