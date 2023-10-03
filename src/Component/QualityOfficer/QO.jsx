import React from 'react'
import { Link } from 'react-router-dom'

export default function QO() {
  return (
    <div>
       <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
              <div className="logo">
                <Link to="/" title="logo">learniverse</Link>
              </div>
              <div className="mob-menu">
                <span>
                  <i className="fa fa-bars"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-9">
              <div className="main-menu">
                <ul className="nav">
                  <li><Link to="/student">Students</Link></li>
                  <li><Link to="/instructure">Instructor</Link></li>
                  <li><a href="./PC.html">Coordinator</a></li>
                  <li><Link>Signout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <br />
        <br />
        <div className="services pb-5">
          <div className="container">
            <div className="pt-5">
              <h2 className="vc_custom_heading ico_header">Quality Assurance</h2>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <div className="investor-box">
                    <h2>Quick actions</h2>
                    <button type="button" className="btn btn-primary">Curriculum Evaluation</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">Performance Assessment</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">Student Support and Feedback</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">Faculty Development</button>
                    <div className="flip-view">
                      <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="investor-box">
                    <button type="button" className="btn btn-primary">Assessment Tools</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">Improvement Initiative</button>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">Program Evaluation and Reviews</button>
                    <div className="flip-view">
                      <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
