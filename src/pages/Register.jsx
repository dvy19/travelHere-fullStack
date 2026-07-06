import { useState, useNavigate } from "react";

function Register(){

    const[mail,setMail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const navigate=useNavigate();


    const handleSubmit=async(e)=>{

        e.preventDefault()

        setLoading(true)
        setError("")

        try{

            const response=await AuthService.register(
                {
                    email:email,
                    password:password
                }
            );

            navigate("")
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }


   return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Password:</label>
                    <br />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}


export default Register;