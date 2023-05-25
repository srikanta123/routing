import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function DashboardPage() {
    const[helppage,setHelppage]=useState()
    const navigate = useNavigate()


    const handleback = () => {
        navigate('/')
    }
    const handleHelppage=()=>{
    navigate('/help');
    }
    return (
    <>
    <div>
   < h1 > This is the DashboardPage page </h1> 
   <button onClick={handleHelppage}>GoToHelppage</button><br></br><br></br>
   <button  onClick={handleback}>BacktoLoginPage</button>
    </div>
    </>
    )
}

export default DashboardPage;