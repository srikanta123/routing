import React from 'react'
import { useNavigate } from 'react-router-dom'
function HelpPage() {
    const navigate =useNavigate()
       

    const handleback=()=>{
        navigate('/')
    }
    return (
        <div>
            <h1>This is the Help page</h1>

            <div><br></br><br></br>
            <button onClick={handleback}>BacktoLoginPage</button>
            </div>
        </div>
    )
}

export default HelpPage