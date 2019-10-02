import React from "react";

// OAuth flow based Authentication
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "678330659585-pg1qqmk9msjigcsb62mdd6r6dutt3k0g.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //getting reference to Auth object
          this.auth = window.gapi.auth2.getAuthInstance();
          //figure out if user is signed in
          this.onAuthChange();
          //set up event listener
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //getting Authentication status
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  //making a helper method
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;
