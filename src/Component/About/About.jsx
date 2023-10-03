import '../About/About.css'
import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-2">
            <div className="logo">
              <Link to="../index.html" title="logo"> learniverse </Link>
            </div>
            <div className="mob-menu">
              <span>
                <i className="fa fa-bars"></i>
              </span>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-10">
            <div className="main-menu">
              <ul className="nav">
                <li><Link to="/"> About </Link> </li>
                <li><Link > Contact </Link> </li>
                <li><Link to="/login"> login </Link> </li>
                <li><Link to="/signup"> signup </Link> </li>
                <li><Link to="/admin"> Admin </Link> </li>
                <li><Link to="/QO"> Quality officer</Link> </li>
                <li><Link to="/instructure"> Instructure </Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about">
          <br />
          <br />
          <h1>About Learniverse</h1>
          <p>
            An online learning management system, or LMS, is called Learniverse.
            Learning institutions, educators, and students utilize it to access and administrator the online course materials and to interact with one another regarding skill improvement and academic success. 
            The customizable course development and management tools, user and course analytics, and corporate communication capabilities all come with Learniverse. 
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide world-class instruction and a transformative learning experience to budding computer scientists. We are committed to providing a challenging and cutting-edge curriculum that fosters creativity and intellectual curiosity. Our goal is to give each student individualized advice and assistance so they may realize their maximum potential via ongoing performance monitoring and assessment. We are dedicated to creating a supportive, welcoming, and forward-thinking environment where academics, students, and business partners collaborate to push the boundaries of computer science knowledge.
          </p>

          <h2>Our Vision</h2>
          <p>
            Our vision is to redefine the parameters of academic accomplishment within the MSC Program by setting the standard for excellence in computer science teaching and performance assessment. In the future, we see our graduates as pioneers and leaders in the dynamic field of computer science, equipped with the knowledge, abilities, and self-assurance necessary to create the digital age. We strive to continuously improve our curriculum through stringent performance monitoring and assessment, ensuring that every student realizes their full potential and eventually making a lasting contribution to the global digital scene.
          </p>
        </div>
      </div>
    </div>
  );
}
