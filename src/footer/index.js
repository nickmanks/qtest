import React from 'react';
import './style.scss';

const Footer = ()=> (
  <div className="footer">
    <div className="contain">
      <div className="col">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Mission</li>
          <li>Services</li>
          <li>Social</li>
          <li>Get in touch</li>
        </ul>
      </div>
      <div className="col">
        <h1>Products</h1>
        <ul>
          <li>Qantas Flights</li>
          <li>Qantas Assure</li>
          <li>Destinations</li>
          <li>Book a Flight</li>
        </ul>
      </div>
      <div className="col" />
      <div className="col" />
      <div className="col">
        <h1>Support</h1>
        <ul>
          <li>Contact us</li>
          <li>Web chat</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
