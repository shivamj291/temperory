import React from 'react'
import "../Header/Header.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { StuAuthAction } from '../Redux/Action'
export default function Header() {
    const navigate = useNavigate()
    function logout(){
        StuAuthAction(false)
       navigate('/login')
    }
  return (
    <div>
        <header>
      <div class="container">
         <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-12 col-xl-3">
               <div class="logo">
                  <Link to='/'>learniverse </Link>
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
                  <li><Link to='/admin'>Admin</Link> </li>
                     <li><Link>Chat </Link> </li>
                     <li><Link> Grades </Link> </li>
                     <li><Link> Exam </Link> </li>
                      <li><Link> Account </Link> </li> 
                    <li onClick={logout}><Link>  Signout </Link> </li>
                     </ul>
               </div>
            </div>
         </div>
      </div>
   </header>
    </div>
  )
}
