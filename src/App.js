import React, { Component } from 'react';
import './App.css';
import Users from './containers/Users';
import FormAddUser from './containers/FormAddUser';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <Users />
            <FormAddUser />
          </div>
          <div className='col-md-6'>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
