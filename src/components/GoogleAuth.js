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

  //making a helper method
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in.</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in.</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
