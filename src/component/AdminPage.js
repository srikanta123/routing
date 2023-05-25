import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
    const navigate =useNavigate()
       

const handleback=()=>{
    navigate('/')
}
    return (
        <div>
            <h1>This is the AdminPage page</h1><br></br><br></br>
            <button  onClick={handleback}>BacktoLoginPage</button>
        </div>
    )

    }
export default AdminPage;