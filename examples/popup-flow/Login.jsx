import { Component } from 'react';
import { Callback } from 'react-auth0-component';

// This page is rendered when Auth0 calls back to our application
// after the authorization flow. Since this is a single-page app,
// and the flow occurred in the popup, we just need to render the
// <Callback /> component, which will automatically close the popup.
export default class Login extends Component {
  render() {
    return <Callback />;
  }
}