import React from 'react'
import { NavLink } from 'react-router-dom'

const BecomePartner = () => {
  return (
    <div className="contactBg">
    
    <NavLink className="contactBtn white text-center" to="/contact" >
      Contact us to know more
      <i className="fa-solid fa-arrow-right-long"></i>
    </NavLink>
  </div>
  )
}

export default BecomePartner