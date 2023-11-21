import React from 'react'
import "../stylesheets/Footer.css";
import {NavLink} from "react-router-dom";
import { Button } from '@mui/material';

const Footer = () =>{
  return (
    <div className='Contact-short'>
         <div className="grid grid-two-column">
            <div>
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>
            </div>
            <div>
                <NavLink to="/">
                    <Button>Get Started</Button>
                </NavLink>
            </div>
         </div>
      
    </div>
  )
}

export default Footer
