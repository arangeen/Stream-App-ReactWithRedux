import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

// OAuth flow based Authentication
class GoogleAuth extends React.Component {
  // null for now because we dont know yet if user is signed in
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "551469314953-mie8fdbdvmnn1em59ldljl7e5m43lc70.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //getting reference to Auth object
          this.auth = window.gapi.auth2.getAuthInstance();
          //figure out if user is signed in
          this.onAuthChange();

          //set up event listener. passing a callback function inside of it
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //getting Authentication status
  onAuthChange = isSignedIn => {
    // if (isSignedIn === true) {
    //   this.props.signIn();
    // } else {
    //   this.props.signOut();
    // }
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  //making a helper method
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
