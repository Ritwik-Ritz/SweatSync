import { useState } from "react";

const SignUpForm = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async(event)=>{
        event.preventDefault();
    }


    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign UP!</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
            <label>Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="" />
            <button>Sign Up</button>
        </form>
    )
}

export default SignUpForm;