import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Nav extends Component {
  render() {
    return (
      <div classname="navnav">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"> <img class="img-Cover" src="image/LOGO.png" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="#history">ABOUT</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#product" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PRODUCT
        </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#taste">TASTE</a>
      </li>

      <li class="nav-item">
        <a class="nav-link disabled" href="#contact7">CONTACT</a>
      </li>

      
    </ul>

    
   
  </div>
</nav>
          </div>
        



    );
  }
}


export default Nav;
