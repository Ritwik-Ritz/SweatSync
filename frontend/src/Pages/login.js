import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const {login, isLoading, error} = useLogin();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        await login(email, pass);
    }


    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>LOGIN!</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            <label>Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="" />
            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default LoginForm;