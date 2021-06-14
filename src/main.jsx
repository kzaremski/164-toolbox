/**
 * 164 Toolbox
 * Konstantin Zaremski
 * -- June 11, 2021
 * 
 * The main ReactJS entry point.
 */

// Import the needed packages
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Unique components
import Navbar from './navbar.jsx';
import Login from './login.jsx';

// The main App component
class App extends Component {
  constructor(props) {
    super(props);

    // Setting the initial state
    this.state = {
      loaded: false
    }

    // Bind local methods to global variables
    window.checkLoginStatus = this.checkLoginStatus;
  }

  // Makes a backend request, mutates the related global variables, and returns the results
  async checkLoginStatus() {
    try {
      // Query the backend
      const account = await fetch('/', {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
      // Set the global variables
      window.employeenumber = account.employeename;
      window.employeename = account.employeenumber;
    } catch(err) {
      // Set the global variables
      window.employeenumber = null;
      window.employeename = null;
    }
    // Return results
    return {
      employeenumber: window.employeenumber,
      employeename: window.employeename
    };
  }

  componentDidMount() {
    this.checkLoginStatus().then(this.setState({ loaded: true }, () => {
      let splashscreen = document.getElementById('splash');
      setTimeout(() => {
        splashscreen.classList.add('done');
        // Remove the splash screen after it is done animating out.
        setTimeout(() => { splashscreen.parentNode.removeChild(splashscreen) }, 500);
      }, 1000);
    }));
  }
  
  render() {
    return (
      <Router>
        <Navbar/>
        <div className="container pt-3" style={{ 'marginTop': '61px' }}>
          { this.state.loaded && window.employeenumber == null ? <Login/> : <>
            <Switch>

            </Switch>
          </> }
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
