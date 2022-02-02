import React from 'react';
import '../../App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { signInWithGoogle } from '../../store/reducers/auth/actions';
import { withRouter } from 'react-router';

const Login = ({
  history,
  signInWithGoogleConnect
}) => {

  const onClick = () => {
    signInWithGoogleConnect()
      .then(res => { console.log(res) })
  }

  return (
    <div className="App login">
      <h1>Google Keep Clone</h1>
      <button onClick={onClick} type="button" class="login-with-google-btn" >
        Sign in with Google
      </button>
      <p className="or">OR</p>
      <button onClick={() => history.push("/public/note")} type="button" class="login-with-skip-btn" >
        Skip, I want to make a public note
      </button>
    </div>
  )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signInWithGoogleConnect: signInWithGoogle
}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

