import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from '../services/AuthService'
import Navbar from "../components/Navbar";

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
       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col font-sans">
    <Navbar />
    
   
    <div className="flex-1 flex justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 transition-all hover:shadow-2xl">
            
           
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Create an Account
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                    Get started with your free account today.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                
                <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-slate-50/50"
                        required
                    />
                </div>

                
                <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-slate-50/50"
                        required
                    />
                </div>

            
                <button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 transform active:scale-[0.98]"
                >
                    Register
                </button>
            </form>

            
            <div className="mt-6 text-center text-xs text-slate-400">
                Secure 256-bit SSL encrypted connection.
            </div>
        </div>
    </div>
</div>
    );
}


export default Register;