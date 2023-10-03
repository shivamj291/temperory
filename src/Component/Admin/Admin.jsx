import { Link } from 'react-router-dom';
import '../Admin/Admin.css'
import React, { useEffect, useState } from 'react';
import { AdminAction } from '../Redux/Action';

export default function AdminDashboard() {
   

      const [state,setState] = useState({
        name:'',
        Email:'',
        Password:''
    })

    const[arr,setArr] = useState([]);
    useEffect(()=>{
        AdminAction(arr);
    },[arr])



    function setTheData(e){
        e.preventDefault();
        setArr([...arr,state])
      
    }
    function heartButton() {
        // Handle heart button click
      }
      
      function sendButton() {
        // Handle send button click
      }
    console.log(state)
  return (
    <div>
         <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
            <div className="logo">
              <Link to='/'> learniverse </Link>
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
                {/* Uncomment the lines below to include menu items */}
                <li><Link to='/about'> About </Link> </li>
                
                <li><Link to="/QO"> Quality officer</Link> </li>
               
                <li><Link to = '/student'> Students </Link> </li>
                <li><Link> Program Coordinator </Link> </li>
                <li><Link to='/instructure'> Instructor </Link> </li>
                <li><Link> Signout </Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
      <section className="services pb-5">
        <div className="container">
          <div className="pt-5">
            <h2 className="vc_custom_heading ico_header">Admin</h2>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <div className="investor-box">
                  <h2>Student</h2>
                  <div className="flip-view">
                    <Link>Read More <i className="fas fa-chevron-circle-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box">
                  <h2>Coordinate officer</h2>
                  <div className="flip-view">
                    <Link>Read More <i className="fas fa-chevron-circle-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box">
                  <h2>QA Team</h2>
                  <div className="flip-view">
                    <Link>Read More <i className="fas fa-chevron-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services pb-5">
        <div className="container">
          <div className="pt-5">
            <h2 className="vc_custom_heading ico_header">Reports</h2>
            <hr />
            <div className="row">
              <div className="row col-md-6">
                <div className="user-profiles">
                  <h2>Student Profiles</h2>
                  <div className="user-profile">
                    <h3>User 1</h3>
                    <p><strong>Name:</strong> John Smith</p>
                    <p><strong>Email:</strong> john@example.com</p>
                  </div>

                  <div className="user-profile user-profile--featured">
                    <h3>User 2</h3>
                    <p><strong>Name:</strong> Jane Doe</p>
                    <p><strong>Email:</strong> jane@example.com</p>
                  </div>
                </div>
              </div>
              <div className="row col-md-6">
                <div className="user-profiles">
                  <h2>Teachers Profiles</h2>
                  <div className="user-profile">
                    <h3>User 1</h3>
                    <p><strong>Name:</strong> John Smith</p>
                    <p><strong>Email:</strong> john@example.com</p>
                  </div>

                  <div className="user-profile user-profile--featured">
                    <h3>User 2</h3>
                    <p><strong>Name:</strong> Jane Doe</p>
                    <p><strong>Email:</strong> jane@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="row col-md-6">
                <div id="chart-container">
                  <canvas id="myChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="admin-access">
        <div className="container">
          <h2>Admin Access</h2>

          {/* Sample User Account Management Form */}
          <form id="user-management-form" onSubmit={(e)=>setTheData(e)}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter username" onChange={(e)=>setState({name:e.target.value})} required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" onChange={(e)=>setState({Email:e.target.value})} required/>

            <label htmlFor="role">Role:</label>
            <select id="role" name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <input type="submit" style={{background:'rgb(82,151,255)',border:'2px solid white',color:'white',padding:'5px 20px',borderRadius:'10px'}}/>
          </form>

          {/* Example User List (Replace with your data) */}
          <div id="user-list">
            <h3>User List</h3>
            <ul>
              <li>User 1 - john@example.com (User)</li>
              <li>User 2 - jane@example.com (Admin)</li>
              {/* Add more user entries as needed */}
            </ul>
          </div>
        </div>
      </section>

      {/* CHAT BAR BLOCK */}
      <div className="chat-bar-collapsible">
        <button id="chat-button" type="button" className="collapsible">Chat with us!
          <i id="chat-icon" style={{ color: '#fff' }} className="fa fa-fw fa-comments-o"></i>
        </button>
        <div className="content">
          <div className="full-chat-block">
            {/* Message Container */}
            <div className="outer-container">
              <div className="chat-container">
                {/* Messages */}
                <div id="chatbox">
                  <h5 id="chat-timestamp"></h5>
                  <p id="botStarterMessage" className="botText"><span>Loading...</span></p>
                </div>

                {/* User input box */}
                <div className="chat-bar-input-block">
                  <div id="userInput">
                    <input id="textInput" className="input-box" type="text" name="msg" placeholder="Tap 'Enter' to send a message" />
                    <p></p>
                  </div>

                  <div className="chat-bar-icons">
                    <i id="chat-icon" style={{ color: 'crimson' }} className="fa fa-fw fa-heart" onClick={heartButton}></i>
                    <i id="chat-icon" style={{ color: '#333' }} className="fa fa-fw fa-send" onClick={sendButton}></i>
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
}

 