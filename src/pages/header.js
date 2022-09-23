import React from "react";
import {NavLink, Link} from 'react-router-dom';
import {useEffect} from 'react';
const Header = ()=> {
useEffect( ()=>{
  var c = Array.from(document.getElementsByClassName('nav-link'));
  c.forEach(element => {
      element.addEventListener('click', () => {
          const d = document.getElementById('navbar');
          if (d.classList.contains('navbar-mobile')) {
              document.getElementById("sdbartog").click();
          }
      })    
  });
},[])
    return (
        
        
        <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">Trophime</a></h1>
      
      <a href="#" className="logo"><img src="public/assets/img/logo.png" alt="" className="img-fluid" /></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#work">Work</a></li>
          <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i id='sdbartog' className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
    </header>
    );
}
export default Header;