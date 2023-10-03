import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import store from '../Redux/Store'
import { StuAuthAction, TeachAuthAction } from '../Redux/Action';

export default function LoginStudent() {
    const data = store.getState();

    const [state,setState] = useState({
        Email:'',
        Password:'',
        user:''
    })
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    console.log(data)


    function setTheData(e){
        e.preventDefault();

        if(state.user == 'Student'){
          var flag = false;
          if( state.Email == 'student@gmail.com'){
                flag = true
                if(  state.Password == 'student123'){
                  StuAuthAction(true);
                
                  alert('Log in Succesfull for student')
                  navigate1('/student')
                 }else{
                   alert('Wrong Password')
                 }
          }else{
              for(var i = 0 ; i < data.Student.length ; i++){
             
                  if((data.Student[i].Email == state.Email)){
                      flag = true;
                    if( data.Student[i].Password == state.Password){
                      StuAuthAction(true);
                     alert('Log in Succesfull for student')
                     navigate1('/student')
                    }else{
                      alert('Wrong Password')
                    }
                  }
              }
          }
         
              if(!flag){
                 alert('user not exist in student data, signUp first')
              }
        }else if(state.user == 'Teacher'){
          var flag = false;
          if( state.Email == 'teacher@gmail.com'){
                flag = true
                if(  state.Password == 'teacher123'){
                   TeachAuthAction(true);
                   alert('Log in Succesfull for teacher')
                   navigate2('/instructure')
                 }else{
                   alert('Wrong Password')
                 }
          }else{
              for(var i = 0 ; i < data.Admin.length ; i++){
             
                  if((data.Admin[i].Email == state.Email)){
                      flag = true;
                    if( data.Admin[i].Password == state.Password){
                      TeachAuthAction(true);
                     alert('Log in Succesfull for teacher')
                     navigate2('/instructure')
                    }else{
                      alert('Wrong Password')
                    }
                  }
              }
          }
         
              if(!flag){
                 alert('user not exist in teacher data, signUp first')
              }
        }
       
      
    }
    console.log(state)
    
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
                <li><Link to="/contact"> Contact </Link> </li>
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
        <div style={{border:'2px solid red',padding:'10%',display:'flex',justifyContent:'center',background:'teal'}}>
        <form action="" style={{display:'flex',flexDirection:'column',width:'400px',height:'250px',border:'2px solid gray',borderRadius:'20px',justifyContent:'space-around',padding:'20px 10px'}} onSubmit={(e)=>setTheData(e)}>
    
            <input type="Email"  placeholder='Enter your Email here' style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,Email:e.target.value})} required/>
            <input type="text"  placeholder='Password' style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,Password:e.target.value})} required/>
            <select name="" id="" style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,user:e.target.value})}>
                <option value=''>select the user type</option>
                <option value='Student'>Student</option>
                <option value='Teacher'>Teacher</option>
             </select>
            <input type="submit" name="" id="" style={{padding:'10px 20px',background:'crimson',color:'teal',border:'2px solid teal'}} />
          
        </form>
        </div>
        
    </div>
  )
}
