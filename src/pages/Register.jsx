import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from '../services/AuthService'

function Register(){

    const[mail,setMail]=useState("");

    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const navigate=useNavigate();


    const handleSubmit=async(e)=>{

        e.preventDefault()

        console.log("form submitted")
        setLoading(true)
        setError("")

        try{

            const response=await AuthService.register(
                {
                    email:mail,
                    password:password,
                    role:"user"
                }
            );

            //console.log(response.data);
            //console.log(response.data.tokens.refresh)

            localStorage.setItem("refreshToken", response.data.tokens.refresh);
            localStorage.setItem("accessToken", response.data.tokens.access);

            navigate("/home")
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
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
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

                <button type="submit" className="bg-blue-500 text-white-400 p-4">Register</button>
            </form>
        </div>
    );
}


export default Register;