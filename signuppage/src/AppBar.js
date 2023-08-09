import { Button, Typography } from '@mui/material'
import React from 'react'

export const AppBar = () => {
  return (
    <div style={{display:"flex",
    justifyContent:"space-between",
    padding:4}}>
        <div>
        <Typography>Coursera</Typography>
        </div>
        <div style={{display:"flex"}}>
        <div style={{marginRight:10}}>
        <Button variant='contained'
        onClick={()=>{
          window.location="/signup"
        }}>Sign Up</Button></div>
        <Button variant='contained'
        onClick={()=>{
          window.location="/signin"
        }}>Sign In</Button>
        
        </div>
    </div>
  )
}
