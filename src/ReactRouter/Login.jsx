import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

let Login = ({setUser}) => {
    let [input,setInput] = useState("");
    let navigate = useNavigate();
    console.log(input);
    
    
    return(
        <div className="login">
            <h1>Login Page</h1>
            <div className="inputs">
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button onClick={(e)=>{
                    e.preventDefault();
                    setInput(input);
                    setUser(input);
                    navigate("/dashboard");
                }}>Login</button>
               
                
            </div>
            <NavLink to="/">Back to Home</NavLink>
           
        </div>
    );
}

export default Login;