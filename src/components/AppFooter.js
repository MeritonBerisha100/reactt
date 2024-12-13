import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/AppFooter.css"; // Sigurohu që CSS është importuar

function AppFooter() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row justify-content-between">
          {/* Kolona 1 - Logo dhe emri */}
          <div className="col-md-3">
            <h1>NEXT INVEST </h1>
          </div>

          {/* Kolona 2 - Linket */}
          <div className="col-md-3">
            <h5 className="footer-title">Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Offline
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="footer-title">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="footer-title">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              Copyright © 2024 LogoIpsum All right reserved
            </p>
          </div>

          {/* Ikonat e rrjeteve sociale */}
          <div className="col-md-6 text-md-right">
            <a href="#" className="footer-icon mx-3">
              <BsFacebook />
            </a>
            <a href="#" className="footer-icon mx-3">
              <BsInstagram />
            </a>
            <a href="#" className="footer-icon mx-3">
              <BsTwitter />
            </a>
            <a href="#" className="footer-icon mx-3">
              <BsGithub />
            </a>
            <a href="#" className="footer-icon mx-3">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
