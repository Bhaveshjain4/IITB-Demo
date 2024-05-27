import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { validateEmail,validatePassword,validateusername,comparePassword } from "./validations";

export default function SignUp()
{
    let navigate=useNavigate();
    const [signUpDetails,setSignUpDetails]=useState({username:'',email:'',password:'',confirmPassword:''})
    const [isusernameValid,setusernameValid]=useState(false)
    const [isemailValid,setemailValid]=useState(false)
    const [ispasswordValid,setpasswordValid]=useState(false)
    const [ispasswordMatch,setpasswordMatch]=useState(false)
    function afterSignUpNavigate()
    {
         for(let key in signUpDetails)
          {
            console.log(key," : ",signUpDetails[key])
          }
         navigate('/')
    }

    function handleChange(e)
    {
      const{name,value}=e.target
      setSignUpDetails({...signUpDetails,[name]:value})
      if(name==='username')
      {
        setusernameValid(validateusername(value))
      }
      else if(name==='email')
      {
        setemailValid(validateEmail(value))
      }
      else if(name==='password')
      {
        setpasswordValid(validatePassword(value))
      }
      else if(name==='confirmPassword')
      {
        setpasswordMatch(comparePassword(signUpDetails['password'],value))
      }
    }

    return (
        <div className="flex items-center  min-h-screen bg-gray-100 justify-center">
      <div
        className="relative flex gap-0 flex-col m-6 space-y-0 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/*-- left side --*/}
        <div className="bg-no-repeat flex flex-col justify-center p-8 rounded-t-2xl md:p-14 md:rounded-l-2xl md:rounded-t-none" style={{backgroundImage:" linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.6)),url('https://kscpl.com/wp-content/uploads/2017/02/FACULTY-VIEW-.jpg')",backgroundSize:'cover'}}>
          
          <span className="text-4xl font-bold text-blue-950">IIT Bombay</span>
          <span className="mb-3 text-xl font-bold text-blue-950">Sign up for Job Search</span>
        </div>
         {/* right side */} 
        <form className="relative flex flex-col my-6 p-4 bg-blue-50 space-y-8 rounded-b-2xl md:flex-col md:space-y-0 md:rounded-r-2xl md:rounded-l-none" onSubmit={()=>{afterSignUpNavigate()}}>
            <div className="pt-2 px-4 md:p-4">
                <span className="mb-2 text-md">Username</span>
                <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={signUpDetails['username']}
                onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="px-4 md:p-4">
                <span className="mb-2 text-md">Email</span>
                <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={signUpDetails['email']}
                onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="px-4 md:p-4">
                <span className="mb-2 text-md">Password</span>
                <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="password"
                id="password"
                value={signUpDetails['password']}
                onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="px-4 md:p-4">
                <span className="mb-2 text-md">Confirm Password</span>
                <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="confirmPassword"
                id="confirmPassword"
                value={signUpDetails['confirmPassword']}
                onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className='pt-1 px-4 md:p-4'>
            <button disabled={!(isusernameValid&&isemailValid&&ispasswordValid&&ispasswordMatch)} 
            type='submit'
            className={!(isusernameValid&&isemailValid&&ispasswordValid&&ispasswordMatch)===true?"w-full border bg-blue-300 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md":"w-full border bg-blue-600 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md"}
            >
            Sign Up
            </button>
            <div className="pb-2 text-center text-gray-400">
            Already have an account?
            <span className="font-bold cursor-pointer text-blue-600" onClick={()=>{navigate('/')}}> Login</span>.
            </div>
            </div>
        </form>
      </div>
    </div>
    )
}