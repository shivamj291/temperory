import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminAction, StudentAction } from '../Redux/Action';

export default function SignUp() {
    const [state,setState] = useState({
        name:'',
        Email:'',
        Password:'',
        user:''
    })
    const[user,setUser] = useState('')

    console.log(state);

    const[studentArr,setStudentArr] = useState([]);
    const[teacherArr,setTeacherArr] = useState([]);
    console.log(studentArr);
    useEffect(()=>{
        if(user == 'Student'){
           
            StudentAction(studentArr);
        }else if(user == 'Teacher'){
           
            AdminAction(teacherArr)
        }
       
    },[studentArr,teacherArr])
    function setTheData(e){
        console.log(state.user)
        e.preventDefault();
        if(state.user == 'Student'){
            console.log('shivam')
            setUser('Student')
            setStudentArr([...studentArr,state])
        }else if(state.user == 'Teacher'){
            setUser('Teacher')
            setTeacherArr([...teacherArr,state])
        }
    }
   
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
        <div style={{border:'5px solid aqua',padding:'10%',display:'flex',justifyContent:'center',background:'teal'}}>
        <form action="" style={{display:'flex',flexDirection:'column',width:'400px',height:'250px',border:'2px solid gray',borderRadius:'20px',justifyContent:'space-around',padding:'20px 10px'}} onSubmit={(e)=>setTheData(e)}>
            <input type="text"  placeholder='Enter Name' style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,name:e.target.value})}/>
            <input type="Email"  placeholder='Enter your Email here' style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,Email:e.target.value})} required/>
            <input type="text"  placeholder='Enter Password' style={{padding:'10px 20px'}} onChange={(e)=>setState({...state,Password:e.target.value})} required/>
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
