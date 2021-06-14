/**
 * 164 Toolbox / Navbar
 * Konstantin Zaremski
 * -- June 11, 2021
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-primary fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>
              <img alt='Brand' className='mr-3' src='/static/img/toolbox-icon-only.png' style={{ width: "40px" }}/>
              <span>164 Toolbox</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}