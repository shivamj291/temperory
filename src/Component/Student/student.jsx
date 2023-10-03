import React, { useState } from "react";
import "./StudentPage.css"; // Import your CSS modules

import Header from "../Header/Header";
const Student = () => {
  return (
    <div>
         <Header/>
      <div>
        {/* services */}
        <div class="services pb-5">
          <div class="container">
            <div class="pt-5">
              <h2 class="vc_custom_heading ico_header">Semester : Fall 2023</h2>
              <hr />
              <div class="row">
                <div class="col-md-3">
                  <div class="investor-box">
                    <h2>CSE 5335-004 Web data management </h2>
                    <div class="flip-view">
                      <a href="#">
                        Read More <i class="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="investor-box">
                    <h2>CSE 6363-001 Machine Learning</h2>
                    <div class="flip-view">
                      <a href="#">
                        Read More <i class="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="services pb-5">
        <div class="container">
          <div class="pt-5">
            <button style={{ backgroundColor: "#5ca6fa" }}>
              Book Appointment
            </button>
            {/* <h2 class="vc_custom_heading ico_header">Book Appointment</h2>  */}
            <hr />
          </div>
        </div>
      </div>

      {/*  CHAT BAR BLOCK */}
      <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">
          Chat with us!
          <i
            id="chat-icon"
            style={{ color: "#fff" }}
            class="fa fa-fw fa-comments-o"
          ></i>
        </button>
        <div class="content">
          <div class="full-chat-block">
            {/* Message Container */}
            <div class="outer-container">
              <div class="chat-container">
                {/* Messages */}
                <div id="chatbox">
                  <h5 id="chat-timestamp"></h5>
                  <p id="botStarterMessage" class="botText">
                    <span>Loading...</span>
                  </p>
                </div>

                {/* User input box  */}
                <div class="chat-bar-input-block">
                  <div id="userInput">
                    <input
                      id="textInput"
                      class="input-box"
                      type="text"
                      name="msg"
                      placeholder="Tap 'Enter' to send a message"
                    />
                    <p></p>
                  </div>

                  <div class="chat-bar-icons">
                    <i
                      id="chat-icon"
                      style={{ color: "crimson" }}
                      class="fa fa-fw fa-heart"
                      onclick="heartButton()"
                    ></i>
                    <i
                      id="chat-icon"
                      style={{ color: "#333" }}
                      class="fa fa-fw fa-send"
                      onclick="sendButton()"
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
  );
};

export default Student;
