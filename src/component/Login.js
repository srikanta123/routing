    import { useState } from "react";
    import { useNavigate} from 'react-router-dom';


    function Login() {
        const navigate = useNavigate();
        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("")

        const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email + " "+password)
    console.log("sumit")
    if(email === 'admin@gmail.com' && "admin@123" ){
        navigate("/admin")
    }else{
        navigate('/dashboard')
    }

        }
        return (
            <>
            <div>
                <form onSubmit={handleSubmit}>
            <h1>This is the Login page</h1>

            <div>
                <label>Email</label>
                <input  type="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input  type="password" value={password}onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
        </div>
            </>
        
        );
    }
    
    export default Login;