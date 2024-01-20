import { useState } from "react";

const LoginForm = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async(event)=>{
        event.preventDefault();
    }


    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>LOGIN!</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            <label>Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="" />
            <button>Login</button>
        </form>
    )
}

export default LoginForm;