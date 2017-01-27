import React, { Component } from 'react';
import SubmitForm from '../containers/submitForm';

export default class App extends Component {
  render() {
    var divStyle = {
        marginTop: '50px',
        marginBottom: '50px'
    }
    return (
      <div style={divStyle}>
          <SubmitForm />
      </div>
    );
  }
}
