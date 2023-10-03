import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TeachAuthAction } from '../Redux/Action'

export default function Instructure() {
    const navigate = useNavigate();
    function heartButton(){

    }
    function sendButton(){

    }

    function logout(){
        TeachAuthAction(false)
        navigate('/login')
    }
  return (
    <div>
       <header>
      <div class="container">
         <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-12 col-xl-3">
               <div class="logo">
                  <Link to='/'> learniverse </Link>
               </div>
               <div class="mob-menu">
                  <span>
                     <i class="fa fa-bars"></i>
                  </span>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 col-xl-9">
               <div class="main-menu">
                  <ul class="nav">
                     <li><Link to='/student'> Students </Link> </li>
                     <li><a > Files </a> </li>
                     <li><a > Appointment </a> </li>
                    <li><a> Messages </a> </li>
                    <li><a > Profile </a> </li>
                    <li><a onClick={logout} style={{cursor:'pointer',color:'rgb(82,151,255)'}} > Signout </a> </li>
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
            <h2 className="vc_custom_heading ico_header">Instructor</h2>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <div className="investor-box">
                  <h2>Quick actions</h2>
                  <button type="button" className="btn btn-primary">
                    Add new student
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Calculate marks
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Add new course
                  </button>
                  <div className="flip-view">
                    {/* <a href="#">Read More <i className="fas fa-chevron-circle-right"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box">
                  <button type="button" className="btn btn-primary">
                    Exam 1
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Exam 2
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Exam 3
                  </button>
                  <div className="flip-view">
                    <a href="#">
                      Read More <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box">
                  <button type="button" className="btn btn-primary">
                    Mark 1
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Mark 2
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary">
                    Mark 3
                  </button>
                  <div className="flip-view">
                    <a href="#">
                      Read More <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="services pb-5">
        <div className="container">
          <div className="pt-5">
            <button type="button" className="btn btn-primary">
              Create exam
            </button>
            <button type="button" className="btn btn-primary">
              Create Form
            </button>
            <button type="button" className="btn btn-primary">
              Grade
            </button>
            <button type="button" className="btn btn-primary">
              Result
            </button>
          </div>
        </div>
      </div>

      {/* CHAT BAR BLOCK */}
      <div className="chat-bar-collapsible">
        <button id="chat-button" type="button" className="collapsible">
          Chat with us!
          <i
            id="chat-icon"
            style={{ color: '#fff' }}
            className="fa fa-fw fa-comments-o"
          ></i>
        </button>
        <div className="content">
          <div className="full-chat-block">
            {/* Message Container */}
            <div className="outer-container">
              <div className="chat-container">
                {/* Messages */}
                <div id="chatbox">
                  <h5 id="chat-timestamp"></h5>
                  <p id="botStarterMessage" className="botText">
                    <span>Loading...</span>
                  </p>
                </div>

                {/* User input box */}
                <div className="chat-bar-input-block">
                  <div id="userInput">
                    <input
                      id="textInput"
                      className="input-box"
                      type="text"
                      name="msg"
                      placeholder="Tap 'Enter' to send a message"
                    />
                    <p></p>
                  </div>

                  <div className="chat-bar-icons">
                    <i
                      id="chat-icon"
                      style={{ color: 'crimson' }}
                      className="fa fa-fw fa-heart"
                      onClick={heartButton}
                    ></i>
                    <i
                      id="chat-icon"
                      style={{ color: '#333' }}
                      className="fa fa-fw fa-send"
                      onClick={sendButton}
                    ></i>
                  </div>
                </div>
                <div id="chat-bar-bottom">
                  <p></p>
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
