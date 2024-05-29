import React,{useState} from "react";
import Google from "../assets/Google.png";
import { useNavigate } from "react-router-dom";
import { validateEmail,validatePassword } from "./validations";

export default function Login() 
{
  let navigate=useNavigate();

  function afterSigninNavigate()
  {
    navigate('/home')
  }
  
  function SignupOnclick()
  {
    navigate('/signup')
  }
  const [isEmailValid,setEmailValid]=useState(false)
  const [isPasswordValid,setPasswordValid]=useState(false)
  const [loginCredentials,setLoginCredentials]=useState({email:'',password:''})

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setLoginCredentials({...loginCredentials,[name]:value})

    if(name=='email')
    {
      setEmailValid(validateEmail(value))
    }
    else
    {
      setPasswordValid(validatePassword(value))
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/*-- left side --*/}
        <div className="flex flex-col justify-center p-8 md:p-14 mx">
          <span className="mb-3 text-4xl font-bold text-blue-950">IIT Bombay</span>
          <span className="mb-3 text-xl font-bold text-blue-950">Job Search</span>
          <span className="font-light text-gray-400 mb-3">
            Hi! Please enter your details
          </span>
          <div className="py-2">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={loginCredentials.email}
              onChange={(e)=>{handleChange(e)}}
            />
          </div>
          <div className="py-2">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              value={loginCredentials.password}
              onChange={(e)=>{handleChange(e)}}
            />
          </div>
          <div className="flex justify-between w-full pb-4">
            {/* <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember</span>
            </div> */}
            <span className="font-bold text-sm cursor-pointer hover:shadow-sm">Forgot password</span>
          </div>
          <button disabled={!(isEmailValid&&isPasswordValid)} 
            className={!(isEmailValid&&isPasswordValid)===false?"w-full border bg-blue-600 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md":"w-full border bg-blue-300 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md"}
            onClick={()=>{afterSigninNavigate()}}
          >
            Sign in
          </button>
          <button
            
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:shadow-md"
          >
            <img src={Google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold cursor-pointer text-blue-600" onClick={()=>{SignupOnclick()}}> Sign up! </span>
          </div>
        </div>
         {/* right side */} 
        <div className="relative">
          <div      
            className="w-[400px] h-full bg-no-repeat rounded-r-2xl md:block object-cover " 
            style={{backgroundImage:"url('../assets/iitbombay.jpg')",backgroundSize:'cover'}}
          />

          {/* <img
            src={loginImage}
            alt="img"
            className="w-[400px] h-full  rounded-r-2xl md:block object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
}