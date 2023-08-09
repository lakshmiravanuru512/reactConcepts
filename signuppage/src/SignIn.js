import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export const SignIn = () => {
  return <div>
    
    <div style={{
        paddingTop:50,
        marginBottom:10,
        display:"flex",
        justifyContent:"center"
    }}>
        <Typography variant='h6'>Welcome back. Sign In below</Typography></div>
    
    <div style={{display:"flex",
                justifyContent:"center"}}>
    <Card variant="outlined"style={{width:400,padding:20 }}>
    <TextField 
    fullWidth={true}
    id="outlined-basic" 
    label="Email"
     variant="outlined" />
   <br/> <br/>
   <TextField 
    fullWidth={true}
    id="outlined-basic" 
    label="Password"
     variant="outlined" />
   <br/> <br/>
   <Button  size="large" variant="contained">Sign In</Button>
   </Card>
   </div>
   </div>
}
