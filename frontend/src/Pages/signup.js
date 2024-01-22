import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUpForm = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const {signup, isLoading, error} = useSignup();

    const handleSubmit = async(event)=>{
        event.preventDefault();

        await signup(email, pass);
    }


    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign UP!</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            <label>Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="" />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SignUpForm;