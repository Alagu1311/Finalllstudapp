import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';



function Base({ title, description }) {
    const navigate=useNavigate("")
   
  return (
    <div>
      <div className='btngrp'>
          <Button variant="contained"className='btnal' onClick={()=>navigate("/Render")}>Student</Button>
          <Button variant="contained"className='btnal' onClick={()=>navigate("/Addstud")}>Addstudent</Button>
        <Button variant="contained" className='btnal' onClick={()=>navigate("/Editstud")}>Editstudent</Button>
        </div>
         
          <h3 className='titcen'>{title}</h3>
          <p className='titcen'>
              {description}
          </p>
      
      </div>
  )
}

export default Base;