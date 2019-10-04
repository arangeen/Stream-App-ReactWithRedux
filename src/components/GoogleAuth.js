import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "551469314953-mie8fdbdvmnn1em59ldljl7e5m43lc70.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
