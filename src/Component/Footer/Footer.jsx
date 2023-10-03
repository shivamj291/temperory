import React from "react";
import '../Footer/Footer.css'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="footer-area footer--light">
        <div className="footer-big">
          {/* start .container */}
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img src="/images/logo.png" alt="" className="img-fluid" />
                    <ul className="contact-details">
                      <li>
                        <span className="icon-earphones"></span> Call Us:
                        <a href="tel:344-755-111">344-755-111</a>
                      </li>
                      <li>
                        <span className="icon-envelope-open"></span>
                        <a href="mailto:support@learniverse.com">
                          support@learniverse.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Ends: .footer-widget */}
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Site</h4>
                    <ul>
                      <li>
                        <Link to='/'>About Us</Link>
                      </li>
                      <li>
                        <Link to ='/about'>How It Works</Link>
                      </li>
                      <li>
                        <a href="#">Affiliates</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  {/* end /.footer-menu */}
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* end /.col-lg-3 */}

              <div className="col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Support Policy</a>
                      </li>
                    </ul>
                  </div>
                  {/* end /.footer-menu */}
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* Ends: .col-lg-3 */}
            </div>
            {/* end /.row */}
          </div>
          {/* end /.container */}
        </div>
        {/* end /.footer-big */}

        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>
                    © 2023 <a href="#">learniverse</a>. All rights reserved.
                    Created by
                    <a href="#">learniverse Team</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
