import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <h1 className=" btn btn-primary btn-lg" >WELCOME TO COFFEE SHOP MANAGEMENT SYSTEM</h1>
      <br />
      <br></br>
      <Link className="btn btn-btn-outline-light me-6  " to="/"><button data-testid="btn" className='btn btn-warning btn-lg '>User page</button>
       </Link>
      <Link className="btn btn-btn-outline-light me-6 " to="/homelib"><button className='btn btn-info btn-lg'>Coffee Item page</button>
       </Link>
       <Link className="btn btn-btn-outline-light me-6 " to=""><button className='btn btn-warning btn-lg'>Cart page</button>
       </Link>
       
        
      
    </div>
  )
}
