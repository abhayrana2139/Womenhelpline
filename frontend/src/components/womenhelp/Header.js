import { AppBar, Tab, Tabs, Toolbar, colors } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillChrome } from "react-icons/ai";
import { AiFillApple, AiFillGithub } from "react-icons/ai";

const Header = () => {
    const [value, setvalue] = useState()
  return (

    <div className='text-center text-[30px] bg-green-100 sticky'>

Women Helpline  
    <div className=' text-[30px] justify-center bg-red-20 font-extrabold  w-[80%] h-20 bg-blue-5 m-auto text-center'>
    
  
 
    
    <AppBar position="sticky"  >
      <Toolbar AppBar position="sticky" sx={{text: "red", background: " linear-gradient(90deg, rgba(812,773,532,121) 0%, rgba(232,722,279,122) 43%, rgba(0,212,255,1) 100%)" } }>
      
        <Tabs className='flex space-x-7 text-white' value={value} onChange={(e,val)=>setvalue(val)}>
         <div className='flex space-x-11 justify-center font- text-white h-9  bg-red-40 m-auto w-screen m'> 
          <Tab  label="Home" to="/home" component={Link} />
          <Tab label="SaftyTips" to="/SaftyTips" component={Link} />
          <Tab label="Laws" to="/laws" component={Link} />
          <Tab label="Admin" to="/Admin" component={Link} />
          <Tab label="Helpline" to="/Helpline" component={Link} />
          <Tab label="Complaint" to="/Complaint" component={Link} />
          <Tab label="News_and_Notifications" to="/news" component={Link} />
          <Tab label="AboutUs" to="/Aboutus" component={Link} />
          
 
        </div>
         <div className='flex justify-center items-center  bg-pink-30 space-x-1'>
          <AiFillApple size={25}/>
          <AiFillChrome   size={25}/>
          <  AiFillGithub size={25}/>
         </div>
        </Tabs>
      
        
         
      </Toolbar>
      
    
  
    </AppBar>
</div>
</div>


  
  )
}

export default Header
